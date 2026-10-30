// Header, mobile menu, copy buttons
const hdr = document.querySelector('header.top');
const onScroll = () => hdr && hdr.classList.toggle('solid', scrollY > 40);
addEventListener('scroll', onScroll, { passive: true }); onScroll();
const mb = document.querySelector('.menu-btn'), nl = document.querySelector('nav.links');
if (mb) mb.addEventListener('click', () => { const o = nl.classList.toggle('open'); mb.setAttribute('aria-expanded', String(o)); });
document.querySelectorAll('[data-copy]').forEach(btn => btn.addEventListener('click', async () => {
  const el = document.getElementById(btn.dataset.copy);
  try { await navigator.clipboard.writeText(el.innerText); btn.textContent = 'Copied'; }
  catch { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); btn.textContent = 'Press Ctrl+C'; }
  setTimeout(() => { btn.textContent = 'Copy'; }, 1800);
}));
// Screenshot lightbox
document.querySelectorAll('img[data-zoom]').forEach(img => {
  img.style.cursor = 'zoom-in'; img.tabIndex = 0; img.setAttribute('role', 'button');
  const open = () => {
    const box = document.createElement('div'); box.className = 'lightbox'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', img.alt);
    const big = document.createElement('img'); big.src = img.dataset.zoom || img.src; big.alt = img.alt;
    const cap = document.createElement('p'); cap.textContent = img.alt;
    const x = document.createElement('button'); x.type = 'button'; x.className = 'lb-x'; x.textContent = 'Close'; x.setAttribute('aria-label', 'Close');
    box.append(big, cap, x); document.body.append(box); document.body.style.overflow = 'hidden'; x.focus();
    const close = () => { box.remove(); document.body.style.overflow = ''; img.focus(); removeEventListener('keydown', onKey); };
    const onKey = e => { if (e.key === 'Escape') close(); };
    box.addEventListener('click', e => { if (e.target !== big) close(); }); addEventListener('keydown', onKey);
  };
  img.addEventListener('click', open); img.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
});
// Fade sections in as they scroll into view
const rv = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const io2 = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io2.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  rv.forEach(el => io2.observe(el));
} else rv.forEach(el => el.classList.add('in'));
