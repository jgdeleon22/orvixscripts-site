// Mobile menu + copy buttons (shared)
const mb = document.querySelector('.menu-btn'), nl = document.querySelector('nav.links');
if (mb) mb.addEventListener('click', () => { const o = nl.classList.toggle('open'); mb.setAttribute('aria-expanded', String(o)); });
document.querySelectorAll('[data-copy]').forEach(btn => btn.addEventListener('click', async () => {
  const el = document.getElementById(btn.dataset.copy);
  try { await navigator.clipboard.writeText(el.innerText); btn.textContent = 'Copied'; }
  catch { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = 'Press Ctrl+C'; }
  setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
}));
