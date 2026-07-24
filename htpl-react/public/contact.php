<?php
declare(strict_types=1);
/**
 * HTPL website contact form handler.
 * - Saves each enquiry to the admin-panel database (`enquiries` table)
 * - Emails a notification to admin@hindusthantechnologies.com via Google
 *   Workspace SMTP (PHPMailer) — far more reliable than PHP's mail().
 * Lives at the web root next to index.html.
 */

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception as PHPMailerException;

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
ini_set('display_errors', '0');
error_reporting(0);

// SMTP credentials (Google Workspace app password) live in a separate file.
require __DIR__ . '/mail-config.php';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// strip CR/LF to prevent email header injection
$noCRLF = static fn(string $s): string => trim(str_replace(["\r", "\n"], ' ', $s));
// read a field by camelCase (React) or snake_case name
$field  = static fn(string $a, string $b = ''): string =>
    trim((string)($_POST[$a] ?? ($b !== '' ? ($_POST[$b] ?? '') : '')));

$full  = $field('fullName', 'full_name');
$org   = $field('organization');
$phone = $field('phone');
$email = $field('email');
$req   = $field('requirement');
$msg   = $field('message');

if ($full === '' || $phone === '' || $email === '') {
    echo json_encode(['success' => false, 'message' => 'Please fill in all required fields.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// ---- 1) save to the admin-panel database ----
$saved = false;
$cfg = __DIR__ . '/htpl-admin/includes/config.php';
if (is_file($cfg)) {
    require $cfg; // defines DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS
    try {
        $port = defined('DB_PORT') ? (int)DB_PORT : 3306;
        $pdo = new PDO(
            'mysql:host=' . DB_HOST . ';port=' . $port . ';dbname=' . DB_NAME . ';charset=utf8mb4',
            DB_USER,
            DB_PASS,
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
        $st = $pdo->prepare(
            'INSERT INTO enquiries (full_name, organization, phone, email, requirement, message, ip_address, status)
             VALUES (?, ?, ?, ?, ?, ?, ?, \'new\')'
        );
        $st->execute([
            $full,
            $org !== '' ? $org : null,
            $phone,
            $email,
            $req !== '' ? $req : null,
            $msg !== '' ? $msg : null,
            $_SERVER['REMOTE_ADDR'] ?? null,
        ]);
        $saved = true;
    } catch (Throwable $e) {
        $saved = false;
    }
}

// ---- 2) email notification via Google Workspace SMTP (PHPMailer) ----
// Load PHPMailer: Composer autoload if present, else the bundled src/.
// Guarded with is_file() so a missing library degrades to "no email" rather
// than a fatal error that would break the JSON reply and lose the enquiry.
if (is_file(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
} elseif (is_file(__DIR__ . '/PHPMailer/src/PHPMailer.php')) {
    require_once __DIR__ . '/PHPMailer/src/Exception.php';
    require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/src/SMTP.php';
}

$subject = 'New HTPL Enquiry — ' . $noCRLF($full);
$body = implode("\r\n", [
    'New enquiry from the HTPL website',
    '',
    'Name:         ' . $full,
    'Organization: ' . ($org !== '' ? $org : '-'),
    'Phone:        ' . $phone,
    'Email:        ' . $email,
    'Requirement:  ' . ($req !== '' ? $req : '-'),
    '',
    'Message:',
    ($msg !== '' ? $msg : '-'),
    '',
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? '-'),
]);

$mailSent = false;
try {
    if (!class_exists(PHPMailer::class)) {
        throw new RuntimeException('PHPMailer library not found on the server.');
    }
    $mail = new PHPMailer(true);
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = SMTP_SECURE;      // 'ssl' (465) or 'tls' (587)
    $mail->Port       = SMTP_PORT;
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom(MAIL_FROM, MAIL_FROM_NAME);
    $mail->addAddress(MAIL_TO);
    // Reply directly to the person who filled the form.
    $mail->addReplyTo($noCRLF($email), $noCRLF($full));

    $mail->Subject = $subject;
    $mail->Body    = $body;

    $mail->send();
    $mailSent = true;
} catch (Throwable $e) {
    $mailSent = false; // details in $mail->ErrorInfo (kept out of the JSON reply)
}

// ---- response ----
// Success if the enquiry was captured either way (DB row and/or email).
if ($saved || $mailSent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your enquiry has been received. We will contact you shortly.']);
} else {
    echo json_encode(['success' => false, 'message' => 'Sorry, something went wrong. Please email ' . MAIL_TO . ' directly.']);
}
