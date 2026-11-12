# Mi FIDE América · beta

Web app estática (HTML + CSS + JS, sin servidor). Se publica copiando la carpeta `site/` a cualquier hosting estático.

## Archivos
- `index.html`, `styles.css`, `app.js`: la app.
- `config.js`: configuración (endpoint de registros, CSV de eventos).
- `federations.js`: las 42 federaciones, su zona (SUD, CAC, NOR) y los nombres de títulos de árbitro/entrenador.
- `data/events.json`: eventos. Es el único archivo que hay que tocar para actualizar torneos y seminarios.
- `data/players/000.json … 999.json`: lista FIDE completa partida en 1000 archivos (FIDE ID % 1000).
- `docs/events_template.csv`: los mismos eventos en formato planilla.
- `docs/apps_script.gs`: receptor de registros para Google Sheets.

## Reglas de elegibilidad (torneos)
- Solo federaciones de FIDE América. `region`: SUD, CAC, NOR (una zona), AME o WORLD (cualquiera de las 42).
- Categorías: `born` = año de nacimiento mínimo ("2012 o posterior"); `bornMax` opcional para senior; `sex`: `open` o `F`.
- `ratingMin` / `ratingMax`: límites sobre el Elo clásico (vacío = sin límite).
- Seminarios y cursos (`type: seminar`): visibles para todos, también fuera de América.

## Eventos desde Google Sheets
1. Importar `docs/events_template.csv` en una Google Sheet.
2. Archivo > Compartir > Publicar en la web > hoja > CSV. Copiar el enlace.
3. Pegarlo en `config.js` -> `EVENTS_CSV_URL`. Si el CSV falla, la app usa `events.json`.
Columna `categories`: `Nombre|añoMinimo|open/F` separadas por `;` (ej. `Sub-14|2012|open; Sub-14 Femenino|2012|F`).

## Registros
- Se guardan en el navegador (localStorage, clave `fa_registros_v1`). `#/registros` los lista y exporta a CSV.
- Si `REGISTRATION_ENDPOINT` tiene una URL, cada registro además se envía por POST (JSON) a esa URL. Ver `docs/apps_script.gs`.

## Actualizar la lista FIDE
Bajar `https://ratings.fide.com/download/players_list.zip` y correr `build/build_players.py`.
