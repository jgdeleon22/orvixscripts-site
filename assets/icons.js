// Pulse's own detailed app icons (original artwork, 60x60 tiles).
// Markup is static (no player data). {u} becomes a unique id per copy so gradients
// keep working even when another copy is hidden.

let n = 0;
const T = (bg, body) => `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><defs>${bg}</defs>${body}</svg>`;
const lin = (id, a, b, x2 = 0, y2 = 1) => `<linearGradient id="${id}{u}" x1="0" y1="0" x2="${x2}" y2="${y2}"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>`;
const rad = (id, a, b) => `<radialGradient id="${id}{u}" cx=".35" cy=".3" r=".8"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></radialGradient>`;
const tile = (g) => `<rect width="60" height="60" fill="url(#${g}{u})"/>`;
const shade = `<filter id="sh{u}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="1.6" stdDeviation="1.4" flood-color="#000" flood-opacity=".35"/></filter>`;

const ART = {
    phone: T(lin('bg', '#6fe08a', '#18a34a') + lin('h', '#ffffff', '#dfe9e2') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><path fill="url(#h{u})" d="M21.3 15.5c1.1-.9 2.7-.7 3.5.4l3.4 4.6c.7 1 .6 2.4-.3 3.2l-2.2 2c1.6 3.6 4.4 6.5 8 8.2l2-2.2c.8-.9 2.2-1 3.2-.3l4.6 3.4c1.1.8 1.3 2.4.4 3.5l-2 2.5c-1.4 1.7-3.8 2.3-5.9 1.4C27.5 39.8 20.2 32.5 17.7 23.9c-.7-2.2-.1-4.5 1.6-6z"/></g>` +
        `<path d="M36 15.5a10 10 0 0 1 8.5 8.5" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".9"/><path d="M35.5 21a5 5 0 0 1 3.6 3.6" stroke="#fff" stroke-width="2.4" fill="none" stroke-linecap="round" opacity=".9"/>`),

    messages: T(lin('bg', '#5ee6b0', '#0f9f6e') + lin('b1', '#ffffff', '#e4f1ea') + lin('b2', '#c9f7df', '#8fe3bb') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><path fill="url(#b2{u})" d="M27 22h17a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6h-1v5l-6-5H27a6 6 0 0 1-6-6v-8a6 6 0 0 1 6-6z"/>` +
        `<path fill="url(#b1{u})" d="M15 12h18a6 6 0 0 1 6 6v9a6 6 0 0 1-6 6H22l-7 6v-6a6 6 0 0 1-6-6v-9a6 6 0 0 1 6-6z"/></g>` +
        `<circle cx="17.5" cy="22.5" r="2" fill="#16a36d"/><circle cx="24" cy="22.5" r="2" fill="#16a36d"/><circle cx="30.5" cy="22.5" r="2" fill="#16a36d"/>`),

    contacts: T(lin('bg', '#8b95a7', '#3f4756') + lin('c', '#ffffff', '#e6e9ef') + lin('p', '#7aa2ff', '#3b66e0') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><rect x="14" y="11" width="32" height="38" rx="5" fill="url(#c{u})"/></g>` +
        `<rect x="44" y="16" width="4" height="7" rx="1.5" fill="#f59e0b"/><rect x="44" y="25" width="4" height="7" rx="1.5" fill="#22c55e"/><rect x="44" y="34" width="4" height="7" rx="1.5" fill="#ef4444"/>` +
        `<circle cx="30" cy="25" r="6.5" fill="url(#p{u})"/><path d="M19.5 41c1.5-5.5 5.6-8 10.5-8s9 2.5 10.5 8z" fill="url(#p{u})"/>`),

    camera: T(lin('bg', '#4b4f58', '#15171b') + rad('l', '#4b6cff', '#060a1a') + lin('ring', '#c9ccd3', '#5d616b') + shade,
        tile('bg') +
        `<rect x="9" y="17" width="42" height="28" rx="7" fill="#2a2d33" stroke="#555a63" stroke-width="1"/><rect x="15" y="13" width="10" height="5" rx="2" fill="#3a3e46"/>` +
        `<g filter="url(#sh{u})"><circle cx="30" cy="31" r="11.5" fill="url(#ring{u})"/></g><circle cx="30" cy="31" r="8.6" fill="#0b0d12"/><circle cx="30" cy="31" r="6.6" fill="url(#l{u})"/>` +
        `<circle cx="30" cy="31" r="2.6" fill="#030510"/><ellipse cx="27.3" cy="28.2" rx="2.4" ry="1.5" fill="#fff" opacity=".7" transform="rotate(-30 27.3 28.2)"/><circle cx="45" cy="22" r="1.8" fill="#fbbf24"/>`),

    photos: T(lin('bg', '#ffffff', '#eef0f5') + lin('sky', '#ffb36b', '#ff5e8a') + lin('sky2', '#7dd3fc', '#4f7cff') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})" transform="rotate(-10 30 30)"><rect x="13" y="14" width="28" height="31" rx="2.5" fill="#fff"/><rect x="15.5" y="16.5" width="23" height="21" rx="1" fill="url(#sky2{u})"/>` +
        `<path d="M15.5 37.5l7-8 4 4 5-6 7 10z" fill="#1e3a8a" opacity=".8"/></g>` +
        `<g filter="url(#sh{u})" transform="rotate(8 32 32)"><rect x="20" y="16" width="28" height="31" rx="2.5" fill="#fff"/><rect x="22.5" y="18.5" width="23" height="21" rx="1" fill="url(#sky{u})"/>` +
        `<circle cx="39" cy="25" r="3.2" fill="#fff4c2"/><path d="M22.5 39.5l7.5-9 4.5 5 4.5-5.5 6.5 9.5z" fill="#5b1440" opacity=".85"/></g>`),

    settings: T(lin('bg', '#5b6b8c', '#1f2a44') + lin('k', '#ffffff', '#cfd6e4') + shade,
        tile('bg') +
        `<g stroke="#9fb0d0" stroke-width="3" stroke-linecap="round" opacity=".55"><path d="M15 19h30M15 30h30M15 41h30"/></g>` +
        `<path d="M15 19h12" stroke="#60a5fa" stroke-width="3" stroke-linecap="round"/><path d="M15 30h22" stroke="#34d399" stroke-width="3" stroke-linecap="round"/><path d="M15 41h8" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>` +
        `<g filter="url(#sh{u})" fill="url(#k{u})"><circle cx="27" cy="19" r="4.6"/><circle cx="37" cy="30" r="4.6"/><circle cx="23" cy="41" r="4.6"/></g>`),

    chirp: T(lin('bg', '#5cc8ff', '#1677d8') + lin('b', '#ffffff', '#dceeff') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><path fill="url(#b{u})" d="M16 13h28a6 6 0 0 1 6 6v16a6 6 0 0 1-6 6H29l-9 7v-7h-4a6 6 0 0 1-6-6V19a6 6 0 0 1 6-6z"/></g>` +
        `<path d="M34.6 31.2a6.3 6.3 0 1 1 2.1-4.7v1.6a2.3 2.3 0 0 1-4.6 0V22.8m0 3.7a2.9 2.9 0 1 1-5.8 0 2.9 2.9 0 0 1 5.8 0z" fill="none" stroke="#1677d8" stroke-width="2.4" stroke-linecap="round"/>`),

    lens: T(lin('bg', '#22d3ee', '#4338ca', 1, 1) + shade,
        tile('bg') + `<circle cx="30" cy="30" r="18" fill="#0b1030" opacity=".35"/>` +
        `<g filter="url(#sh{u})"><circle cx="30" cy="30" r="15" fill="none" stroke="#fff" stroke-width="3.2"/>` +
        `<g fill="#fff" opacity=".95"><path d="M30 18.5l5 8.5h-10z"/><path d="M40.5 25.5l-5 8.6-5-8.6z" transform="rotate(5 30 30)"/><path d="M38 39l-10 .1 5-8.7z"/><path d="M22 39l-5-8.6 10 0z"/><path d="M19.5 25l10 .1-5 8.6z"/></g></g>` +
        `<circle cx="30" cy="30" r="4" fill="#4338ca"/><circle cx="43" cy="17" r="2.2" fill="#fff"/>`),

    market: T(lin('bg', '#ffb056', '#e0561a') + lin('t', '#ffffff', '#ffe9d6') + lin('coin', '#ffe27a', '#e3a008') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><path fill="url(#t{u})" d="M14 16.5a3 3 0 0 1 3-3h13.5l15.4 15.4a3 3 0 0 1 0 4.3L35.3 43.8a3 3 0 0 1-4.3 0L14.9 27.7a3 3 0 0 1-.9-2.1z"/></g>` +
        `<circle cx="21" cy="21" r="3" fill="#e0561a"/><path d="M21 21C17 13 10 13 9 18" stroke="#7c2d12" stroke-width="1.4" fill="none"/>` +
        `<g filter="url(#sh{u})"><circle cx="42" cy="42" r="8" fill="url(#coin{u})" stroke="#b77900" stroke-width="1"/></g><path d="M42 37.5v9m2.4-6.9c-.4-1-1.3-1.5-2.4-1.5-1.4 0-2.4.8-2.4 1.8 0 2.4 4.8 1.2 4.8 3.6 0 1-1 1.8-2.4 1.8-1.1 0-2-.5-2.4-1.5" stroke="#8a5a00" stroke-width="1.4" fill="none" stroke-linecap="round"/>`),

    mail: T(lin('bg', '#60b0ff', '#1d4ed8') + lin('e', '#ffffff', '#e2ebf7') + lin('f', '#f3f7fd', '#cdd9ea') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><rect x="10" y="17" width="40" height="27" rx="4" fill="url(#e{u})"/></g>` +
        `<path d="M10.8 19.5L30 33.5l19.2-14" fill="url(#f{u})" stroke="#b9c7dc" stroke-width="1"/><path d="M11 43l14-12m24 12L35 31" stroke="#c9d5e6" stroke-width="1.2"/>` +
        `<circle cx="46" cy="18" r="5.5" fill="#ef4444" stroke="#fff" stroke-width="1.5"/>`),

    bank: T(lin('bg', '#3ee0a1', '#047857') + lin('card', '#1f2937', '#0b1220') + lin('gold', '#ffe58a', '#d79a00') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})" transform="rotate(-12 28 28)"><rect x="9" y="17" width="34" height="22" rx="3.5" fill="url(#card{u})"/><rect x="9" y="22" width="34" height="4" fill="#374151"/>` +
        `<rect x="13" y="30" width="7" height="5" rx="1" fill="url(#gold{u})"/></g>` +
        `<g filter="url(#sh{u})"><ellipse cx="42" cy="44" rx="9" ry="3.2" fill="#b77900"/><rect x="33" y="38" width="18" height="6" fill="url(#gold{u})"/><ellipse cx="42" cy="38" rx="9" ry="3.2" fill="#ffe58a"/>` +
        `<rect x="33" y="33" width="18" height="5" fill="url(#gold{u})"/><ellipse cx="42" cy="33" rx="9" ry="3.2" fill="#fff0b3"/></g>`),

    garage: T(lin('bg', '#8b8cff', '#3123ae') + lin('car', '#f4f6fb', '#c6ccdc') + shade,
        tile('bg') + `<path d="M6 46h48" stroke="#ffffff" stroke-opacity=".25" stroke-width="2"/>` +
        `<g filter="url(#sh{u})"><path fill="url(#car{u})" d="M16 30l3.5-8.5A4 4 0 0 1 23.2 19h13.6a4 4 0 0 1 3.7 2.5L44 30a4 4 0 0 1 3 3.9V41a2 2 0 0 1-2 2h-2.5v2.5a2 2 0 0 1-2 2H38a2 2 0 0 1-2-2V43H24v2.5a2 2 0 0 1-2 2h-2.5a2 2 0 0 1-2-2V43H15a2 2 0 0 1-2-2v-7.1a4 4 0 0 1 3-3.9z"/></g>` +
        `<path d="M19.6 29.5l2.6-6.4a2 2 0 0 1 1.9-1.3h11.8a2 2 0 0 1 1.9 1.3l2.6 6.4z" fill="#2b3a67"/>` +
        `<circle cx="19.5" cy="36" r="2.8" fill="#fde68a"/><circle cx="40.5" cy="36" r="2.8" fill="#fde68a"/><rect x="25" y="35" width="10" height="2.4" rx="1.2" fill="#6b7280"/>`),

    services: T(lin('bg', '#ff6b6b', '#b91c1c') + rad('glow', '#ffffff', '#ff2d2d') + lin('base', '#3f3f46', '#18181b') + shade,
        tile('bg') +
        `<circle cx="30" cy="27" r="17" fill="#fff" opacity=".15"/>` +
        `<g filter="url(#sh{u})"><path d="M19 38v-9a11 11 0 0 1 22 0v9z" fill="url(#glow{u})"/><rect x="15" y="38" width="30" height="7" rx="2" fill="url(#base{u})"/></g>` +
        `<path d="M24.5 28a5.5 5.5 0 0 1 5.5-5.5" stroke="#fff" stroke-width="2.4" stroke-linecap="round" fill="none"/>` +
        `<g stroke="#fff" stroke-width="2.6" stroke-linecap="round"><path d="M30 8.5v4M15.5 14.5l2.8 2.8M44.5 14.5l-2.8 2.8M9.5 28h3.5M47 28h3.5"/></g>`),

    weather: T(lin('bg', '#38bdf8', '#1e3a8a') + rad('sun', '#fff7b0', '#f59e0b') + lin('cl', '#ffffff', '#d4e3f5') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><circle cx="37" cy="22" r="9" fill="url(#sun{u})"/></g>` +
        `<g stroke="#fde68a" stroke-width="2.2" stroke-linecap="round" opacity=".9"><path d="M37 8.5v3M49.5 22h3M46 13l2-2M28 13l-2-2M46 31l2 2"/></g>` +
        `<g filter="url(#sh{u})"><path fill="url(#cl{u})" d="M19 44a8 8 0 0 1-.9-15.9A10 10 0 0 1 37.4 31 6.5 6.5 0 0 1 37 44z"/></g>` +
        `<g stroke="#7dd3fc" stroke-width="2.4" stroke-linecap="round"><path d="M21 48l-1.5 3.5M28 48l-1.5 3.5M35 48l-1.5 3.5"/></g>`),

    clock: T(lin('bg', '#2dd4bf', '#0f766e') + lin('w', '#ffffff', '#dfe7ea') + shade,
        tile('bg') +
        `<rect x="27" y="8.5" width="6" height="5" rx="1.5" fill="#e2e8f0"/><path d="M42 14.5l3 3" stroke="#e2e8f0" stroke-width="3" stroke-linecap="round"/>` +
        `<g filter="url(#sh{u})"><circle cx="30" cy="33" r="17" fill="url(#w{u})"/></g><circle cx="30" cy="33" r="17" fill="none" stroke="#0f766e" stroke-width="1.2" opacity=".3"/>` +
        `<path d="M30 33V21.5A11.5 11.5 0 0 1 40.4 28z" fill="#2dd4bf" opacity=".45"/>` +
        `<path d="M30 33l7-6" stroke="#0f172a" stroke-width="2.4" stroke-linecap="round"/><path d="M30 33V21" stroke="#ef4444" stroke-width="1.6" stroke-linecap="round"/><circle cx="30" cy="33" r="2.2" fill="#0f172a"/>`),

    notes: T(lin('bg', '#fbbf24', '#b45309') + lin('p', '#fffdf5', '#f1e8cf') + lin('pen', '#60a5fa', '#1d4ed8') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><rect x="14" y="12" width="28" height="37" rx="3" fill="url(#p{u})"/></g>` +
        `<g fill="#9ca3af"><circle cx="19" cy="12" r="1.6"/><circle cx="25" cy="12" r="1.6"/><circle cx="31" cy="12" r="1.6"/><circle cx="37" cy="12" r="1.6"/></g>` +
        `<g stroke="#cbd5e1" stroke-width="1.4"><path d="M18 22h20M18 28h20M18 34h14M18 40h10"/></g>` +
        `<g filter="url(#sh{u})" transform="rotate(40 42 34)"><rect x="39" y="20" width="6" height="24" rx="1.5" fill="url(#pen{u})"/><path d="M39 44h6l-3 5z" fill="#f5deb3"/><path d="M41.2 47.7h1.6l-.8 1.3z" fill="#1f2937"/></g>`),

    calculator: T(lin('bg', '#a78bfa', '#5b21b6') + lin('k', '#ffffff', '#e9e3fb') + lin('o', '#fbbf24', '#ea7a00') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><rect x="12" y="12" width="16" height="16" rx="4.5" fill="url(#k{u})"/><rect x="32" y="12" width="16" height="16" rx="4.5" fill="url(#k{u})"/>` +
        `<rect x="12" y="32" width="16" height="16" rx="4.5" fill="url(#k{u})"/><rect x="32" y="32" width="16" height="16" rx="4.5" fill="url(#o{u})"/></g>` +
        `<g stroke="#5b21b6" stroke-width="2.4" stroke-linecap="round"><path d="M20 16.5v7M16.5 20h7M36.5 20h7M16.8 36.8l6.4 6.4M23.2 36.8l-6.4 6.4"/></g>` +
        `<g stroke="#fff" stroke-width="2.4" stroke-linecap="round"><path d="M36.5 38h7M36.5 42h7"/></g>`),

    store: T(lin('bg', '#f472b6', '#7c3aed', 1, 1) + lin('bag', '#ffffff', '#ece4ff') + shade,
        tile('bg') +
        `<path d="M23 21v-2.5a7 7 0 0 1 14 0V21" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/>` +
        `<g filter="url(#sh{u})"><path fill="url(#bag{u})" d="M15.5 21h29l-2.2 23.5a3 3 0 0 1-3 2.7H20.7a3 3 0 0 1-3-2.7z"/></g>` +
        `<rect x="22" y="27" width="7" height="7" rx="2" fill="#f472b6"/><rect x="31" y="27" width="7" height="7" rx="2" fill="#7c3aed"/>` +
        `<rect x="22" y="36" width="7" height="7" rx="2" fill="#22d3ee"/><rect x="31" y="36" width="7" height="7" rx="2" fill="#f59e0b"/>`),

    voice: T(lin('bg', '#fb7185', '#9f1239') + lin('m', '#ffffff', '#d7dbe3') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><rect x="23.5" y="10" width="13" height="23" rx="6.5" fill="url(#m{u})"/></g>` +
        `<g stroke="#9f1239" stroke-width="1.2" opacity=".45"><path d="M25 17h10M25 20.5h10M25 24h10"/></g>` +
        `<path d="M18 27a12 12 0 0 0 24 0" stroke="#fff" stroke-width="2.6" fill="none" stroke-linecap="round"/><path d="M30 39v7M23.5 47h13" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/>` +
        `<g stroke="#fecdd3" stroke-width="2" stroke-linecap="round"><path d="M10 26v6M14 23v12M46 23v12M50 26v6"/></g>`),
    // Blink: friendly ghost on sunny yellow
    blink: T(lin('bg', '#fef08a', '#facc15') + lin('g', '#ffffff', '#f1f5f9') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><path fill="url(#g{u})" stroke="#111" stroke-width="2" d="M30 11c-8 0-13.5 5.8-13.5 13.6v7.2c0 2-1.4 3.4-3.6 4.2-.9.3-.8 1.6.2 1.8 2.3.4 3.6 1.2 4.1 2.4.4 1.1 1.4 1.4 2.6 1.1 2-.5 3.8-.2 5.3 1.4 1.2 1.3 3 2.1 4.9 2.1s3.7-.8 4.9-2.1c1.5-1.6 3.3-1.9 5.3-1.4 1.2.3 2.2 0 2.6-1.1.5-1.2 1.8-2 4.1-2.4 1-.2 1.1-1.5.2-1.8-2.2-.8-3.6-2.2-3.6-4.2v-7.2C43.5 16.8 38 11 30 11z"/></g>` +
        `<ellipse cx="25.5" cy="25" rx="2" ry="2.8" fill="#111"/><ellipse cx="34.5" cy="25" rx="2" ry="2.8" fill="#111"/>`),

    // Spark: flame on hot pink
    spark: T(lin('bg', '#fb7185', '#e11d48') + lin('f', '#ffffff', '#ffe4e6') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})"><path fill="url(#f{u})" d="M31.5 10c1.6 6.3-1 9.6-3.6 12.6-2.8 3.2-6.4 6.6-6.4 12.4 0 7.4 5.6 13 12.4 13 7 0 11.6-5.4 11.6-12.3 0-5.8-3.3-9.4-5.3-11.6-.4 3-1.6 5-3.6 6.2.8-6.2-.9-14.4-5.1-20.3z"/></g>` +
        `<path fill="#fb7185" d="M33.2 33.5c.4 2.6-.7 4.1-1.9 5.4-1.1 1.2-2.3 2.4-2.3 4.4 0 2.4 1.8 4.2 4.1 4.2 2.4 0 4.1-1.8 4.1-4.3 0-3.6-1.7-6.4-4-9.7z" opacity=".9"/>`),

    // Kindred: two interlocking rings on violet
    kindred: T(lin('bg', '#c4b5fd', '#6d28d9') + shade,
        tile('bg') +
        `<g filter="url(#sh{u})" fill="none" stroke-width="4.5"><circle cx="24.5" cy="31" r="10" stroke="#fff"/><circle cx="35.5" cy="31" r="10" stroke="#fde68a"/></g>` +
        `<path d="M30 23.3a10 10 0 0 1 0 15.4" fill="none" stroke="#fff" stroke-width="4.5"/>`),

    // Ryde: car top-down on black with a route
    ryde: T(lin('bg', '#3f3f46', '#09090b') + lin('c', '#ffffff', '#d4d4d8') + shade,
        tile('bg') +
        `<path d="M12 48c8-2 9-12 18-14s10-10 18-14" stroke="#22c55e" stroke-width="3" fill="none" stroke-linecap="round" stroke-dasharray="1 5"/>` +
        `<circle cx="12" cy="48" r="3.5" fill="#22c55e"/><rect x="44.5" y="16.5" width="7" height="7" rx="1.5" fill="#fff"/>` +
        `<g filter="url(#sh{u})" transform="rotate(-28 30 32)"><rect x="23" y="20" width="14" height="25" rx="5" fill="url(#c{u})"/>` +
        `<rect x="25" y="25" width="10" height="5" rx="1.5" fill="#27272a"/><rect x="25" y="36" width="10" height="4" rx="1.5" fill="#27272a"/></g>`),

    // GrubGo: takeout bag with a fork on tomato red
    grubgo: T(lin('bg', '#f87171', '#b91c1c') + lin('b', '#fff7ed', '#fed7aa') + shade,
        tile('bg') +
        `<path d="M23 21v-3a7 7 0 0 1 14 0v3" stroke="#fff" stroke-width="2.8" fill="none" stroke-linecap="round"/>` +
        `<g filter="url(#sh{u})"><path fill="url(#b{u})" d="M15 21h30l-2.4 25a3 3 0 0 1-3 2.7H20.4a3 3 0 0 1-3-2.7z"/></g>` +
        `<path d="M27 28v7a3 3 0 0 0 6 0v-7M30 28v15M27 28v5M33 28v5" stroke="#dc2626" stroke-width="2.2" fill="none" stroke-linecap="round"/>`),

    // Cruise: navigation arrow on a road, teal
    cruise: T(lin('bg', '#67e8f9', '#0e7490') + lin('a', '#ffffff', '#e0f2fe') + shade,
        tile('bg') +
        `<path d="M22 60 28 0h4l6 60z" fill="#164e63" opacity=".35"/><path d="M30 6v6M30 20v6M30 34v6M30 48v6" stroke="#fff" stroke-width="1.6" opacity=".5"/>` +
        `<g filter="url(#sh{u})"><path fill="url(#a{u})" d="M30 13 44 46l-14-6.5L16 46z"/></g><path d="M30 13v26.5L16 46z" fill="#bae6fd"/>`),
};

export function hasArt(id) { return Object.prototype.hasOwnProperty.call(ART, id); }

// Returns an <svg> element for the app tile, with unique gradient ids
export function appArt(id) {
    const tpl = document.createElement('template');
    tpl.innerHTML = ART[id].replaceAll('{u}', `-${id}-${++n}`); // static markup only
    const svg = tpl.content.firstElementChild;
    svg.setAttribute('class', 'art');
    return svg;
}
