/**
 * PASTE THIS ENTIRE FILE in Google Sheet → Extensions → Apps Script
 *
 * After pasting: Save → Deploy → Manage deployments → Edit → New version → Deploy
 * Execute as: Me | Who has access: Anyone
 *
 * Tip: Remove the Debug sheet tab if you created one earlier — it used extra quota.
 */

function getRegistrationSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const names = [
    "TGM Registrations",
    "TGM Registration",
    "tgm registration",
    "Sheet1",
  ];

  for (let i = 0; i < names.length; i++) {
    const sheet = ss.getSheetByName(names[i]);
    if (sheet) return sheet;
  }

  return ss.getActiveSheet();
}

function parseRequestData(e) {
  const fromParams = e.parameter || {};
  if (Object.keys(fromParams).length > 0) {
    return fromParams;
  }

  if (!e.postData || !e.postData.contents) {
    return {};
  }

  const contents = e.postData.contents.trim();

  if (contents.charAt(0) === "{") {
    return JSON.parse(contents);
  }

  const result = {};
  const pairs = contents.split("&");

  for (let i = 0; i < pairs.length; i++) {
    const pair = pairs[i].split("=");
    const key = decodeURIComponent((pair[0] || "").replace(/\+/g, " "));
    const value = decodeURIComponent((pair[1] || "").replace(/\+/g, " "));
    if (key) result[key] = value;
  }

  return result;
}

function ensureHeaders(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    "Timestamp",
    "Type",
    "Name",
    "Email",
    "Phone",
    "City",
    "Category",
    "Message",
    "Amount",
  ]);
}

function doPost(e) {
  try {
    const sheet = getRegistrationSheet();
    const data = parseRequestData(e);

    ensureHeaders(sheet);

    sheet.appendRow([
      new Date(),
      data.type || "",
      data.name || "",
      data.email || "",
      data.phone || "",
      data.city || "",
      data.category || "",
      data.message || "",
      data.amount || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "Data saved successfully" })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, message: err.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ success: true, message: "TGM form endpoint is live" })
  ).setMimeType(ContentService.MimeType.JSON);
}

function testAppend() {
  const sheet = getRegistrationSheet();
  ensureHeaders(sheet);
  sheet.appendRow([
    new Date(),
    "test",
    "Test User",
    "test@example.com",
    "9999999999",
    "Bengaluru",
    "Test",
    "Manual test from Apps Script",
    "",
  ]);
}
