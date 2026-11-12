/**
 * Receptor de registros para "Mi FIDE América" (beta).
 * 1. Crear una Google Sheet, Extensiones > Apps Script, pegar este código.
 * 2. Implementar > Nueva implementación > Aplicación web.
 *    Ejecutar como: yo. Quién tiene acceso: cualquier usuario.
 * 3. Copiar la URL /exec en config.js -> REGISTRATION_ENDPOINT.
 */
const COLS = ["createdAt","fideId","name","email","country","whatsapp","consent","fideName","fed","sex","birthYear","std","rapid","blitz","titles","lang","source"];
function doPost(e) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Registros") || SpreadsheetApp.getActiveSpreadsheet().insertSheet("Registros");
  if (sh.getLastRow() === 0) sh.appendRow(COLS);
  const d = JSON.parse(e.postData.contents);
  sh.appendRow(COLS.map(c => d[c] === undefined ? "" : d[c]));
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
