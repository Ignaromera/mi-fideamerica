/* Mi FIDE América – beta estática. Sin dependencias. */
(function(){
"use strict";
const C = window.APP_CONFIG, FEDS = window.FEDS, REGIONS = window.REGIONS, OT = window.OTITLES;
const $app = document.getElementById("app");
const LS_REG = "fa_registros_v1", LS_LANG = "fa_lang", LS_LAST = "fa_ultimo_id";

const T = {
 es:{
  heroT:'Tu ajedrez en <span>América</span>, en un solo lugar',
  heroP:'Ingresá tu FIDE ID y mirá los torneos, seminarios y cursos de FIDE América que son para vos.',
  idPh:'Tu FIDE ID (ej. 20000197)', search:'Buscar', searching:'Buscando…',
  tryWith:'Probar con:', notFound:'No encontramos ese FIDE ID en la lista de FIDE. Revisá el número.',
  badId:'Ingresá un FIDE ID válido (solo números).', netErr:'No se pudo consultar la base de jugadores. Probá de nuevo.',
  f1t:'Para jugadores, árbitros, entrenadores y organizadores', f1p:'Funciona con el FIDE ID que ya tenés. Mostramos tus ratings y títulos.',
  f2t:'Solo lo que te corresponde', f2p:'Filtramos por edad, sexo, rating y región: Sudamérica, Centroamérica y el Caribe, Norteamérica o todo el continente.',
  f3t:'Inscripción por tu federación', f3p:'Las inscripciones a los eventos de FIDE América se hacen siempre a través de la federación nacional.',
  isThisYou:'¿Sos vos?', fed:'Federación', born:'Nacimiento', sex:'Sexo', M:'Masculino', F:'Femenino',
  std:'Clásico', rpd:'Rápido', blz:'Blitz', unrated:'s/r', inactive:'Inactivo', otherTit:'Títulos de árbitro / entrenador / organizador', arena:'Arena',
  notMe:'No soy yo', regT:'Registrate para continuar', regP:'Con tu registro te avisamos de nuevos torneos, seminarios y cursos para tu perfil.',
  name:'Nombre y apellido', email:'Email', country:'País de residencia', wa:'WhatsApp (opcional)', waPh:'+54 9 261 …',
  consent:'Acepto recibir novedades y promociones de FIDE América por email y WhatsApp. Puedo darme de baja cuando quiera.',
  consentReq:'Para registrarte tenés que aceptar recibir novedades.', regBtn:'Registrarme y ver mis eventos',
  badEmail:'Revisá el email.', badName:'Completá tu nombre.', badCountry:'Elegí tu país.',
  welcome:'Hola', registered:'Registrado', continueBtn:'Ver mis eventos', logout:'Salir',
  tabT:'Torneos', tabS:'Seminarios y cursos', tabH:'Mi participación',
  noAmT:'Los torneos de FIDE América son para jugadores de las 42 federaciones del continente. Igual podés anotarte a seminarios y cursos.',
  noT:'Por ahora no hay torneos del calendario para tu perfil.', whyNot:'¿Por qué no veo otros torneos?',
  youCan:'Podés jugar en', moreInfo:'Más información →', example:'Ejemplo', live:'En curso', closed:'Inscripción cerrada', deadline:'Inscripción hasta',
  semAll:'Abiertos a todos, también fuera de América.',
  back:'← Volver', dates:'Fechas', city:'Ciudad', venue:'Sede', cats:'Categorías', rhythm:'Ritmo', format:'Formato', region:'Región', audience:'Para',
  ratingLim:'Límite de rating', none:'Sin límite', docs:'Página oficial y bases',
  regNoteT:'¿Cómo me inscribo?', regNote:'La inscripción se hace a través de tu federación nacional ({fed}). Consultá con ella plazos, cupos y costos. Esta app no toma inscripciones ni pagos.',
  regNoteS:'Seguí las indicaciones de la convocatoria oficial o consultá con tu federación nacional. Esta app no toma inscripciones ni pagos.',
  dataNote:'Nota de datos', eligYes:'Según tus datos FIDE, podés participar en:', eligNo:'Según tus datos FIDE, no cumplís las condiciones:',
  rNotAm:'tu federación no es una de las 42 de FIDE América', rRegion:'es solo para {r}', rAge:'no hay categoría para tu año de nacimiento', rSex:'solo categorías femeninas para tu edad',
  rRating:'tu rating no está dentro del límite', rNoBirth:'la lista FIDE no tiene tu año de nacimiento',
  histT:'Mi participación en eventos de FIDE América', histP:'Muy pronto vas a ver acá tu historial: eventos jugados, puntos, puestos y medallas. Estos son datos de ejemplo.',
  hEv:'Evento', hCat:'Categoría', hPts:'Puntos', hPos:'Puesto', hPlayed:'Eventos', hMed:'Medallas', hBest:'Mejor puesto',
  footer:'Mi FIDE América · versión beta para mostrar la idea', footer2:'Datos de jugadores: lista oficial de FIDE ({rl}). Eventos: calendario de fideamerica.net.',
  regsT:'Registros guardados en este navegador', regsNone:'Todavía no hay registros en este navegador.', csv:'Descargar CSV', sent:'Enviado a la planilla', local:'Solo local'
 },
 en:{
  heroT:'Your chess in the <span>Americas</span>, in one place',
  heroP:'Enter your FIDE ID and see the FIDE América tournaments, seminars and courses that fit you.',
  idPh:'Your FIDE ID (e.g. 20000197)', search:'Search', searching:'Searching…',
  tryWith:'Try:', notFound:'We could not find that FIDE ID in the FIDE list. Please check the number.',
  badId:'Enter a valid FIDE ID (numbers only).', netErr:'Could not reach the player database. Please try again.',
  f1t:'For players, arbiters, trainers and organizers', f1p:'It works with the FIDE ID you already have. We show your ratings and titles.',
  f2t:'Only what fits you', f2p:'We filter by age, sex, rating and region: South America, Central America & Caribbean, North America or the whole continent.',
  f3t:'Entry through your federation', f3p:'Entries to FIDE América events are always made through the national federation.',
  isThisYou:'Is this you?', fed:'Federation', born:'Born', sex:'Sex', M:'Male', F:'Female',
  std:'Standard', rpd:'Rapid', blz:'Blitz', unrated:'unr.', inactive:'Inactive', otherTit:'Arbiter / trainer / organizer titles', arena:'Arena',
  notMe:'Not me', regT:'Sign up to continue', regP:'We will let you know about new tournaments, seminars and courses for your profile.',
  name:'Full name', email:'Email', country:'Country of residence', wa:'WhatsApp (optional)', waPh:'+1 …',
  consent:'I agree to receive FIDE América news and promotions by email and WhatsApp. I can unsubscribe at any time.',
  consentReq:'You need to accept receiving news to sign up.', regBtn:'Sign up and see my events',
  badEmail:'Please check the email.', badName:'Please enter your name.', badCountry:'Choose your country.',
  welcome:'Hi', registered:'Registered', continueBtn:'See my events', logout:'Log out',
  tabT:'Tournaments', tabS:'Seminars & courses', tabH:'My history',
  noAmT:'FIDE América tournaments are for players from the 42 federations of the continent. You can still join seminars and courses.',
  noT:'There are no calendar tournaments for your profile right now.', whyNot:'Why don’t I see other tournaments?',
  youCan:'You can play in', moreInfo:'More information →', example:'Example', live:'Under way', closed:'Entries closed', deadline:'Entries until',
  semAll:'Open to everyone, also outside the Americas.',
  back:'← Back', dates:'Dates', city:'City', venue:'Venue', cats:'Categories', rhythm:'Time control', format:'Format', region:'Region', audience:'For',
  ratingLim:'Rating limit', none:'No limit', docs:'Official page and regulations',
  regNoteT:'How do I enter?', regNote:'Entries are made through your national federation ({fed}). Ask them about deadlines, places and fees. This app does not take entries or payments.',
  regNoteS:'Follow the official announcement or ask your national federation. This app does not take entries or payments.',
  dataNote:'Data note', eligYes:'Based on your FIDE data, you can play in:', eligNo:'Based on your FIDE data, you do not meet the conditions:',
  rNotAm:'your federation is not one of the 42 FIDE América federations', rRegion:'it is only for {r}', rAge:'no category for your birth year', rSex:'only girls’ categories for your age',
  rRating:'your rating is outside the limit', rNoBirth:'the FIDE list has no birth year for you',
  histT:'My participation in FIDE América events', histP:'Soon you will see your history here: events played, points, places and medals. This is sample data.',
  hEv:'Event', hCat:'Category', hPts:'Points', hPos:'Place', hPlayed:'Events', hMed:'Medals', hBest:'Best place',
  footer:'Mi FIDE América · beta version to show the idea', footer2:'Player data: official FIDE list ({rl}). Events: fideamerica.net calendar.',
  regsT:'Sign-ups saved in this browser', regsNone:'No sign-ups in this browser yet.', csv:'Download CSV', sent:'Sent to sheet', local:'Local only'
 }
};
let lang = localStorage.getItem(LS_LANG) || "es";
const t = (k, v) => { let s = (T[lang][k] ?? T.es[k] ?? k); if (v) for (const x in v) s = s.replace("{"+x+"}", v[x]); return s; };
const L = o => o == null ? "" : (typeof o === "string" ? o : (o[lang] ?? o.es ?? ""));
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ---------- datos ---------- */
const shardCache = {};
async function lookup(id){
  const k = String(Number(id) % C.PLAYERS_SHARDS).padStart(3,"0");
  if (!shardCache[k]) {
    const r = await fetch(C.PLAYERS_PATH + k + ".json");
    if (!r.ok) throw new Error("net");
    shardCache[k] = await r.json();
  }
  const a = shardCache[k][String(Number(id))];
  if (!a) return null;
  const [name, fed, sex, tit, wtit, otit, foa, std, rpd, blz, byear, flag] = a;
  return { id: String(Number(id)), name: name||"", fed: fed||"", sex: sex||"", tit: tit||"", wtit: wtit||"", otit: otit||"", foa: foa||"",
           std: std||0, rpd: rpd||0, blz: blz||0, byear: byear||0, flag: flag||"" };
}
let EVENTS = [];
async function loadEvents(){
  if (C.EVENTS_CSV_URL) {
    try { const r = await fetch(C.EVENTS_CSV_URL); if (r.ok) { EVENTS = csvToEvents(await r.text()); return; } } catch(e) { console.warn("CSV", e); }
  }
  const r = await fetch(C.EVENTS_JSON_URL); EVENTS = (await r.json()).events;
}
function parseCSV(txt){
  const rows = []; let row = [], f = "", q = false;
  for (let i = 0; i < txt.length; i++) {
    const c = txt[i];
    if (q) { if (c === '"') { if (txt[i+1] === '"') { f += '"'; i++; } else q = false; } else f += c; }
    else if (c === '"') q = true; else if (c === ",") { row.push(f); f = ""; }
    else if (c === "\n" || c === "\r") { if (c === "\r" && txt[i+1] === "\n") i++; row.push(f); rows.push(row); row = []; f = ""; }
    else f += c;
  }
  if (f !== "" || row.length) { row.push(f); rows.push(row); }
  return rows.filter(r => r.some(x => x.trim() !== ""));
}
function csvToEvents(txt){
  const [h, ...rows] = parseCSV(txt);
  return rows.map(r => { const o = {}; h.forEach((k, i) => o[k.trim()] = (r[i] ?? "").trim());
    const bi = p => ({ es: o[p+"_es"], en: o[p+"_en"] || o[p+"_es"] });
    const links = [];
    for (let i = 1; i <= 4; i++) if (o["link"+i+"_url"]) links.push({ label: { es: o["link"+i+"_label"] || "Enlace", en: o["link"+i+"_label"] || "Link" }, url: o["link"+i+"_url"] });
    return { id: o.id, type: o.type || "tournament", example: /^(1|si|sí|true|yes)$/i.test(o.example||""),
      title: bi("title"), start: o.start, end: o.end || o.start, city: bi("city"), venue: o.venue, region: o.region || "AME",
      categories: (o.categories||"").split(";").map(s => s.trim()).filter(Boolean).map(s => { const [name, born, sex, bornMax] = s.split("|").map(x => x.trim());
        return { name, born: born ? Number(born) : null, sex: sex || "open", bornMax: bornMax ? Number(bornMax) : null }; }),
      ratingMin: o.ratingMin ? Number(o.ratingMin) : null, ratingMax: o.ratingMax ? Number(o.ratingMax) : null,
      rhythm: bi("rhythm"), format: bi("format"), audience: o.audience_es ? bi("audience") : null, deadline: o.deadline || null, notes: bi("notes"), links };
  }).filter(e => e.id && e.start);
}

/* ---------- reglas ---------- */
const today = () => { const d = new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); };
const isAm = p => !!FEDS[p.fed];
function eligibility(ev, p){
  if (ev.type !== "tournament") return { ok: true, cats: [] };
  if (!isAm(p)) return { ok: false, reason: t("rNotAm") };
  if (["SUD","CAC","NOR"].includes(ev.region) && FEDS[p.fed][2] !== ev.region) return { ok: false, reason: t("rRegion", { r: L(REGIONS[ev.region]) }) };
  if (ev.ratingMin && p.std < ev.ratingMin) return { ok: false, reason: t("rRating") };
  if (ev.ratingMax && p.std > ev.ratingMax) return { ok: false, reason: t("rRating") };
  const cats = ev.categories || [];
  if (!cats.length) return { ok: true, cats: [] };
  const needsBirth = cats.some(c => c.born || c.bornMax);
  if (needsBirth && !p.byear) return { ok: false, reason: t("rNoBirth") };
  const byAge = cats.filter(c => (!c.born || p.byear >= c.born) && (!c.bornMax || p.byear <= c.bornMax));
  if (!byAge.length) return { ok: false, reason: t("rAge") };
  const fit = byAge.filter(c => c.sex !== "F" || p.sex === "F");
  if (!fit.length) return { ok: false, reason: t("rSex") };
  return { ok: true, cats: fit };
}
const upcoming = () => EVENTS.filter(e => (e.end || e.start) >= today()).sort((a,b) => a.start.localeCompare(b.start));

/* ---------- formato ---------- */
function fmtRange(s, e){
  const loc = lang === "es" ? "es-AR" : "en-US";
  const ds = new Date(s+"T12:00:00"), de = new Date((e||s)+"T12:00:00");
  const m = d => d.toLocaleDateString(loc, { month: "short" }).replace(".","");
  if (s === e || !e) return ds.toLocaleDateString(loc, { day: "numeric", month: "short", year: "numeric" });
  if (lang === "es") return ds.getMonth() === de.getMonth() ? `${ds.getDate()}–${de.getDate()} ${m(de)} ${de.getFullYear()}` : `${ds.getDate()} ${m(ds)} – ${de.getDate()} ${m(de)} ${de.getFullYear()}`;
  return ds.getMonth() === de.getMonth() ? `${m(ds)} ${ds.getDate()}–${de.getDate()}, ${de.getFullYear()}` : `${m(ds)} ${ds.getDate()} – ${m(de)} ${de.getDate()}, ${de.getFullYear()}`;
}
const fmtDay = d => new Date(d+"T12:00:00").toLocaleDateString(lang === "es" ? "es-AR" : "en-US", { day: "numeric", month: "short" }).replace(".","");
const niceName = n => { const i = n.indexOf(","); return i > 0 ? (n.slice(i+1).trim() + " " + n.slice(0,i).trim()) : n; };
const fedName = c => FEDS[c] ? FEDS[c][lang === "es" ? 0 : 1] : c;
const initials = n => niceName(n).split(/\s+/).filter(Boolean).slice(0,2).map(w => w[0]).join("").toUpperCase();

/* ---------- registros ---------- */
const getRegs = () => { try { return JSON.parse(localStorage.getItem(LS_REG)) || {}; } catch(e) { return {}; } };
const getReg = id => getRegs()[id];
async function saveReg(reg){
  const all = getRegs(); all[reg.fideId] = reg; localStorage.setItem(LS_REG, JSON.stringify(all)); localStorage.setItem(LS_LAST, reg.fideId);
  if (C.REGISTRATION_ENDPOINT) {
    try { await fetch(C.REGISTRATION_ENDPOINT, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify(reg) });
      reg.sent = true; all[reg.fideId] = reg; localStorage.setItem(LS_REG, JSON.stringify(all)); } catch(e) { console.warn("POST", e); }
  }
}

/* ---------- vistas ---------- */
let P = null; // jugador actual
let tab = "t";
const go = h => { if (location.hash !== h) location.hash = h; else route(); };

function playerCard(p, compact){
  const titles = [p.tit, p.wtit].filter(Boolean).filter((x,i,a) => a.indexOf(x) === i);
  const ot = p.otit ? p.otit.split(",").map(x => x.trim()).filter(Boolean) : [];
  return `<div class="card">
   <div class="profile"><div class="avatar">${esc(initials(p.name))}</div>
    <div><p class="pname">${esc(niceName(p.name))}</p>
    <p class="pmeta">FIDE ID ${esc(p.id)} · ${FEDS[p.fed] ? esc(fedName(p.fed)) + " (" + esc(p.fed) + ")" : esc(p.fed)}${p.byear ? " · " + t("born") + " " + p.byear : ""} · ${p.sex === "F" ? t("F") : t("M")}</p></div></div>
   <div class="chips">${titles.map(x => `<span class="chip">${esc(x)}</span>`).join("")}
    ${ot.map(x => `<span class="chip b" title="${esc(L(OT[x]) || x)}">${esc(L(OT[x]) || x)}</span>`).join("")}
    ${p.foa ? `<span class="chip b">${t("arena")} ${esc(p.foa)}</span>` : ""}
    ${/i/.test(p.flag) ? `<span class="chip ex">${t("inactive")}</span>` : ""}
    ${!isAm(p) ? `<span class="chip ex">${lang === "es" ? "Fuera de FIDE América" : "Outside FIDE América"}</span>` : `<span class="chip ok">${esc(L(REGIONS[FEDS[p.fed][2]]))}</span>`}</div>
   ${compact ? "" : `<div class="ratings">
     <div class="rt"><b>${p.std || t("unrated")}</b><span>${t("std")}</span></div>
     <div class="rt"><b>${p.rpd || t("unrated")}</b><span>${t("rpd")}</span></div>
     <div class="rt"><b>${p.blz || t("unrated")}</b><span>${t("blz")}</span></div></div>`}
  </div>`;
}

function viewHome(msg){
  const last = localStorage.getItem(LS_LAST);
  $app.innerHTML = `<section class="hero"><hr class="rule"><h1>${t("heroT")}</h1><p>${t("heroP")}</p>
   <form id="f" class="search" autocomplete="off"><input id="fid" inputmode="numeric" pattern="[0-9]*" placeholder="${t("idPh")}" value="${esc(last||"")}" aria-label="FIDE ID">
   <button class="btn btn-g" id="sb">${t("search")}</button></form>
   <div id="msg" class="err">${msg ? esc(msg) : ""}</div>
   <div class="hint">${t("tryWith")} <a data-id="20000197">20000197</a> · <a data-id="3400182">3400182</a> · <a data-id="1503014">1503014</a></div></section>
   <div class="feats"><div class="feat"><b>${t("f1t")}</b><p>${t("f1p")}</p></div><div class="feat"><b>${t("f2t")}</b><p>${t("f2p")}</p></div><div class="feat"><b>${t("f3t")}</b><p>${t("f3p")}</p></div></div>`;
  const f = document.getElementById("f"), inp = document.getElementById("fid");
  f.onsubmit = e => { e.preventDefault(); search(inp.value); };
  $app.querySelectorAll("[data-id]").forEach(a => a.onclick = () => { inp.value = a.dataset.id; search(a.dataset.id); });
}
async function search(v){
  v = String(v).trim();
  const m = document.getElementById("msg"), b = document.getElementById("sb");
  if (!/^\d{3,10}$/.test(v)) { m.textContent = t("badId"); return; }
  b.disabled = true; b.innerHTML = `<span class="spinner"></span> ${t("searching")}`; m.textContent = "";
  try { const p = await lookup(v); if (!p) { m.textContent = t("notFound"); return; } P = p; go("#/p/" + p.id); }
  catch(e) { m.textContent = t("netErr"); }
  finally { b.disabled = false; b.textContent = t("search"); }
}

function viewProfile(p){
  const reg = getReg(p.id);
  if (reg) { $app.innerHTML = `<button class="btn btn-l" data-back>${t("back")}</button>${playerCard(p)}
    <div class="card"><h2>${t("welcome")}, ${esc(reg.name.split(" ")[0])}</h2><p class="small">${t("registered")}: ${esc(reg.email)}</p>
    <button class="btn btn-p" id="cont" style="width:100%;margin-top:8px">${t("continueBtn")}</button></div>`;
    document.getElementById("cont").onclick = () => go("#/d/" + p.id); bindBack(); return; }
  const countries = Object.keys(FEDS).map(k => [k, fedName(k)]).sort((a,b) => a[1].localeCompare(b[1], lang));
  const def = FEDS[p.fed] ? p.fed : "OTRO";
  $app.innerHTML = `<button class="btn btn-l" data-back>${t("back")}</button>
   <p class="small" style="margin:6px 0 0;font-weight:700;color:var(--azul)">${t("isThisYou")}</p>${playerCard(p)}
   <form class="card" id="rf" novalidate><h2>${t("regT")}</h2><p class="small">${t("regP")}</p>
    <label for="rn">${t("name")}</label><input id="rn" autocomplete="name" value="${esc(niceName(p.name))}">
    <label for="re">${t("email")}</label><input id="re" type="email" autocomplete="email" inputmode="email" placeholder="nombre@ejemplo.com">
    <div class="row"><div><label for="rc">${t("country")}</label><select id="rc">${countries.map(([k,n]) => `<option value="${k}" ${k===def?"selected":""}>${esc(n)}</option>`).join("")}
      <option value="OTRO" ${def==="OTRO"?"selected":""}>${lang==="es"?"Otro país":"Other country"}</option></select></div>
     <div><label for="rw">${t("wa")}</label><input id="rw" type="tel" autocomplete="tel" inputmode="tel" placeholder="${t("waPh")}"></div></div>
    <label class="check"><input type="checkbox" id="rk"> <span>${t("consent")}</span></label>
    <div id="rerr" class="err"></div>
    <button class="btn btn-p" style="width:100%;margin-top:14px">${t("regBtn")}</button>
    <button type="button" class="btn btn-l" data-back style="width:100%">${t("notMe")}</button></form>`;
  bindBack();
  document.getElementById("rf").onsubmit = async e => {
    e.preventDefault();
    const v = id => document.getElementById(id).value.trim(), er = document.getElementById("rerr");
    if (v("rn").length < 3) return er.textContent = t("badName");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v("re"))) return er.textContent = t("badEmail");
    if (!document.getElementById("rk").checked) return er.textContent = t("consentReq");
    const reg = { fideId: p.id, name: v("rn"), email: v("re"), country: v("rc"), whatsapp: v("rw"), consent: true, lang,
      fideName: p.name, fed: p.fed, sex: p.sex, birthYear: p.byear, std: p.std, rapid: p.rpd, blitz: p.blz,
      titles: [p.tit, p.wtit, p.otit].filter(Boolean).join(","), createdAt: new Date().toISOString(), source: "beta" };
    await saveReg(reg); go("#/d/" + p.id);
  };
}

function evCard(ev, p){
  const el = eligibility(ev, p), sem = ev.type !== "tournament", now = today();
  const live = ev.start <= now && (ev.end||ev.start) >= now, closed = ev.deadline && ev.deadline < now;
  const mine = el.cats && el.cats.length ? el.cats.map(c => c.name) : [];
  return `<button class="ev ${sem ? "sem" : ""}" data-ev="${esc(ev.id)}">
   <div class="ev-date">${fmtRange(ev.start, ev.end)}</div><h4>${esc(L(ev.title))}</h4>
   <div class="city">📍 ${esc(L(ev.city))}${sem && ev.audience ? " · " + esc(L(ev.audience)) : ""}</div>
   <div class="chips">${ev.example ? `<span class="chip ex">${t("example")}</span>` : ""}${live ? `<span class="chip live">${t("live")}</span>` : ""}
    ${!sem ? `<span class="chip b">${esc(L(REGIONS[ev.region]))}</span>` : ""}
    ${closed ? `<span class="chip ex">${t("closed")} ${fmtDay(ev.deadline)}</span>` : (ev.deadline && !live ? `<span class="chip ok">${t("deadline")} ${fmtDay(ev.deadline)}</span>` : "")}</div>
   ${mine.length ? `<div class="why">✓ ${t("youCan")}: ${esc(mine.join(", "))}</div>` : ""}
   <div class="more">${t("moreInfo")}</div></button>`;
}

function viewDash(p){
  const reg = getReg(p.id);
  if (!reg) return go("#/p/" + p.id);
  const ups = upcoming();
  const T_ = ups.filter(e => e.type === "tournament"), S_ = ups.filter(e => e.type !== "tournament");
  const ok = T_.filter(e => eligibility(e, p).ok), no = T_.filter(e => !eligibility(e, p).ok);
  const tabs = `<nav class="tabs" role="tablist">
   <button class="tab ${tab==="t"?"on":""}" data-tab="t">${t("tabT")}<span class="n">${ok.length}</span></button>
   <button class="tab ${tab==="s"?"on":""}" data-tab="s">${t("tabS")}<span class="n">${S_.length}</span></button>
   <button class="tab ${tab==="h"?"on":""}" data-tab="h">${t("tabH")}</button></nav>`;
  let body = "";
  if (tab === "t") {
    body = !isAm(p) ? `<div class="empty">${t("noAmT")}</div>` : (ok.length ? ok.map(e => evCard(e, p)).join("") : `<div class="empty">${t("noT")}</div>`);
    if (no.length && isAm(p)) body += `<details class="card"><summary style="font-weight:700;color:var(--azul);cursor:pointer">${t("whyNot")}</summary>
      ${no.map(e => `<p class="small" style="margin:10px 0 0"><b style="color:var(--oscuro)">${esc(L(e.title))}</b><br>${esc(eligibility(e, p).reason)}</p>`).join("")}</details>`;
  } else if (tab === "s") {
    body = `<p class="small" style="margin:12px 2px 0">${t("semAll")}</p>` + S_.map(e => evCard(e, p)).join("");
  } else body = viewHist(p);
  $app.innerHTML = `<div class="topbar"><p class="small" style="margin:0">${t("welcome")}, <b>${esc(reg.name.split(" ")[0])}</b></p><button class="btn btn-l" id="out">${t("logout")}</button></div>
    ${playerCard(p, true)}${tabs}<section>${body}</section>`;
  $app.querySelectorAll("[data-tab]").forEach(b => b.onclick = () => { tab = b.dataset.tab; viewDash(p); });
  $app.querySelectorAll("[data-ev]").forEach(b => b.onclick = () => go("#/e/" + p.id + "/" + b.dataset.ev));
  document.getElementById("out").onclick = () => { P = null; localStorage.removeItem(LS_LAST); go("#/"); };
}

function viewHist(p){
  const z = FEDS[p.fed] ? FEDS[p.fed][2] : null;
  const names = { SUD: ["Festival Sudamericano de la Juventud 2025", "Campeonato Sudamericano Absoluto 2025", "Panamericano Rápido 2024"],
    CAC: ["Festival Centroamericano y del Caribe de la Juventud 2025", "Campeonato Centroamericano y del Caribe 2025", "Panamericano Rápido 2024"],
    NOR: ["North American Youth Championship 2025", "North American Open 2025", "Panamericano Rápido 2024"] }[z] ||
    ["Seminario de Árbitros FIDE en línea (CCA) 2025", "Curso de Instructor Escolar FIDE 2025", "Webinar de Organizador Internacional 2024"];
  const rows = z ? [[names[0], "Sub-18", "6/9", "3º 🥉"], [names[1], "Absoluto", "5.5/9", "8º"], [names[2], "Open", "7/11", "12º"]]
                 : [[names[0], "—", "—", lang==="es"?"Aprobado":"Passed"], [names[1], "—", "—", lang==="es"?"Aprobado":"Passed"], [names[2], "—", "—", lang==="es"?"Asistió":"Attended"]];
  return `<div class="card"><h2>${t("histT")} <span class="chip ex" style="vertical-align:middle">${t("example")}</span></h2><p class="small">${t("histP")}</p>
   <div class="stat3"><div class="rt"><b>3</b><span>${t("hPlayed")}</span></div><div class="rt"><b>${z?1:0}</b><span>${t("hMed")}</span></div><div class="rt"><b>${z?"3º":"—"}</b><span>${t("hBest")}</span></div></div>
   <table class="hist"><thead><tr><th>${t("hEv")}</th><th class="hide-m">${t("hCat")}</th><th>${t("hPts")}</th><th>${t("hPos")}</th></tr></thead>
   <tbody>${rows.map(r => `<tr><td>${esc(r[0])}</td><td class="hide-m">${esc(r[1])}</td><td>${esc(r[2])}</td><td><b>${esc(r[3])}</b></td></tr>`).join("")}</tbody></table></div>`;
}

function viewDetail(p, ev){
  const el = eligibility(ev, p), sem = ev.type !== "tournament", now = today();
  const live = ev.start <= now && (ev.end||ev.start) >= now, closed = ev.deadline && ev.deadline < now;
  const mineNames = new Set((el.cats||[]).map(c => c.name));
  const rl = (ev.ratingMin || ev.ratingMax) ? [ev.ratingMin ? "≥ " + ev.ratingMin : "", ev.ratingMax ? "≤ " + ev.ratingMax : ""].filter(Boolean).join(" · ") : t("none");
  $app.innerHTML = `<button class="btn btn-l" data-back>${t("back")}</button>
  <section class="det-h"><div class="ev-date">${fmtRange(ev.start, ev.end)}</div><h1>${esc(L(ev.title))}</h1><div>📍 ${esc(L(ev.city))}</div>
   <div class="chips">${ev.example ? `<span class="chip ex">${t("example")}</span>` : ""}${live ? `<span class="chip live">${t("live")}</span>` : ""}
   <span class="chip">${esc(L(REGIONS[ev.region]))}</span>${closed ? `<span class="chip ex">${t("closed")} ${fmtDay(ev.deadline)}</span>` : (ev.deadline ? `<span class="chip ok">${t("deadline")} ${fmtDay(ev.deadline)}</span>` : "")}</div></section>
  ${!sem ? `<div class="card" style="border-left:4px solid ${el.ok ? "var(--ok)" : "#b3261e"}"><b>${el.ok ? t("eligYes") : t("eligNo")}</b>
     <p style="margin:6px 0 0">${el.ok ? esc((el.cats||[]).map(c => c.name).join(", ")) : esc(el.reason)}</p></div>` : ""}
  <div class="card"><dl class="kv">
   <dt>${t("dates")}</dt><dd>${fmtRange(ev.start, ev.end)}</dd>
   <dt>${t("city")}</dt><dd>${esc(L(ev.city))}</dd>
   <dt>${t("venue")}</dt><dd>${esc(L(ev.venue))}</dd>
   ${sem && ev.audience ? `<dt>${t("audience")}</dt><dd>${esc(L(ev.audience))}</dd>` : ""}
   <dt>${t("region")}</dt><dd>${esc(L(REGIONS[ev.region]))}</dd>
   ${!sem ? `<dt>${t("cats")}</dt><dd><div class="cats">${(ev.categories||[]).map(c => `<span class="cat ${mineNames.has(c.name) ? "mine" : ""}">${esc(c.name)}${c.born ? ` · ${c.born}+` : ""}</span>`).join("")}</div></dd>
   <dt>${t("ratingLim")}</dt><dd>${rl}</dd>` : ""}
   <dt>${t("rhythm")}</dt><dd>${esc(L(ev.rhythm))}</dd>
   <dt>${t("format")}</dt><dd>${esc(L(ev.format))}</dd></dl>
   <h3>${t("docs")}</h3><div class="links">${(ev.links||[]).map(l => `<a class="btn btn-o" href="${esc(l.url)}" target="_blank" rel="noopener">🔗 ${esc(L(l.label))}</a>`).join("")}</div></div>
  <div class="note"><b>${t("regNoteT")}</b><br>${sem ? t("regNoteS") : t("regNote", { fed: esc(fedName(p.fed)) })}</div>
  ${ev.notes ? `<div class="note" style="background:#fff;border-color:var(--line)"><b>${t("dataNote")}:</b> ${esc(L(ev.notes))}</div>` : ""}`;
  bindBack();
}

function viewRegs(){
  const all = Object.values(getRegs());
  const cols = ["fideId","name","email","country","whatsapp","consent","fideName","fed","sex","birthYear","std","rapid","blitz","titles","lang","createdAt","sent"];
  $app.innerHTML = `<button class="btn btn-l" data-back>${t("back")}</button><div class="card"><h2>${t("regsT")}</h2>
   ${all.length ? `<table class="hist"><thead><tr><th>FIDE ID</th><th>${t("name")}</th><th class="hide-m">${t("email")}</th><th></th></tr></thead><tbody>
   ${all.map(r => `<tr><td>${esc(r.fideId)}</td><td>${esc(r.name)}</td><td class="hide-m">${esc(r.email)}</td><td class="small">${r.sent ? t("sent") : t("local")}</td></tr>`).join("")}</tbody></table>
   <button class="btn btn-p" id="csv" style="margin-top:12px">${t("csv")}</button>` : `<p>${t("regsNone")}</p>`}</div>`;
  bindBack();
  const b = document.getElementById("csv");
  if (b) b.onclick = () => { const q = v => `"${String(v ?? "").replace(/"/g,'""')}"`;
    const csv = [cols.join(",")].concat(all.map(r => cols.map(c => q(r[c])).join(","))).join("\n");
    const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob(["\ufeff"+csv], { type: "text/csv" })); a.download = "registros_fideamerica.csv"; a.click(); };
}

function bindBack(){ $app.querySelectorAll("[data-back]").forEach(b => b.onclick = () => history.length > 1 ? history.back() : go("#/")); }

async function route(){
  const parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  window.scrollTo(0, 0);
  try {
    if (parts[0] === "registros") return viewRegs();
    if (["p","d","e"].includes(parts[0]) && parts[1]) {
      if (!P || P.id !== parts[1]) P = await lookup(parts[1]);
      if (!P) return viewHome(t("notFound"));
      if (parts[0] === "p") return viewProfile(P);
      if (parts[0] === "d") return viewDash(P);
      const ev = EVENTS.find(e => e.id === parts[2]);
      if (!getReg(P.id)) return go("#/p/" + P.id);
      return ev ? viewDetail(P, ev) : go("#/d/" + P.id);
    }
    viewHome();
  } catch(e) { console.error(e); viewHome(t("netErr")); }
}

function applyStatic(){
  document.documentElement.lang = lang;
  document.getElementById("langBtn").textContent = lang === "es" ? "EN" : "ES";
  document.querySelectorAll("[data-i18n]").forEach(el => el.textContent = t(el.dataset.i18n, { rl: C.RATING_LIST }));
}
document.getElementById("langBtn").onclick = () => { lang = lang === "es" ? "en" : "es"; localStorage.setItem(LS_LANG, lang); applyStatic(); route(); };
document.querySelector("[data-go=home]").onclick = e => { e.preventDefault(); go("#/"); };
window.addEventListener("hashchange", route);
applyStatic();
loadEvents().then(route).catch(e => { console.error(e); $app.innerHTML = `<div class="empty">Error cargando eventos.</div>`; });
})();
