<?php
declare(strict_types=1);
/**
 * HTPL website newsletter signup handler.
 * Emails each subscription to admin@hindusthantechnologies.com via Google
 * Workspace SMTP (PHPMailer), reusing the same credentials as contact.php.
 * Email only — nothing is written to the database.
 * Lives at the web root next to index.html.
 */

use PHPMailer\PHPMailer\PHPMailer;

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

$email = trim((string)($_POST['email'] ?? ''));

if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Please enter a valid email address.']);
    exit;
}

// Load PHPMailer: Composer autoload if present, else the bundled src/.
// Guarded with is_file() so a missing library degrades to a clean JSON error
// rather than a fatal that would break the reply.
if (is_file(__DIR__ . '/vendor/autoload.php')) {
    require_once __DIR__ . '/vendor/autoload.php';
} elseif (is_file(__DIR__ . '/PHPMailer/src/PHPMailer.php')) {
    require_once __DIR__ . '/PHPMailer/src/Exception.php';
    require_once __DIR__ . '/PHPMailer/src/PHPMailer.php';
    require_once __DIR__ . '/PHPMailer/src/SMTP.php';
}

$clean = $noCRLF($email);
$body  = implode("\r\n", [
    'New newsletter subscription from the HTPL website',
    '',
    'Email: ' . $clean,
    '',
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? '-'),
]);

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
    $mail->addAddress(MAIL_TO);           // admin@hindusthantechnologies.com
    // Reply directly to the person who subscribed.
    $mail->addReplyTo($clean);

    $mail->Subject = 'New HTPL Newsletter Subscription — ' . $clean;
    $mail->Body    = $body;

    $mail->send();
    echo json_encode(['success' => true, 'message' => 'Thank you — you are on the list.']);
} catch (Throwable $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, something went wrong. Please email ' . MAIL_TO . ' directly.',
    ]);
}
