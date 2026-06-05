# Contact form → Google Sheet + email

The contact form posts each enquiry to a **Google Apps Script Web App**, which
appends a row to a Google Sheet **and** emails it to **aivorntech@gmail.com**.
No server or paid service required.

Do this once (sign in as **aivorntech@gmail.com**):

## 1. Create the Sheet
1. Go to <https://sheets.google.com> → **Blank spreadsheet**.
2. Rename it e.g. `HTPL Enquiries`. (The script auto-creates an `Enquiries`
   tab and header row on the first submission.)

## 2. Add the script
1. In the sheet: **Extensions → Apps Script**.
2. Delete the default `Code.gs` contents and paste everything from
   [`google-apps-script/Code.gs`](google-apps-script/Code.gs).
3. **Save** (disk icon).

## 3. Deploy as a Web App
1. **Deploy → New deployment** → gear icon → **Web app**.
2. Set:
   - **Description:** `HTPL contact form`
   - **Execute as:** **Me** (aivorntech@gmail.com)
   - **Who has access:** **Anyone**
3. **Deploy** → **Authorize access** → pick the account → Advanced → *Go to
   project (unsafe)* → **Allow**. (This is Google warning about your own script;
   it's needed so it can write the sheet and send mail.)
4. Copy the **Web app URL** — looks like
   `https://script.google.com/macros/s/AKfy…/exec`.

> Tip: open that URL in a browser — it should return `{"ok":true,...}`.

## 4. Point the site at it
Set the URL as an env var (no code change, recommended):

- **Vercel:** Project → **Settings → Environment Variables** → add
  `VITE_CONTACT_ENDPOINT` = the Web app URL → **Save** → **Redeploy**.
- **Local dev:** create `htpl-react/.env.local` with:
  ```
  VITE_CONTACT_ENDPOINT=https://script.google.com/macros/s/AKfy…/exec
  ```

That's it — submissions now land in the sheet and your inbox.

## Notes
- Until `VITE_CONTACT_ENDPOINT` is set, the form still shows a success message
  but **does not deliver** anything (a warning is logged to the console).
- To change the recipient, edit `NOTIFY_EMAIL` at the top of `Code.gs` and
  **redeploy** (Deploy → Manage deployments → edit → new version).
- If you edit the script later, always create a **new version** in *Manage
  deployments* — the `/exec` URL stays the same.
