// Configuración de la beta. Editá estos valores sin tocar app.js.
window.APP_CONFIG = {
  // URL para enviar cada registro (POST con JSON) a un Google Apps Script / Sheet.
  // Vacío = los registros quedan solo en este navegador (localStorage).
  REGISTRATION_ENDPOINT: "",
  // CSV publicado de Google Sheets con los eventos (Archivo > Compartir > Publicar en la web > CSV).
  // Vacío = se usa data/events.json. Formato de columnas: ver docs/LEEME.md.
  EVENTS_CSV_URL: "",
  EVENTS_JSON_URL: "data/events.json",
  PLAYERS_PATH: "data/players/",
  PLAYERS_SHARDS: 1000,
  RATING_LIST: "11/2026"
};
