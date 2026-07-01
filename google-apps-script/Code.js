/**
 * PASTE THIS ENTIRE FILE in Google Sheet → Extensions → Apps Script
 *
 * After pasting:
 * 1. Save
 * 2. Run "testAppend" — confirm row appears in sheet
 * 3. Deploy → Manage deployments → Edit → Version: NEW VERSION → Deploy
 *    (Editor runs latest code; the website only runs the DEPLOYED version!)
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

function logWebRequest(e, data) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let debug = ss.getSheetByName("Debug");
    if (!debug) {
      debug = ss.insertSheet("Debug");
      debug.appendRow(["Timestamp", "Parameters", "Post body", "Parsed name"]);
    }
    debug.appendRow([
      new Date(),
      JSON.stringify(e.parameter || {}),
      e.postData ? e.postData.contents : "",
      data.name || "(empty)",
    ]);
  } catch (err) {
    // ignore debug errors
  }
}

function doPost(e) {
  try {
    const sheet = getRegistrationSheet();
    const data = parseRequestData(e);

    logWebRequest(e, data);

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
