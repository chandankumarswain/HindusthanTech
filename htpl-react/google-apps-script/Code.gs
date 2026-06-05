/**
 * HTPL contact form → Google Sheet + email notification.
 *
 * Paste this into the Apps Script editor of the Google Sheet that should hold
 * the enquiries (Extensions → Apps Script), then deploy it as a Web App.
 * Full steps: see CONTACT_SETUP.md.
 *
 * On every submission it:
 *   1) appends a row to the sheet (with a header row created on first run), and
 *   2) emails the enquiry to NOTIFY_EMAIL (reply-to = the sender's address).
 */

var NOTIFY_EMAIL = 'aivorntech@gmail.com';
var SHEET_NAME = 'Enquiries';

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000); // avoid two submissions writing the same row
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow(
        ['Timestamp', 'Full Name', 'Organization', 'Phone', 'Email', 'Requirement', 'Message']
      );
      sheet.getRange(1, 1, 1, 7).setFontWeight('bold');
    }

    var p = (e && e.parameter) || {};
    var now = new Date();
    sheet.appendRow([
      now,
      p.fullName || '',
      p.organization || '',
      p.phone || '',
      p.email || '',
      p.requirement || '',
      p.message || '',
    ]);

    var body =
      'New enquiry from the HTPL website\n\n' +
      'Name:         ' + (p.fullName || '-') + '\n' +
      'Organization: ' + (p.organization || '-') + '\n' +
      'Phone:        ' + (p.phone || '-') + '\n' +
      'Email:        ' + (p.email || '-') + '\n' +
      'Requirement:  ' + (p.requirement || '-') + '\n' +
      'Message:      ' + (p.message || '-') + '\n\n' +
      'Received: ' + now;

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: 'New HTPL Enquiry — ' + (p.fullName || 'Website'),
      body: body,
      replyTo: p.email || NOTIFY_EMAIL,
    });

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// Lets you open the deployed URL in a browser to confirm it's live.
function doGet() {
  return json({ ok: true, service: 'HTPL contact form' });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
