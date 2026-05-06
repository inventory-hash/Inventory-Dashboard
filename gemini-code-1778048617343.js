function doGet() {
  // This looks for a file named Index.html
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('Main Data Dashboard')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSheetData() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName("Main data");
  
  if (!sheet) {
    return [["Error", "Sheet 'Main data' not found"]];
  }
  
  return sheet.getDataRange().getValues();
}