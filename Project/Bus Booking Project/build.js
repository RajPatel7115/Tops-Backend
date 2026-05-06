/* Generate all BusEase HTML pages.
   Run: node build.js
   Outputs into the same directory as this script. */
const fs = require('fs');
const path = require('path');
const OUT = __dirname;

const HEAD = (title, page) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title} · BusEase</title>
<meta name="description" content="BusEase — India's most loved bus booking experience. Book seats, charter whole buses, grab real offers.">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Ctext y='20' font-size='20'%3E🚌%3C/text%3E%3C/svg%3E">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
<link rel="stylesheet" href="assets/css/styles.css">
</head>
<body data-page="${page}">
<div id="be-navbar"></div>
<main>
`;

const FOOT = (extraScripts='') => `
</main>
<div id="be-footer"></div>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
<script src="assets/js/data.js"></script>
<script src="assets/js/common.js"></script>
${extraScripts}
</body>
</html>`;

const ic = {
  arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  shield: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  zap: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
  rupee: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12"/><path d="M6 8h12"/><path d="M6 13l8.5 8"/><path d="M6 13h3a5 5 0 0 0 0-10"/></svg>`,
  headphones: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-6h3v4z"/><path d="M3 19a2 2 0 0 0 2 2h1v-6H3v4z"/></svg>`,
  trending: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>`,
  sparkles: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></svg>`,
  busBig: `<svg xmlns="http://www.w3.org/2000/svg" width="180" height="180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v6"/><path d="M15 6v6"/><path d="M2 12h19.6"/><path d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"/><circle cx="7" cy="18" r="2"/><path d="M9 18h5"/><circle cx="16" cy="18" r="2"/></svg>`,
  truck: `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  gift: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>`,
  cal: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  truckNav: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
};

/* ============================== INDEX (home) ============================== */
const INDEX = HEAD('Bus booking, charter & offers', 'index') + `
<!-- HERO -->
<section style="position:relative; overflow:hidden;">
  <div style="position:absolute; inset:0;" class="bg-gradient-hero"></div>
  <div style="position:absolute; inset:0; background-image:url('assets/img/hero-bus.jpg');" class="bg-overlay-image"></div>
  <div style="position:absolute; inset:0;" class="bg-mesh"></div>
  <div style="position:absolute; inset:0; opacity:.06;" class="grid-pattern"></div>

  <div class="container py-5 position-relative" style="padding-top:4rem !important; padding-bottom:9rem !important;">
    <div class="row g-5 align-items-center">
      <div class="col-lg-6 animate-fade-up">
        <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style="background:rgba(255,255,255,.1); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,.2); color:#fff; font-size:.85rem;">
          ${ic.sparkles} <span>India's #1 bus booking</span>
        </div>
        <h1 class="text-5xl text-white font-extrabold tracking-tight" style="font-size:clamp(2.5rem, 6vw, 4.5rem); line-height:1.05;">
          Travel with<br>
          <span style="background:linear-gradient(90deg,#fdba74,#fef08a,#fda4af); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;">unfair ease.</span>
        </h1>
        <p class="text-lg mt-3 mb-0" style="color:rgba(255,255,255,.85); max-width:36rem;">
          Book buses across 100+ cities, charter your own ride by the kilometre, and grab offers that actually save you money.
        </p>
        <div class="d-flex gap-4 mt-4">
          <div><div class="text-3xl font-extrabold text-white font-mono" style="font-size:2.25rem;">10M+</div><div class="text-sm" style="color:rgba(255,255,255,.7);">Happy riders</div></div>
          <div><div class="text-3xl font-extrabold text-white font-mono" style="font-size:2.25rem;">2,500+</div><div class="text-sm" style="color:rgba(255,255,255,.7);">Operators</div></div>
          <div><div class="text-3xl font-extrabold text-white font-mono" style="font-size:2.25rem;">100+</div><div class="text-sm" style="color:rgba(255,255,255,.7);">Cities</div></div>
        </div>
      </div>
      <div class="col-lg-6 animate-fade-up" style="animation-delay:.1s;">
        <div id="be-search-host"></div>
        <div class="row g-2 mt-2">
          <div class="col-4"><a href="offers.html" class="glass rounded-2xl text-center p-3 d-block hover-scale transition-all"><div class="text-primary mb-1">${ic.gift}</div><div class="text-xs font-semibold">Offers</div></a></div>
          <div class="col-4"><a href="advance.html" class="glass rounded-2xl text-center p-3 d-block hover-scale transition-all"><div class="text-primary mb-1">${ic.cal}</div><div class="text-xs font-semibold">30-day plan</div></a></div>
          <div class="col-4"><a href="charter.html" class="glass rounded-2xl text-center p-3 d-block hover-scale transition-all"><div class="text-primary mb-1">${ic.truckNav}</div><div class="text-xs font-semibold">Charter</div></a></div>
        </div>
      </div>
    </div>
  </div>
  <div style="position:absolute;bottom:0;left:0;right:0;height:6rem;background:linear-gradient(to bottom,transparent,hsl(var(--background)));"></div>
</section>

<!-- OFFERS STRIP -->
<section class="container position-relative" style="margin-top:-4rem; z-index:5;">
  <div class="be-card shadow-soft p-4" style="border-radius:1.5rem;">
    <div class="d-flex align-items-center justify-content-between mb-3">
      <h3 class="font-bold text-xl m-0 d-flex align-items-center gap-2"><span class="text-primary">${ic.gift}</span> Today's hottest offers</h3>
      <a href="offers.html" class="text-sm font-semibold text-primary d-inline-flex align-items-center gap-1">All offers ${ic.arrowRight}</a>
    </div>
    <div class="row g-3" id="be-offers-strip"></div>
  </div>
</section>

<!-- POPULAR ROUTES -->
<section class="container py-5" style="padding-top:5rem !important; padding-bottom:5rem !important;">
  <div class="d-flex align-items-end justify-content-between mb-4">
    <div>
      <div class="text-sm font-mono text-primary mb-2">// FREQUENTLY TRAVELLED</div>
      <h2 class="text-4xl font-extrabold m-0">Popular routes</h2>
    </div>
    <span class="text-primary d-none d-md-inline">${ic.trending}</span>
  </div>
  <div class="row g-3" id="be-popular-routes"></div>
</section>

<!-- WHY US -->
<section class="border-t-be border-b-be py-5" style="background:hsl(var(--muted) / .4); padding-top:5rem !important; padding-bottom:5rem !important;">
  <div class="container">
    <div class="text-center mx-auto mb-5" style="max-width:36rem;">
      <div class="text-sm font-mono text-primary mb-2">// WHY BUSEASE</div>
      <h2 class="text-4xl font-extrabold">Built for travellers, obsessed with detail.</h2>
    </div>
    <div class="row g-3">
      ${[
        ['shield','Bank-grade Secure','256-bit encrypted payments'],
        ['zap','Instant Confirmation','Tickets in your inbox in seconds'],
        ['rupee','Lowest Price Promise',"Find it cheaper? We'll match it"],
        ['headphones','24/7 Human Support','Real people, anytime, any route']
      ].map(([k,t,d])=>`
        <div class="col-md-6 col-lg-3">
          <div class="be-card p-4 h-100 hover-lift transition-all" style="border-radius:1rem;">
            <div class="size-12 rounded-xl mb-3 grid-place shadow-elegant" style="background:var(--gradient-primary); color:hsl(var(--primary-foreground));">${ic[k]}</div>
            <h6 class="font-bold text-lg m-0">${t}</h6>
            <p class="text-sm text-muted mb-0 mt-1">${d}</p>
          </div>
        </div>`).join('')}
    </div>
  </div>
</section>

<!-- CHARTER PROMO -->
<section class="container py-5" style="padding-top:5rem !important; padding-bottom:5rem !important;">
  <div class="position-relative bg-gradient-hero rounded-3xl text-white overflow-hidden p-5">
    <div style="position:absolute; inset:0; opacity:.6;" class="bg-mesh"></div>
    <div class="row position-relative align-items-center g-4">
      <div class="col-md-7">
        <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style="background:rgba(255,255,255,.1); backdrop-filter:blur(8px); font-size:.75rem; font-weight:600;">${ic.truck} <span>NEW · CHARTER</span></div>
        <h2 class="text-5xl font-extrabold" style="line-height:1.1;">Book the <span class="text-gradient">whole bus.</span></h2>
        <p class="text-lg mt-3" style="color:rgba(255,255,255,.85);">Weddings, corporate offsites, college trips. Pick your fleet, set your route, pay by the kilometre.</p>
        <a href="charter.html" class="btn-be btn-lg-be mt-3" style="background:#fff; color:hsl(var(--foreground)); font-weight:700;">Charter a bus ${ic.arrowRight}</a>
      </div>
      <div class="col-md-5 d-none d-md-block text-center">
        <span class="animate-float-slow d-inline-block" style="color:rgba(255,255,255,.8);">${ic.busBig}</span>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section class="container py-5" style="padding-top:5rem !important; padding-bottom:5rem !important;">
  <div class="text-center mb-5">
    <div class="text-sm font-mono text-primary mb-2">// SOCIAL PROOF</div>
    <h2 class="text-4xl font-extrabold">10 million riders can't be wrong.</h2>
  </div>
  <div class="row g-4">
    ${[
      ['Priya Sharma','Daily commuter','Booked Mumbai → Pune in 30 seconds. The seat selection UI is the smoothest I have used.'],
      ['Rahul Mehta','Wedding planner','Chartered 3 Volvos for a baraat — transparent km pricing, zero surprises. Bookmarked.'],
      ['Anita Krishnan','Solo traveller','The women-only seat filter and ladies pricing offer made me feel taken care of. Rare these days.']
    ].map(([n,r,t])=>`
      <div class="col-md-4">
        <div class="be-card p-4 h-100" style="border-radius:1rem;">
          <div class="d-flex gap-1 mb-2" style="color:#f59e0b;">${ic.star}${ic.star}${ic.star}${ic.star}${ic.star}</div>
          <p class="m-0 text-fg">"${t}"</p>
          <div class="border-t-be d-flex align-items-center gap-3 pt-3 mt-3">
            <div class="size-10 rounded-pill grid-place font-bold" style="background:var(--gradient-primary); color:hsl(var(--primary-foreground));">${n[0]}</div>
            <div><div class="font-semibold text-sm">${n}</div><div class="text-xs text-muted">${r}</div></div>
          </div>
        </div>
      </div>`).join('')}
  </div>
</section>
` + FOOT(`
<script src="assets/js/search-form.js"></script>
<script>
  document.addEventListener('DOMContentLoaded', ()=>{
    renderSearchForm(document.getElementById('be-search-host'));

    // Offers strip
    const off = BE.OffersStore.all().slice(0,3);
    document.getElementById('be-offers-strip').innerHTML = off.map(o => \`
      <div class="col-md-4">
        <div class="\${o.color} text-white p-4 rounded-2xl position-relative overflow-hidden h-100">
          <div class="text-3xl mb-1">\${o.icon}</div>
          <div class="font-bold">\${o.title}</div>
          <div class="text-xs mb-2" style="opacity:.9;">\${o.desc}</div>
          <div class="d-inline-block px-2 py-1 rounded font-mono font-bold text-xs" style="background:rgba(255,255,255,.2); backdrop-filter:blur(4px);">\${o.code}</div>
        </div>
      </div>\`).join('');

    // Popular routes
    const today = BE.fmtISO(new Date());
    document.getElementById('be-popular-routes').innerHTML = BE.POPULAR_ROUTES.map(r => \`
      <div class="col-md-6 col-lg-4">
        <a href="search.html?from=\${r.from}&to=\${r.to}&date=\${today}" class="be-card p-4 d-block transition-all hover-lift" style="text-decoration:none; color:inherit;">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <div class="font-bold text-lg">\${r.from} <span class="text-primary mx-1">→</span> \${r.to}</div>
              <div class="text-sm text-muted mt-1">\${r.km} km · multiple operators</div>
            </div>
            <div class="text-end">
              <div class="text-xs text-muted">From</div>
              <div class="text-2xl font-extrabold text-gradient">₹\${r.price}</div>
            </div>
          </div>
          <div class="border-t-be pt-3 mt-3 d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center gap-1 text-sm" style="color:#f59e0b;">${ic.star} <span>4.6 · 12k reviews</span></div>
            <span class="text-muted">${ic.arrowRight}</span>
          </div>
        </a>
      </div>\`).join('');
  });
</script>
`);
fs.writeFileSync(path.join(OUT,'index.html'), INDEX);
console.log('wrote index.html');

/* ============================== OFFERS ============================== */
const OFFERS = HEAD('Offers & coupons', 'offers') + `
<section class="position-relative bg-gradient-hero text-white py-5 overflow-hidden" style="padding-top:5rem !important; padding-bottom:5rem !important;">
  <div style="position:absolute; inset:0; opacity:.6;" class="bg-mesh"></div>
  <div class="container position-relative">
    <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style="background:rgba(255,255,255,.1); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,.2); font-size:.85rem;">${ic.sparkles}<span>LIVE NOW</span></div>
    <h1 class="text-5xl font-extrabold" style="font-size:clamp(2.5rem,5vw,4rem); line-height:1.1; max-width:42rem;">Offers that <span class="text-gradient">actually</span> save you money.</h1>
    <p class="mt-3 text-lg" style="color:rgba(255,255,255,.8); max-width:36rem;">No fine print, no fake countdowns. Just real discounts on every route.</p>
  </div>
</section>

<section class="container position-relative pb-5" style="margin-top:-3rem;">
  <div class="row g-4" id="be-offers-grid"></div>

  <div class="be-card text-center p-5 mt-5" style="border-radius:1.5rem;">
    <div class="text-primary mx-auto mb-2">${ic.gift}</div>
    <h3 class="text-2xl font-extrabold">How to use a coupon?</h3>
    <p class="text-muted mt-2 mx-auto" style="max-width:32rem;">Search a route → select your seats → enter the coupon on the booking page → enjoy the discount instantly. Zero hidden steps.</p>
  </div>
</section>
` + FOOT(`
<script>
  document.addEventListener('DOMContentLoaded', ()=>{
    const offs = BE.OffersStore.all();
    document.getElementById('be-offers-grid').innerHTML = offs.map(o => \`
      <div class="col-md-6 col-lg-4">
        <div class="be-card overflow-hidden h-100 transition-all hover-lift" style="border-radius:1.5rem;">
          <div class="\${o.color} text-white p-4 position-relative overflow-hidden">
            <div style="position:absolute; right:-1.5rem; top:-1.5rem; font-size:5rem; opacity:.2;">\${o.icon}</div>
            <div style="font-size:3rem;">\${o.icon}</div>
            <h3 class="text-2xl font-extrabold mt-2">\${o.title}</h3>
            <p class="m-0 mt-1 text-sm" style="opacity:.9;">\${o.desc}</p>
          </div>
          <div class="p-3 d-flex align-items-center justify-content-between gap-3">
            <div>
              <div class="text-xs text-muted">⏱ Valid till month-end</div>
              <div class="font-mono font-extrabold text-lg mt-1">\${o.code}</div>
            </div>
            <button class="btn-be btn-primary-grad" onclick="navigator.clipboard.writeText('\${o.code}'); toast.success('\${o.code} copied!')">📋 Copy</button>
          </div>
        </div>
      </div>\`).join('');
  });
</script>
`);
fs.writeFileSync(path.join(OUT,'offers.html'), OFFERS);
console.log('wrote offers.html');

/* ============================== ADVANCE ============================== */
const ADVANCE = HEAD('Plan a month ahead', 'advance') + `
<section class="position-relative bg-gradient-hero text-white py-5 overflow-hidden" style="padding-top:4rem !important; padding-bottom:4rem !important;">
  <div style="position:absolute; inset:0; opacity:.6;" class="bg-mesh"></div>
  <div class="container position-relative">
    <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style="background:rgba(255,255,255,.1); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,.2); font-size:.85rem;">${ic.sparkles}<span>PLAN AHEAD · SAVE MORE</span></div>
    <h1 class="text-5xl font-extrabold" style="font-size:clamp(2.5rem,5vw,4rem); line-height:1.1; max-width:42rem;">Book a month out. <span class="text-gradient">Pay 30% less.</span></h1>
    <p class="mt-3 text-lg" style="color:rgba(255,255,255,.85); max-width:36rem;">See the full 30-day price calendar before you commit. Lock in tomorrow's adventure at yesterday's rate.</p>
  </div>
</section>

<section class="container position-relative pb-5" style="margin-top:-3rem;">
  <div class="be-card shadow-soft p-4" style="border-radius:1.5rem;">
    <div class="row g-3 mb-4">
      <div class="col-md-6">
        <label class="label-be tiny">FROM</label>
        <input id="adv-from" class="input-be h-12 mt-1" value="Mumbai" autocomplete="off">
      </div>
      <div class="col-md-6">
        <label class="label-be tiny">TO</label>
        <input id="adv-to" class="input-be h-12 mt-1" value="Pune" autocomplete="off">
      </div>
    </div>

    <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
      <h3 class="font-bold text-lg m-0 d-flex align-items-center gap-2"><span class="text-primary">${ic.cal}</span> Next 30 days · <span id="adv-route">Mumbai → Pune</span></h3>
      <div class="text-sm text-muted">Cheapest: <span class="font-bold" style="color:#059669;" id="adv-cheap">—</span></div>
    </div>

    <div id="adv-grid" class="d-grid" style="grid-template-columns: repeat(7, minmax(0,1fr)); gap:.5rem;"></div>

    <div class="mt-4 p-4 d-flex flex-wrap align-items-center justify-content-between gap-3 rounded-2xl" style="background:linear-gradient(135deg, hsl(var(--primary) / .1), hsl(var(--primary-glow) / .1)); border:1px solid hsl(var(--primary) / .2);">
      <div>
        <div class="text-sm text-muted d-flex align-items-center gap-1">📍 <span id="adv-route2">Mumbai → Pune</span></div>
        <div class="text-2xl font-extrabold mt-1" id="adv-sel-date">—</div>
        <div class="d-flex align-items-center gap-2 text-sm mt-1 font-semibold" style="color:#059669;">📉 <span id="adv-savings">—</span></div>
      </div>
      <a id="adv-book" class="btn-be btn-primary-grad btn-lg-be shadow-elegant" href="#">Book at ₹— ${ic.arrowRight}</a>
    </div>
  </div>
</section>
` + FOOT(`
<script>
  document.addEventListener('DOMContentLoaded', ()=>{
    const fromEl = document.getElementById('adv-from');
    const toEl = document.getElementById('adv-to');
    attachCitySuggest(fromEl); attachCitySuggest(toEl);

    const today = new Date(); today.setHours(0,0,0,0);
    const days = Array.from({length:31}, (_,i)=> BE.addDays(today, i));
    let selected = BE.addDays(today, 30);

    function priceFor(d){
      const offset = Math.floor((d - today) / 86400000);
      const base = 850;
      const earlyDiscount = Math.min(offset * 8, 220);
      const variance = ((fromEl.value + toEl.value + offset).split('').reduce((a,c)=>a+c.charCodeAt(0),0) % 80) - 40;
      return Math.max(380, base - earlyDiscount + variance);
    }
    function isSameDay(a,b){ return a.toDateString()===b.toDateString(); }
    function fmtMd(d){ return d.toLocaleDateString('en-US', {month:'short', day:'numeric'}); }
    function fmtEEE(d){ return d.toLocaleDateString('en-US', {weekday:'short'}); }

    function paint(){
      const route = (fromEl.value || 'Mumbai') + ' → ' + (toEl.value || 'Pune');
      document.getElementById('adv-route').textContent = route;
      document.getElementById('adv-route2').textContent = route;

      let cheapest = days[0];
      days.forEach(d => { if (priceFor(d) < priceFor(cheapest)) cheapest = d; });
      document.getElementById('adv-cheap').textContent = fmtMd(cheapest) + ' · ₹' + priceFor(cheapest);

      document.getElementById('adv-grid').innerHTML = days.map((d,i)=>{
        const p = priceFor(d);
        const isCheap = isSameDay(d, cheapest);
        const isSel = isSameDay(d, selected);
        const cls = isSel ? 'border-primary' : isCheap ? '' : '';
        const style = isSel
          ? 'border:2px solid hsl(var(--primary)); background:hsl(var(--primary) / .1); transform:scale(1.05); box-shadow:var(--shadow-elegant);'
          : isCheap
          ? 'border:2px solid #34d399; background:rgba(16,185,129,.05);'
          : 'border:2px solid hsl(var(--border)); background:hsl(var(--card));';
        return \`<button data-i="\${i}" class="position-relative p-2 rounded-xl text-start transition-all" style="\${style}">
          \${isCheap ? '<span class="position-absolute" style="top:-.4rem;right:-.4rem;font-size:.6rem;font-weight:700;background:#10b981;color:#fff;padding:.1rem .35rem;border-radius:999px;">BEST</span>' : ''}
          <div class="text-xs text-muted">\${fmtEEE(d)}</div>
          <div class="font-extrabold text-lg">\${d.getDate()}</div>
          <div class="text-xs font-mono font-semibold text-primary mt-1">₹\${p}</div>
        </button>\`;
      }).join('');

      document.querySelectorAll('#adv-grid button').forEach(b=>{
        b.addEventListener('click', ()=>{ selected = days[+b.dataset.i]; paint(); });
      });

      document.getElementById('adv-sel-date').textContent = selected.toLocaleDateString('en-US', {weekday:'long', month:'short', day:'numeric', year:'numeric'});
      document.getElementById('adv-savings').textContent = 'Save ₹' + (priceFor(today) - priceFor(selected)) + ' vs today\\'s price';
      const bk = document.getElementById('adv-book');
      bk.innerHTML = 'Book at ₹' + priceFor(selected) + ' ${ic.arrowRight}';
      bk.href = \`search.html?from=\${encodeURIComponent(fromEl.value)}&to=\${encodeURIComponent(toEl.value)}&date=\${BE.fmtISO(selected)}\`;
    }
    fromEl.addEventListener('input', paint);
    toEl.addEventListener('input', paint);
    paint();
  });
</script>
`);
fs.writeFileSync(path.join(OUT,'advance.html'), ADVANCE);
console.log('wrote advance.html');

/* ============================== TRACK ============================== */
const TRACK = HEAD('Track your bus', 'track') + `
<section class="container py-5" style="padding-top:3rem !important;">
  <div class="mx-auto" style="max-width:48rem;">
    <div class="text-center mb-4">
      <div class="text-sm font-mono text-primary mb-2">// LIVE</div>
      <h1 class="text-5xl font-extrabold" style="font-size:clamp(2.25rem,4vw,3rem);">Track your bus in real-time</h1>
      <p class="text-muted mt-2">Enter your PNR and we'll show you exactly where your ride is.</p>
    </div>

    <div class="be-card p-4 shadow-soft" style="border-radius:1.5rem;">
      <label class="label-be">PNR / Booking ID</label>
      <div class="d-flex gap-2 mt-2">
        <input id="track-pnr" class="input-be h-12 font-mono" placeholder="BE12345678" style="text-transform:uppercase;">
        <button id="track-go" class="btn-be btn-primary-grad btn-lg-be">📍 Track</button>
      </div>
    </div>

    <div id="track-result" class="be-card mt-4 p-4 animate-fade-up" style="border-radius:1.5rem; display:none;">
      <div class="d-flex align-items-center gap-3 mb-4 flex-wrap">
        <div class="size-12 rounded-2xl grid-place shadow-elegant" style="background:var(--gradient-primary); color:hsl(var(--primary-foreground));">🚍</div>
        <div>
          <div class="font-extrabold text-lg">Volvo Multi-Axle · MH 12 AB 1234</div>
          <div class="text-sm text-muted">VRL Travels · On time</div>
        </div>
        <div class="ms-auto text-end">
          <div class="text-xs text-muted">ETA</div>
          <div class="font-extrabold text-2xl text-gradient font-mono">06:00</div>
        </div>
      </div>
      <div class="position-relative" style="padding-left:2rem;" id="track-stops"></div>
    </div>
  </div>
</section>
` + FOOT(`
<script>
  const stops = [
    { name:'Mumbai (Dadar)', time:'21:00', status:'done' },
    { name:'Lonavala Toll', time:'22:30', status:'done' },
    { name:'Pune (Shivajinagar)', time:'23:45', status:'current' },
    { name:'Satara', time:'01:30', status:'upcoming' },
    { name:'Kolhapur', time:'03:45', status:'upcoming' },
    { name:'Belgaum', time:'06:00', status:'upcoming' },
  ];
  document.getElementById('track-go').addEventListener('click', ()=>{
    document.getElementById('track-result').style.display = 'block';
    document.getElementById('track-stops').innerHTML = \`
      <div style="position:absolute; left:.75rem; top:.5rem; bottom:.5rem; width:2px; background:hsl(var(--border));"></div>
      \${stops.map(s => {
        const dot = s.status==='done' ? 'background:#10b981;border-color:#a7f3d0;' :
                    s.status==='current' ? 'background:hsl(var(--primary));border-color:hsl(var(--primary) / .3);' :
                    'background:hsl(var(--muted));border-color:hsl(var(--border));';
        const cls = s.status==='current' ? ' animate-pulse-glow' : '';
        const titleColor = s.status==='current' ? 'color:hsl(var(--primary));' : '';
        return \`<div class="position-relative pb-4">
          <div class="position-absolute\${cls}" style="left:-1.4rem; top:.25rem; width:1.25rem; height:1.25rem; border-radius:50%; border:4px solid; \${dot}"></div>
          <div class="d-flex justify-content-between align-items-start gap-2">
            <div>
              <div class="font-bold" style="\${titleColor}">\${s.name}</div>
              \${s.status==='current' ? '<div class="text-xs text-primary font-semibold mt-1">📍 Bus is here</div>' : ''}
            </div>
            <div class="text-sm font-mono text-muted">⏱ \${s.time}</div>
          </div>
        </div>\`;
      }).join('')}
    \`;
  });
</script>
`);
fs.writeFileSync(path.join(OUT,'track.html'), TRACK);
console.log('wrote track.html');

/* ============================== SUPPORT ============================== */
const SUPPORT = HEAD('Help & Support', 'support') + `
<section class="container py-5">
  <div class="text-center mb-5">
    <div class="text-sm font-mono text-primary mb-2">// HELP CENTER</div>
    <h1 class="text-5xl font-extrabold" style="font-size:clamp(2.25rem,4vw,3rem);">We're here for you, 24/7.</h1>
    <p class="text-muted mt-2 mx-auto" style="max-width:36rem;">Real humans. Real fast. Pick the channel you prefer — we'll be there.</p>
  </div>

  <div class="row g-3 mb-5">
    ${[
      ['📞','Call us','1800-123-BUSE','Toll-free · 24/7'],
      ['💬','Live chat','Start now','Avg reply: 30s'],
      ['✉️','Email','help@busease.in','Reply within 2h']
    ].map(([e,t,v,d])=>`
      <div class="col-md-4">
        <div class="be-card p-4 h-100 hover-lift transition-all" style="border-radius:1rem;">
          <div class="size-12 rounded-xl mb-3 grid-place shadow-elegant" style="background:var(--gradient-primary); color:hsl(var(--primary-foreground)); font-size:1.5rem;">${e}</div>
          <div class="text-sm text-muted">${t}</div>
          <div class="font-extrabold text-xl mt-1">${v}</div>
          <div class="text-xs text-muted mt-1">${d}</div>
        </div>
      </div>`).join('')}
  </div>

  <div class="row g-4">
    <div class="col-lg-5">
      <div class="be-card p-4" style="border-radius:1.5rem;">
        <div class="d-flex align-items-center gap-2 mb-3"><span class="text-primary">❓</span><h3 class="text-2xl font-extrabold m-0">Frequently asked</h3></div>
        <div class="accordion accordion-flush" id="faq">
          ${[
            ['How do I cancel a booking?','Go to My Trips, find your booking, and click Cancel. Refunds usually arrive in 5-7 business days.'],
            ['Can I change my seat after booking?','Seat changes are subject to operator availability. Reach out to our support and we will help you swap if possible.'],
            ['What payment methods are accepted?','UPI (GPay, PhonePe, Paytm, BHIM), all major credit/debit cards, and net banking from 50+ banks.'],
            ['Is my payment secure?','Absolutely. We use 256-bit SSL and PCI DSS-compliant payment processors. Your card details never touch our servers.'],
            ['How does charter pricing work?','Charter pricing = base fleet cost + (per-km rate × distance) + add-ons + 5% GST. Fully transparent — no hidden fees.'],
            ['Do offer codes stack with discounts?','Each booking allows one offer code. The system auto-applies the best available discount to maximise savings.'],
          ].map((f,i)=>`
            <div class="accordion-item" style="background:transparent; border-color:hsl(var(--border));">
              <h2 class="accordion-header"><button class="accordion-button collapsed" style="background:transparent; color:inherit; box-shadow:none; font-weight:600;" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}">${f[0]}</button></h2>
              <div id="faq${i}" class="accordion-collapse collapse" data-bs-parent="#faq"><div class="accordion-body text-muted">${f[1]}</div></div>
            </div>`).join('')}
        </div>
      </div>
    </div>
    <div class="col-lg-7">
      <div class="be-card p-4" style="border-radius:1.5rem;">
        <h3 class="text-2xl font-extrabold mb-3">Send a message</h3>
        <form id="support-form" class="d-flex flex-column gap-3">
          <div class="row g-3">
            <div class="col-sm-6"><label class="label-be">Name</label><input class="input-be mt-1" required></div>
            <div class="col-sm-6"><label class="label-be">Email</label><input class="input-be mt-1" type="email" required></div>
          </div>
          <div><label class="label-be">PNR (optional)</label><input class="input-be mt-1 font-mono"></div>
          <div><label class="label-be">Message</label><textarea class="textarea-be mt-1" rows="5" required></textarea></div>
          <button class="btn-be btn-primary-grad btn-lg-be w-100">Send message</button>
        </form>
        <div class="row g-3 text-center pt-4 mt-4 border-t-be">
          ${[['🛡','100% secure'],['💸','Refund guarantee'],['📍','100+ cities']].map(([e,l])=>`
            <div class="col-4 text-xs"><div class="text-primary mb-1" style="font-size:1.25rem;">${e}</div><div class="font-semibold">${l}</div></div>
          `).join('')}
        </div>
      </div>
    </div>
  </div>
</section>
` + FOOT(`
<script>
  document.getElementById('support-form').addEventListener('submit', e=>{
    e.preventDefault(); toast.success("Message sent! We'll reply within 2 hours."); e.target.reset();
  });
</script>
`);
fs.writeFileSync(path.join(OUT,'support.html'), SUPPORT);
console.log('wrote support.html');

/* ============================== 404 ============================== */
const NF = HEAD('Page not found', '404') + `
<section class="d-flex align-items-center justify-content-center" style="min-height:60vh; background:hsl(var(--muted));">
  <div class="text-center">
    <h1 class="font-bold mb-3" style="font-size:3rem;">404</h1>
    <p class="text-xl text-muted mb-3">Oops! Page not found</p>
    <a href="index.html" class="text-primary" style="text-decoration:underline;">Return to Home</a>
  </div>
</section>
` + FOOT();
fs.writeFileSync(path.join(OUT,'404.html'), NF);
console.log('wrote 404.html');

console.log('PHASE 1 done.');

/* ============================== SEARCH ============================== */
const SEARCH = HEAD('Search results', 'search') + `
<section class="container py-4">
  <div id="be-search-host" class="mb-4"></div>

  <div class="d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2">
    <h2 class="text-3xl font-extrabold m-0"><span id="srch-from">Mumbai</span> <span class="text-primary mx-1">→</span> <span id="srch-to">Pune</span></h2>
    <div class="d-flex align-items-center gap-3">
      <span class="text-sm text-muted" id="srch-count">0 buses</span>
      <button class="btn-be btn-outline-be d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#srch-filters">⚙ Filters</button>
    </div>
  </div>

  <div class="row g-4">
    <aside class="col-lg-3 d-none d-lg-block">
      <div class="be-card p-4 sticky-top" style="border-radius:1rem; top:5rem;">
        <h6 class="font-bold mb-3">⚙ Filters</h6>
        <div id="srch-filter-body"></div>
      </div>
    </aside>
    <div class="col-lg-9">
      <div id="srch-results" class="d-flex flex-column gap-3"></div>
    </div>
  </div>
</section>

<div class="offcanvas offcanvas-end" id="srch-filters" tabindex="-1">
  <div class="offcanvas-header"><h5 class="offcanvas-title">Filters</h5><button class="btn-close" data-bs-dismiss="offcanvas"></button></div>
  <div class="offcanvas-body" id="srch-filter-body-mobile"></div>
</div>
` + FOOT(`
<script src="assets/js/search-form.js"></script>
<script>
document.addEventListener('DOMContentLoaded', ()=>{
  const from = BE.qs('from','Mumbai'), to = BE.qs('to','Pune'), date = BE.qs('date', BE.fmtISO(new Date()));
  document.getElementById('srch-from').textContent = from;
  document.getElementById('srch-to').textContent = to;
  renderSearchForm(document.getElementById('be-search-host'), {from,to,date});

  const all = BE.generateBuses(from,to);
  const types = [...new Set(all.map(b=>b.type))];
  const state = { maxPrice:2000, types:[], dep:'any', sort:'price' };

  function buildFilters(host){
    host.innerHTML = \`
      <div class="mb-3">
        <label class="label-be tiny font-bold">Max Price: ₹<span id="mp-\${host.id}">\${state.maxPrice}</span></label>
        <input type="range" min="400" max="2000" step="50" value="\${state.maxPrice}" class="form-range mt-2 srch-mp">
      </div>
      <div class="mb-3">
        <label class="label-be tiny font-bold">Bus Type</label>
        <div class="d-flex flex-column gap-2 mt-2">
          \${types.map(t=>\`<label class="d-flex align-items-center gap-2 text-sm" style="cursor:pointer;">
            <input type="checkbox" class="form-check-input srch-type" value="\${t}" \${state.types.includes(t)?'checked':''}>\${t}
          </label>\`).join('')}
        </div>
      </div>
      <div class="mb-3">
        <label class="label-be tiny font-bold">Departure</label>
        <select class="input-be h-10 mt-2 srch-dep">
          <option value="any">Any time</option>
          <option value="morning">Morning (06-12)</option>
          <option value="afternoon">Afternoon (12-18)</option>
          <option value="evening">Evening (18-24)</option>
          <option value="night">Night (00-06)</option>
        </select>
      </div>
      <div>
        <label class="label-be tiny font-bold">Sort by</label>
        <select class="input-be h-10 mt-2 srch-sort">
          <option value="price">Price (low to high)</option>
          <option value="rating">Rating</option>
          <option value="duration">Duration</option>
          <option value="departure">Departure time</option>
        </select>
      </div>\`;
    host.querySelector('.srch-dep').value = state.dep;
    host.querySelector('.srch-sort').value = state.sort;
    host.querySelector('.srch-mp').addEventListener('input', e=>{ state.maxPrice=+e.target.value; document.getElementById('mp-'+host.id).textContent=e.target.value; renderAll(); });
    host.querySelectorAll('.srch-type').forEach(cb=>cb.addEventListener('change', e=>{
      if (e.target.checked) state.types.push(e.target.value); else state.types = state.types.filter(x=>x!==e.target.value);
      renderAll();
    }));
    host.querySelector('.srch-dep').addEventListener('change', e=>{ state.dep=e.target.value; renderAll(); });
    host.querySelector('.srch-sort').addEventListener('change', e=>{ state.sort=e.target.value; renderAll(); });
  }
  const fb = document.getElementById('srch-filter-body'); fb.id='fb1'; buildFilters(fb);
  const fbm = document.getElementById('srch-filter-body-mobile'); fbm.id='fb2'; buildFilters(fbm);

  function filtered(){
    return all
      .filter(b=>b.price<=state.maxPrice)
      .filter(b=>!state.types.length || state.types.includes(b.type))
      .filter(b=>{
        if (state.dep==='any') return true;
        const h = +b.departure.split(':')[0];
        if (state.dep==='morning') return h>=6 && h<12;
        if (state.dep==='afternoon') return h>=12 && h<18;
        if (state.dep==='evening') return h>=18 && h<24;
        return h<6;
      })
      .sort((a,b)=> state.sort==='price' ? a.price-b.price :
        state.sort==='rating' ? +b.rating-+a.rating :
        state.sort==='departure' ? a.departure.localeCompare(b.departure) :
        parseInt(a.duration)-parseInt(b.duration));
  }

  const amenIcon = { WiFi:'📶','Charging Point':'🔌',Snacks:'🍪',Movies:'📺' };

  function renderAll(){
    const list = filtered();
    document.getElementById('srch-count').textContent = list.length+' buses';
    const host = document.getElementById('srch-results');
    if (!list.length){ host.innerHTML = '<div class="be-card p-5 text-center" style="border-radius:1rem;"><p class="text-muted m-0">No buses match these filters. Try adjusting them.</p></div>'; return; }
    host.innerHTML = list.map((b,i)=>\`
      <div class="be-card p-4 transition-all hover-lift animate-fade-up" style="border-radius:1rem; animation-delay:\${i*.04}s;">
        <div class="row g-3 align-items-center">
          <div class="col-md">
            <div class="d-flex justify-content-between align-items-start gap-2">
              <div>
                <h6 class="font-bold text-lg m-0 d-flex align-items-center gap-2">\${b.name}
                  \${b.ecoFriendly?'<span class="px-2 py-0 rounded-pill text-xs font-semibold" style="background:rgba(16,185,129,.1);color:#059669;">🌿 Eco</span>':''}</h6>
                <div class="text-sm text-muted">\${b.type}</div>
              </div>
              <div class="d-inline-flex align-items-center gap-1 px-2 py-1 rounded-lg font-bold text-sm" style="background:rgba(16,185,129,.1);color:#059669;">★ \${b.rating}</div>
            </div>
            <div class="d-flex align-items-center gap-3 mt-3">
              <div><div class="font-extrabold font-mono text-lg">\${b.departure}</div><div class="text-xs text-muted">📍 \${from}</div></div>
              <div class="flex-grow-1 position-relative" style="border-top:2px dashed hsl(var(--border));">
                <span class="position-absolute px-2 text-xs font-mono text-muted" style="left:50%; top:-.7rem; transform:translateX(-50%); background:hsl(var(--card));">\${b.duration}</span>
              </div>
              <div class="text-end"><div class="font-extrabold font-mono text-lg">\${b.arrival}</div><div class="text-xs text-muted">📍 \${to}</div></div>
            </div>
            <div class="d-flex flex-wrap gap-1 mt-3">
              \${b.amenities.map(a=>\`<span class="px-2 py-1 rounded-pill text-xs font-medium" style="background:hsl(var(--muted));">\${amenIcon[a]||'•'} \${a}</span>\`).join('')}
            </div>
          </div>
          <div class="col-md-auto text-md-end border-md-start ps-md-3 d-flex flex-md-column justify-content-between align-items-end gap-2" style="min-width:160px;">
            <div>
              <div class="text-3xl font-extrabold text-gradient">₹\${b.price}</div>
              <div class="text-xs text-muted">\${b.seatsAvailable} seats left</div>
            </div>
            <a class="btn-be btn-primary-grad" href="seats.html?busId=\${encodeURIComponent(b.id)}&from=\${encodeURIComponent(from)}&to=\${encodeURIComponent(to)}&date=\${date}">Select seats →</a>
          </div>
        </div>
      </div>\`).join('');
  }
  renderAll();
});
</script>
`);
fs.writeFileSync(path.join(OUT,'search.html'), SEARCH);
console.log('wrote search.html');

/* ============================== SEATS ============================== */
const SEATS = HEAD('Select seats', 'seats') + `
<section class="container py-4">
  <div class="row g-4">
    <div class="col-lg-8">
      <div class="be-card p-4 mb-3" style="border-radius:1rem;">
        <div class="d-flex justify-content-between flex-wrap gap-2">
          <div><h5 class="font-extrabold text-xl m-0" id="sb-name">—</h5><div class="text-sm text-muted" id="sb-meta">—</div></div>
          <div class="text-end"><div class="text-xs text-muted">Departs</div><div class="font-extrabold font-mono text-lg" id="sb-dep">—</div></div>
        </div>
      </div>
      <div class="be-card p-4" style="border-radius:1rem;">
        <h6 class="font-bold mb-3">Select your seats</h6>
        <div class="d-flex flex-wrap gap-3 text-xs text-muted mb-3" id="sb-legend"></div>
        <div class="mx-auto p-4 border-dashed-be rounded-3xl" style="max-width:24rem; background:hsl(var(--muted) / .4);">
          <div class="text-end mb-3" style="font-size:1.5rem;">🚍</div>
          <div id="sb-grid" class="d-flex flex-column gap-2"></div>
        </div>
      </div>
    </div>
    <aside class="col-lg-4">
      <div class="be-card p-4 sticky-top" style="border-radius:1rem; top:5rem;">
        <h6 class="font-bold mb-3">Booking summary</h6>
        <div id="sb-summary"></div>
        <hr class="border-t-be">
        <div class="d-flex justify-content-between font-extrabold text-xl"><span>Total</span><span class="text-gradient" id="sb-total">₹0</span></div>
        <button id="sb-go" class="btn-be btn-primary-grad w-100 mt-3" style="height:3rem;" disabled>Continue →</button>
        <a href="offers.html" class="d-block text-center text-xs text-primary mt-3 font-semibold">Have a coupon? Apply on next page</a>
      </div>
    </aside>
  </div>
</section>
` + FOOT(`
<script>
document.addEventListener('DOMContentLoaded', ()=>{
  const from=BE.qs('from','Mumbai'), to=BE.qs('to','Pune'), date=BE.qs('date',''), busId=BE.qs('busId','');
  const buses = BE.generateBuses(from,to);
  const bus = buses.find(b=>b.id===busId) || buses[0];

  const total = bus.totalSeats; const seats=[]; const booked=new Set(); const ladies=new Set(); const premium=new Set();
  const rows = Math.ceil(total/4); let idx=0;
  for (let r=1;r<=rows;r++){
    for (const c of ['A','B','C','D']){
      if (seats.length<total){
        const s = r+c; seats.push(s);
        if ((idx*7 + bus.id.length) % 5 === 0) booked.add(s);
        else if (idx % 11 === 3) ladies.add(s);
        else if (r<=2) premium.add(s);
        idx++;
      }
    }
  }

  let selected = [];
  const seatPrice = s => premium.has(s) ? bus.price+150 : bus.price;
  const sumTotal = ()=> selected.reduce((a,s)=>a+seatPrice(s),0);

  document.getElementById('sb-name').textContent = bus.name;
  document.getElementById('sb-meta').textContent = bus.type+' · '+from+' → '+to+' · '+date;
  document.getElementById('sb-dep').textContent = bus.departure;

  document.getElementById('sb-legend').innerHTML = [
    ['Available','background:hsl(var(--card));border:2px solid hsl(var(--border));'],
    ['Booked','background:hsl(var(--muted));'],
    ['Selected','background:var(--gradient-primary);'],
    ['Ladies','background:rgba(244,114,182,.15);border:2px solid #f472b6;'],
    ['Premium (+₹150)','background:rgba(251,191,36,.15);border:2px solid #fbbf24;']
  ].map(([t,s])=>\`<span class="d-inline-flex align-items-center gap-1"><span style="display:inline-block;width:1.25rem;height:.75rem;border-radius:.25rem;\${s}"></span>\${t}</span>\`).join('');

  function seatBtn(s){
    if (!s) return '<div></div>';
    const isBooked=booked.has(s), isSel=selected.includes(s), isLady=ladies.has(s), isPrem=premium.has(s);
    let style;
    if (isBooked) style='background:hsl(var(--muted));color:hsl(var(--muted-foreground));border:2px solid transparent;cursor:not-allowed;';
    else if (isSel) style='background:var(--gradient-primary);color:hsl(var(--primary-foreground));border:2px solid transparent;transform:scale(1.05);box-shadow:var(--shadow-elegant);';
    else if (isLady) style='border:2px solid #f472b6;background:rgba(244,114,182,.1);color:#be185d;';
    else if (isPrem) style='border:2px solid #fbbf24;background:rgba(251,191,36,.1);color:#92400e;';
    else style='border:2px solid hsl(var(--border));background:hsl(var(--card));';
    return \`<button \${isBooked?'disabled':''} data-seat="\${s}" class="position-relative rounded-lg font-bold text-xs transition-all" style="height:2.75rem;\${style}">\${isPrem&&!isBooked?'<span style="position:absolute;top:-.5rem;right:-.5rem;font-size:.6rem;">👑</span>':''}\${s}</button>\`;
  }

  function paint(){
    const grid = document.getElementById('sb-grid');
    let html = '';
    for (let r=0; r<rows; r++){
      const row = seats.slice(r*4, r*4+4);
      html += \`<div class="d-grid align-items-center" style="grid-template-columns:1fr 1fr 24px 1fr 1fr;gap:.5rem;">\${seatBtn(row[0])}\${seatBtn(row[1])}<div></div>\${seatBtn(row[2])}\${seatBtn(row[3])}</div>\`;
    }
    grid.innerHTML = html;
    grid.querySelectorAll('button[data-seat]').forEach(b => b.addEventListener('click', ()=>toggle(b.dataset.seat)));

    const t = sumTotal();
    document.getElementById('sb-summary').innerHTML = [
      ['Bus', bus.name],['Type', bus.type],['Date', date],
      ['Seats', selected.join(', ') || '—'],['Base price', '₹'+bus.price+'/seat']
    ].map(([k,v])=>\`<div class="d-flex justify-content-between text-sm py-1"><span class="text-muted">\${k}</span><span class="font-medium">\${v}</span></div>\`).join('');
    document.getElementById('sb-total').textContent = '₹'+t;
    const go = document.getElementById('sb-go'); go.disabled = !selected.length;
    go.onclick = ()=> { if (!selected.length) return;
      location.href='booking.html?busId='+encodeURIComponent(bus.id)+'&from='+encodeURIComponent(from)+'&to='+encodeURIComponent(to)+'&date='+date+'&seats='+selected.join(',')+'&total='+t; };
  }

  function toggle(s){
    if (booked.has(s)) return;
    if (selected.includes(s)) selected = selected.filter(x=>x!==s);
    else if (selected.length>=6) return toast.error('Max 6 seats per booking');
    else selected.push(s);
    paint();
  }

  paint();
});
</script>
`);
fs.writeFileSync(path.join(OUT,'seats.html'), SEATS);
console.log('wrote seats.html');

/* ============================== BOOKING ============================== */
const BOOKING = HEAD('Booking & payment', 'booking') + `
<section class="container py-4">
  <div class="row g-4">
    <div class="col-lg-8">
      <form id="bk-form" class="d-flex flex-column gap-3">
        <div class="be-card p-4" style="border-radius:1rem;">
          <h6 class="font-bold mb-3 d-flex align-items-center gap-2"><span class="text-primary">✓</span>Passenger details</h6>
          <div class="row g-3">
            <div class="col-sm-6"><label class="label-be">Full name</label><input id="bk-name" class="input-be mt-1" required></div>
            <div class="col-sm-6"><label class="label-be">Phone</label><input id="bk-phone" type="tel" class="input-be mt-1" required></div>
            <div class="col-12"><label class="label-be">Email</label><input id="bk-email" type="email" class="input-be mt-1" required></div>
          </div>
        </div>
        <div class="be-card p-4" style="border-radius:1rem;">
          <h6 class="font-bold mb-2 d-flex align-items-center gap-2"><span class="text-primary">🏷️</span>Apply coupon</h6>
          <p class="text-xs text-muted mb-2">Try <span class="font-mono font-bold">FIRST50</span>, <span class="font-mono font-bold">WEEKEND15</span></p>
          <div class="d-flex gap-2">
            <input id="bk-coupon" class="input-be font-mono" placeholder="Coupon code" style="text-transform:uppercase;">
            <button type="button" id="bk-apply" class="btn-be btn-outline-be">Apply</button>
          </div>
          <div id="bk-disc" class="mt-2 text-sm font-semibold" style="color:#059669; display:none;"></div>
        </div>
        <div class="be-card p-4" style="border-radius:1rem;">
          <h6 class="font-bold mb-3 d-flex align-items-center gap-2"><span style="color:#10b981;">🛡</span>Payment method</h6>
          <ul class="nav nav-tabs mb-3" role="tablist">
            <li class="nav-item"><button type="button" class="nav-link active" data-bs-toggle="tab" data-bs-target="#pay-upi">📱 UPI</button></li>
            <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="tab" data-bs-target="#pay-card">💳 Card</button></li>
            <li class="nav-item"><button type="button" class="nav-link" data-bs-toggle="tab" data-bs-target="#pay-net">🏦 Net Banking</button></li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane fade show active" id="pay-upi">
              <div class="row g-2">
                ${[['Google Pay','linear-gradient(135deg,#3b82f6,#10b981,#f59e0b)','G'],['PhonePe','linear-gradient(135deg,#4f46e5,#7e22ce)','P'],['Paytm','linear-gradient(135deg,#0ea5e9,#1d4ed8)','P'],['BHIM UPI','linear-gradient(135deg,#f97316,#059669)','B']].map(([n,g,e])=>`
                  <div class="col-6 col-sm-3"><button type="button" class="position-relative w-100 text-start text-white rounded-xl p-2 border-0 hover-lift transition-all" style="background:${g};box-shadow:var(--shadow-soft);">
                    <div class="size-8 rounded-lg grid-place font-extrabold" style="background:rgba(255,255,255,.2);backdrop-filter:blur(4px);">${e}</div>
                    <div class="mt-2 text-xs font-semibold">${n}</div>
                    <div style="font-size:.625rem;opacity:.8;">Tap to pay</div>
                  </button></div>`).join('')}
              </div>
              <div class="rounded-xl p-3 mt-3 border-dashed-be" style="background:hsl(var(--muted) / .3);">
                <label class="label-be">Or enter UPI ID</label>
                <div class="d-flex gap-2 mt-1"><input class="input-be font-mono" placeholder="yourname@upi"><button type="button" class="btn-be btn-outline-be">Verify</button></div>
                <p class="text-xs text-muted mt-2 mb-0" style="font-size:.6875rem;">🔒 Secured by 256-bit SSL · NPCI verified · Instant refund on failure</p>
              </div>
            </div>
            <div class="tab-pane fade" id="pay-card">
              <div class="d-flex flex-column gap-3">
                <div><label class="label-be">Card number</label><input class="input-be mt-1 font-mono" placeholder="1234 5678 9012 3456" inputmode="numeric" maxlength="19"></div>
                <div><label class="label-be">Name on card</label><input class="input-be mt-1" placeholder="As printed on card"></div>
                <div class="row g-2">
                  <div class="col-6"><label class="label-be">Expiry</label><input class="input-be mt-1 font-mono" placeholder="MM/YY" maxlength="5"></div>
                  <div class="col-6"><label class="label-be">CVV</label><input type="password" class="input-be mt-1 font-mono" maxlength="4"></div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pay-net">
              <label class="label-be">Select bank</label>
              <select class="input-be mt-1 h-10"><option>HDFC Bank</option><option>ICICI Bank</option><option>SBI</option><option>Axis Bank</option><option>Kotak</option></select>
            </div>
          </div>
        </div>
        <button id="bk-pay" type="submit" class="btn-be btn-primary-grad shadow-elegant" style="height:3.5rem;font-size:1.125rem;">Pay ₹0</button>
      </form>
    </div>
    <aside class="col-lg-4">
      <div class="be-card p-4 sticky-top" style="border-radius:1rem; top:5rem;">
        <h6 class="font-bold mb-2">Journey details</h6>
        <div id="bk-bus" class="font-bold">—</div>
        <div id="bk-type" class="text-sm text-muted">—</div>
        <hr class="border-t-be">
        <div class="d-flex justify-content-between align-items-center">
          <div><div class="font-extrabold font-mono" id="bk-dep">—</div><div class="text-xs text-muted" id="bk-from">—</div></div>
          <div class="text-muted">→</div>
          <div class="text-end"><div class="font-extrabold font-mono" id="bk-arr">—</div><div class="text-xs text-muted" id="bk-to">—</div></div>
        </div>
        <div class="text-xs text-muted mt-1" id="bk-date"></div>
        <hr class="border-t-be">
        <div id="bk-rows"></div>
        <hr class="border-t-be">
        <div class="d-flex justify-content-between font-extrabold text-xl"><span>Total</span><span class="text-gradient" id="bk-grand">₹0</span></div>
      </div>
    </aside>
  </div>
</section>
` + FOOT(`
<script>
document.addEventListener('DOMContentLoaded', ()=>{
  const from=BE.qs('from',''), to=BE.qs('to',''), date=BE.qs('date',''), busId=BE.qs('busId','');
  const seats = (BE.qs('seats','')||'').split(',').filter(Boolean);
  const baseTotal = +BE.qs('total','0');
  const km = +BE.qs('km','0');
  const isCharter = BE.qs('kind','')==='charter';
  const fleet = BE.qs('fleet','');
  const buses = BE.generateBuses(from||'Mumbai', to||'Pune');
  const bus = buses.find(b=>b.id===busId) || buses[0];

  const u = BE.Auth.current();
  if (u){ document.getElementById('bk-name').value=u.name; document.getElementById('bk-email').value=u.email; }

  let discount = 0;
  function paint(){
    const total = Math.max(0, baseTotal-discount);
    const tax = Math.round(total*0.05);
    const grand = total+tax;
    document.getElementById('bk-bus').textContent = isCharter? fleet+' (Whole bus)' : bus.name;
    document.getElementById('bk-type').textContent = isCharter ? 'Private Charter' : bus.type;
    document.getElementById('bk-dep').textContent = isCharter?'—':bus.departure;
    document.getElementById('bk-arr').textContent = isCharter?'—':bus.arrival;
    document.getElementById('bk-from').textContent = from;
    document.getElementById('bk-to').textContent = to;
    document.getElementById('bk-date').textContent = date + (isCharter && km ? ' · '+km+' km' : '');

    const rows = [
      [isCharter?'Charter fare':('Seats ('+seats.length+')'), '₹'+baseTotal, ''],
      ...(discount>0 ? [['Discount','-₹'+discount,'color:#059669;']] : []),
      ['Taxes & fees', '₹'+tax, '']
    ];
    document.getElementById('bk-rows').innerHTML = rows.map(([k,v,s])=>\`<div class="d-flex justify-content-between text-sm py-1" style="\${s}"><span class="text-muted">\${k}</span><span class="font-medium">\${v}</span></div>\`).join('');
    document.getElementById('bk-grand').textContent = '₹'+grand;
    document.getElementById('bk-pay').textContent = 'Pay ₹'+grand;
    return grand;
  }
  paint();

  document.getElementById('bk-apply').addEventListener('click', ()=>{
    const code = document.getElementById('bk-coupon').value.trim().toUpperCase();
    const o = BE.OffersStore.all().find(x=>x.code.toUpperCase()===code);
    if (!o){ discount=0; paint(); document.getElementById('bk-disc').style.display='none'; return toast.error('Invalid coupon'); }
    const d = Math.min(Math.round(baseTotal * ((o.percent||20)/100)), o.maxOff||500);
    discount = d; paint();
    const el = document.getElementById('bk-disc'); el.style.display='block'; el.textContent='✓ ₹'+d+' discount applied'; toast.success(o.title+' applied! ₹'+d+' off');
  });

  document.getElementById('bk-form').addEventListener('submit', e=>{
    e.preventDefault();
    if (!BE.Auth.current()){ toast.error('Please login to continue'); openAuth('login'); return; }
    const grand = paint();
    const btn = document.getElementById('bk-pay'); btn.disabled=true; btn.textContent='Processing securely...';
    setTimeout(()=>{
      const booking = BE.Bookings.add({
        busName: isCharter ? (fleet+' (Charter)') : bus.name,
        busType: isCharter ? 'Private Charter' : bus.type,
        from, to, date,
        departure: isCharter?'Custom':bus.departure,
        arrival: isCharter?'Custom':bus.arrival,
        seats: isCharter ? ['Whole bus'] : seats,
        total: grand,
        passenger: { name: document.getElementById('bk-name').value, phone: document.getElementById('bk-phone').value, email: document.getElementById('bk-email').value },
        kind: isCharter ? 'charter' : 'seat',
        km: isCharter ? km : undefined,
      });
      location.href = 'confirmation.html?id='+booking.id;
    }, 1500);
  });
});
</script>
`);
fs.writeFileSync(path.join(OUT,'booking.html'), BOOKING);
console.log('wrote booking.html');

/* ============================== CONFIRMATION ============================== */
const CONFIRM = HEAD('Booking confirmed', 'confirmation') + `
<section class="container py-5" id="cf-empty" style="display:none;">
  <div class="text-center py-5"><p class="text-muted">Booking not found.</p><a href="index.html" class="btn-be btn-primary-grad mt-3">Go home</a></div>
</section>
<section class="container py-5" id="cf-main">
  <div class="text-center mb-4 animate-fade-up">
    <div class="size-20 mx-auto rounded-pill grid-place mb-3" style="background:rgba(16,185,129,.1);"><span style="font-size:3rem;color:#10b981;">✓</span></div>
    <h2 class="text-4xl font-extrabold">Booking Confirmed!</h2>
    <p class="text-muted mt-2">Your e-ticket has been sent to <span id="cf-email"></span></p>
  </div>
  <div class="mx-auto animate-fade-up" style="max-width:42rem; animation-delay:.1s;">
    <div class="be-card overflow-hidden shadow-elegant" style="border-radius:1.5rem;">
      <div class="bg-gradient-primary p-4 d-flex justify-content-between align-items-center" style="color:hsl(var(--primary-foreground));">
        <div>
          <div class="text-xs uppercase tracking-widest" style="opacity:.8;">E-Ticket</div>
          <div class="text-2xl font-extrabold" id="cf-bus">—</div>
          <div class="text-sm" style="opacity:.9;" id="cf-type">—</div>
        </div>
        <div class="text-end">
          <div class="text-xs" style="opacity:.8;">PNR</div>
          <div class="text-2xl font-extrabold font-mono" id="cf-pnr">—</div>
        </div>
      </div>
      <div class="p-4">
        <div class="d-flex align-items-center justify-content-between gap-3">
          <div><div class="text-3xl font-extrabold font-mono" id="cf-dep">—</div><div class="text-muted text-sm mt-1">📍 <span id="cf-from"></span></div></div>
          <span class="text-primary" style="font-size:2rem;">→</span>
          <div class="text-end"><div class="text-3xl font-extrabold font-mono" id="cf-arr">—</div><div class="text-muted text-sm mt-1">📍 <span id="cf-to"></span></div></div>
        </div>
        <div class="position-relative my-4" style="border-top:1px dashed hsl(var(--border));">
          <div class="position-absolute" style="left:-2rem;top:-.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:hsl(var(--background));border:1px solid hsl(var(--border));"></div>
          <div class="position-absolute" style="right:-2rem;top:-.75rem;width:1.5rem;height:1.5rem;border-radius:50%;background:hsl(var(--background));border:1px solid hsl(var(--border));"></div>
        </div>
        <div class="row g-3 text-sm" id="cf-details"></div>
        <hr class="border-t-be mt-4">
        <div class="d-flex justify-content-between align-items-center"><span class="font-medium">Amount paid</span><span class="text-2xl font-extrabold text-gradient" id="cf-amt">₹0</span></div>
      </div>
    </div>
    <div class="d-flex gap-2 justify-content-center mt-4 flex-wrap">
      <button class="btn-be btn-outline-be" onclick="window.print()">⬇ Save ticket</button>
      <a href="my-trips.html" class="btn-be btn-outline-be">My trips</a>
      <a href="index.html" class="btn-be btn-primary-grad">Book another</a>
    </div>
  </div>
</section>
` + FOOT(`
<script>
document.addEventListener('DOMContentLoaded', ()=>{
  const id = BE.qs('id','');
  const b = BE.Bookings.find(id);
  if (!b){ document.getElementById('cf-empty').style.display='block'; document.getElementById('cf-main').style.display='none'; return; }
  document.getElementById('cf-email').textContent = b.passenger.email;
  document.getElementById('cf-bus').textContent = b.busName;
  document.getElementById('cf-type').textContent = b.busType;
  document.getElementById('cf-pnr').textContent = b.id;
  document.getElementById('cf-dep').textContent = b.departure;
  document.getElementById('cf-arr').textContent = b.arrival;
  document.getElementById('cf-from').textContent = b.from;
  document.getElementById('cf-to').textContent = b.to;
  document.getElementById('cf-amt').textContent = '₹'+b.total;
  const cells = [['Date',b.date],['Seats', b.seats.join(', ')],['Passenger', b.passenger.name],['Phone', b.passenger.phone]];
  if (b.km) cells.push(['Distance', b.km+' km']);
  document.getElementById('cf-details').innerHTML = cells.map(([k,v])=>\`<div class="col-sm-6"><div class="text-xs uppercase text-muted tracking-widest">\${k}</div><div class="font-semibold">\${v}</div></div>\`).join('');
});
</script>
`);
fs.writeFileSync(path.join(OUT,'confirmation.html'), CONFIRM);
console.log('wrote confirmation.html');

/* ============================== MY TRIPS ============================== */
const MYTRIPS = HEAD('My Trips', 'my-trips') + `
<section class="container py-4">
  <div class="d-flex align-items-end justify-content-between mb-4 flex-wrap gap-2">
    <div>
      <div class="text-sm font-mono text-primary mb-2">// JOURNEYS</div>
      <h2 class="text-4xl font-extrabold m-0">My Trips</h2>
    </div>
    <span class="text-sm text-muted" id="mt-count">0 total</span>
  </div>
  <div id="mt-list"></div>
</section>
` + FOOT(`
<script>
function renderTrips(){
  const list = BE.Bookings.all();
  document.getElementById('mt-count').textContent = list.length+' total';
  const host = document.getElementById('mt-list');
  if (!list.length){
    host.innerHTML = \`<div class="be-card p-5 text-center" style="border-radius:1.5rem;">
      <div style="font-size:4rem;color:hsl(var(--muted-foreground));">🧳</div>
      <p class="text-lg font-semibold mt-3 mb-1">No trips yet</p>
      <p class="text-sm text-muted">Your future adventures will live here.</p>
      <a href="index.html" class="btn-be btn-primary-grad mt-3">Book your first trip</a>
    </div>\`;
    return;
  }
  host.innerHTML = '<div class="d-flex flex-column gap-3">'+list.map(b=>\`
    <div class="be-card p-4" style="border-radius:1rem;">
      <div class="d-flex justify-content-between flex-wrap gap-2">
        <div>
          <div class="d-flex align-items-center gap-2 flex-wrap">
            <h6 class="font-extrabold text-lg m-0">\${b.busName}</h6>
            <span class="text-xs px-2 py-0 rounded-pill font-semibold" style="\${b.status==='confirmed'?'background:rgba(16,185,129,.1);color:#059669;':'background:hsl(var(--muted));color:hsl(var(--muted-foreground));'}">\${b.status}</span>
            \${b.kind==='charter'?'<span class="text-xs px-2 py-0 rounded-pill font-semibold" style="background:rgba(124,58,237,.1);color:#7c3aed;">Charter</span>':''}
          </div>
          <div class="text-sm text-muted">\${b.busType} · PNR <span class="font-mono">\${b.id}</span></div>
        </div>
        <div class="text-end">
          <div class="text-xl font-extrabold text-gradient">₹\${b.total}</div>
          <div class="text-xs text-muted">\${b.seats.length} seat(s)</div>
        </div>
      </div>
      <hr class="border-t-be">
      <div class="d-flex justify-content-between flex-wrap text-sm gap-2">
        <div><strong>\${b.from}</strong> → <strong>\${b.to}</strong></div>
        <div class="text-muted font-mono">\${b.date} · \${b.departure} - \${b.arrival}</div>
      </div>
      <div class="d-flex gap-2 mt-3">
        <a class="btn-be btn-outline-be" style="font-size:.8rem;padding:.4rem .7rem;" href="confirmation.html?id=\${b.id}">👁 View ticket</a>
        \${b.status==='confirmed' ? \`<button class="btn-be btn-outline-be" style="font-size:.8rem;padding:.4rem .7rem;" onclick="cancelTrip('\${b.id}')">🗑 Cancel</button>\` : ''}
      </div>
    </div>\`).join('')+'</div>';
}
window.cancelTrip = function(id){
  if (!confirm('Cancel this booking?')) return;
  BE.Bookings.cancel(id); toast.success('Booking cancelled'); renderTrips();
};
document.addEventListener('DOMContentLoaded', renderTrips);
</script>
`);
fs.writeFileSync(path.join(OUT,'my-trips.html'), MYTRIPS);
console.log('wrote my-trips.html');

/* ============================== CHARTER ============================== */
const CHARTER = HEAD('Charter a bus', 'charter') + `
<section class="position-relative bg-gradient-hero text-white py-5 overflow-hidden" style="padding-top:4rem !important; padding-bottom:4rem !important;">
  <div style="position:absolute; inset:0; opacity:.6;" class="bg-mesh"></div>
  <div class="container position-relative">
    <div class="d-inline-flex align-items-center gap-2 px-3 py-1 rounded-pill mb-3" style="background:rgba(255,255,255,.1); backdrop-filter:blur(8px); border:1px solid rgba(255,255,255,.2); font-size:.85rem;">${ic.sparkles}<span>CHARTER · BOOK THE WHOLE BUS</span></div>
    <h1 class="text-5xl font-extrabold" style="font-size:clamp(2.5rem,5vw,4rem); line-height:1.1; max-width:48rem;">Your bus. <span class="text-gradient">Your route.</span> Your call.</h1>
    <p class="mt-3 text-lg" style="color:rgba(255,255,255,.85); max-width:36rem;">Weddings, corporate offsites, school trips, cricket teams — pick your fleet, set kilometres, see transparent pricing.</p>
  </div>
</section>

<section class="container position-relative pb-5" style="margin-top:-3rem;">
  <div class="row g-4">
    <div class="col-lg-8">
      <div class="d-flex flex-column gap-3">
        <div class="be-card p-4" style="border-radius:1.5rem;">
          <h3 class="font-extrabold text-xl mb-3">Trip details</h3>
          <ul class="nav nav-tabs mb-4" role="tablist">
            <li class="nav-item"><button type="button" class="nav-link active ch-trip" data-trip="oneway">One-way</button></li>
            <li class="nav-item"><button type="button" class="nav-link ch-trip" data-trip="round">Round trip</button></li>
            <li class="nav-item"><button type="button" class="nav-link ch-trip" data-trip="multi">Multi-day tour</button></li>
          </ul>
          <div class="row g-3">
            <div class="col-sm-6"><label class="label-be tiny">📍 PICKUP</label><input id="ch-pickup" class="input-be h-12 mt-1" value="Mumbai"></div>
            <div class="col-sm-6"><label class="label-be tiny">📍 DROP</label><input id="ch-drop" class="input-be h-12 mt-1" value="Goa"></div>
            <div class="col-sm-6"><label class="label-be tiny">📅 START DATE</label><input id="ch-date" class="input-be h-12 mt-1" placeholder="Pick date"></div>
            <div class="col-sm-6" id="ch-days-wrap" style="display:none;">
              <label class="label-be tiny">DURATION: <span id="ch-days-v">1</span> day</label>
              <input id="ch-days" type="range" min="1" max="14" step="1" value="1" class="form-range mt-3">
            </div>
          </div>
          <div class="mt-4">
            <div class="d-flex align-items-center justify-content-between">
              <label class="font-semibold d-flex align-items-center gap-1">⛽ Estimated distance: <span class="text-primary font-extrabold ms-1" id="ch-km-v">550</span> km</label>
              <span class="text-xs text-muted" id="ch-km-note">one-way</span>
            </div>
            <input id="ch-km" type="range" min="50" max="2000" step="25" value="550" class="form-range mt-3">
            <div class="d-flex justify-content-between text-xs text-muted mt-1 font-mono"><span>50 km</span><span>500 km</span><span>1000 km</span><span>2000 km</span></div>
          </div>
        </div>

        <div class="be-card p-4" style="border-radius:1.5rem;">
          <h3 class="font-extrabold text-xl mb-3">Choose your fleet</h3>
          <div class="row g-3" id="ch-fleet"></div>
        </div>

        <div class="be-card p-4" style="border-radius:1.5rem;">
          <h3 class="font-extrabold text-xl mb-3">Add-ons</h3>
          <div class="row g-2" id="ch-extras"></div>
        </div>
      </div>
    </div>
    <aside class="col-lg-4">
      <div class="be-card p-4 sticky-top shadow-soft" style="border-radius:1.5rem; top:5rem; background:var(--gradient-card);">
        <h3 class="font-extrabold text-xl m-0">Charter quote</h3>
        <p class="text-xs text-muted mb-3">Live, transparent pricing</p>
        <div id="ch-rows" class="d-flex flex-column gap-1 text-sm"></div>
        <hr class="border-t-be">
        <div class="d-flex justify-content-between align-items-baseline">
          <span class="text-sm font-semibold">Total</span>
          <span class="text-3xl font-extrabold text-gradient" id="ch-total">₹0</span>
        </div>
        <div class="text-xs text-muted text-end mt-1" id="ch-pp">—</div>
        <button id="ch-go" class="btn-be btn-primary-grad w-100 mt-3 shadow-elegant" style="height:3rem;">Reserve now →</button>
        <p class="text-xs text-muted text-center mt-2" style="font-size:.625rem;">Free cancellation up to 48h before pickup</p>
        <hr class="border-t-be mt-3">
        <div class="text-xs font-semibold text-muted uppercase tracking-widest mb-2">Fleet includes</div>
        <div id="ch-feats" class="d-flex flex-column gap-1 text-sm"></div>
      </div>
    </aside>
  </div>
</section>
` + FOOT(`
<script>
document.addEventListener('DOMContentLoaded', ()=>{
  const extras = [
    {id:'driver',label:'Extra driver (long trips)',price:1500},
    {id:'decor',label:'Wedding/event decor',price:3500},
    {id:'meals',label:'Onboard meals',price:2200},
    {id:'host',label:'Tour host/guide',price:2800},
  ];
  const state = { trip:'oneway', km:550, days:1, fleet:BE.BUS_FLEET[1].id, extras:[], date:null };

  attachCitySuggest(document.getElementById('ch-pickup'));
  attachCitySuggest(document.getElementById('ch-drop'));
  const fp = flatpickr('#ch-date', { minDate:'today', defaultDate: BE.addDays(new Date(),7), dateFormat:'Y-m-d', altInput:true, altFormat:'F j, Y', onChange:([d])=>{ state.date=d; paint(); } });
  state.date = BE.addDays(new Date(),7);

  document.querySelectorAll('.ch-trip').forEach(b=> b.addEventListener('click', ()=>{
    document.querySelectorAll('.ch-trip').forEach(x=>x.classList.remove('active'));
    b.classList.add('active'); state.trip = b.dataset.trip;
    document.getElementById('ch-days-wrap').style.display = state.trip==='multi'?'block':'none';
    paint();
  }));
  document.getElementById('ch-km').addEventListener('input', e=>{ state.km=+e.target.value; paint(); });
  document.getElementById('ch-days').addEventListener('input', e=>{ state.days=+e.target.value; document.getElementById('ch-days-v').textContent=e.target.value; paint(); });

  function paintFleet(){
    document.getElementById('ch-fleet').innerHTML = BE.BUS_FLEET.map(f=>{
      const sel = f.id===state.fleet;
      return \`<div class="col-sm-6"><button data-fleet="\${f.id}" class="ch-flt w-100 text-start p-3 transition-all hover-lift" style="border-radius:1rem; border:2px solid \${sel?'hsl(var(--primary))':'hsl(var(--border))'}; background:\${sel?'hsl(var(--primary) / .05)':'hsl(var(--card))'}; \${sel?'box-shadow:var(--shadow-elegant);':''}">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <span style="font-size:1.5rem; color:\${sel?'hsl(var(--primary))':'hsl(var(--muted-foreground))'};">🚌</span>
          <div class="text-xs px-2 py-1 rounded-pill font-mono" style="background:hsl(var(--muted));">\${f.capacity} seats</div>
        </div>
        <div class="font-extrabold text-lg">\${f.name}</div>
        <div class="text-sm text-muted mt-1">₹\${f.perKm}/km · ₹\${f.base.toLocaleString()} base</div>
        <div class="d-flex flex-wrap gap-1 mt-2">\${f.features.slice(0,3).map(x=>\`<span style="font-size:.625rem;background:hsl(var(--muted));padding:.1rem .4rem;border-radius:.25rem;">\${x}</span>\`).join('')}</div>
      </button></div>\`;
    }).join('');
    document.querySelectorAll('.ch-flt').forEach(b=> b.addEventListener('click', ()=>{ state.fleet=b.dataset.fleet; paintFleet(); paint(); }));
  }
  function paintExtras(){
    document.getElementById('ch-extras').innerHTML = extras.map(e=>{
      const on = state.extras.includes(e.id);
      return \`<div class="col-sm-6"><button data-x="\${e.id}" class="ch-x w-100 text-start p-3 transition-all" style="border-radius:.75rem; border:2px solid \${on?'hsl(var(--primary))':'hsl(var(--border))'}; background:\${on?'hsl(var(--primary) / .05)':'hsl(var(--card))'};">
        <div class="d-flex justify-content-between gap-2"><span class="font-semibold text-sm">\${e.label}</span><span class="text-sm font-mono font-bold text-primary">+₹\${e.price}</span></div>
      </button></div>\`;
    }).join('');
    document.querySelectorAll('.ch-x').forEach(b=> b.addEventListener('click', ()=>{
      const id=b.dataset.x;
      state.extras = state.extras.includes(id) ? state.extras.filter(x=>x!==id) : state.extras.concat(id);
      paintExtras(); paint();
    }));
  }
  paintFleet(); paintExtras();

  function paint(){
    const f = BE.BUS_FLEET.find(x=>x.id===state.fleet);
    const distance = state.km * (state.trip==='round'?2:1);
    const fleetCost = f.base + f.perKm*distance;
    const dayCost = (state.days-1)*4000;
    const extraCost = state.extras.reduce((s,id)=> s + (extras.find(e=>e.id===id)?.price||0), 0);
    const subtotal = fleetCost + dayCost + extraCost;
    const tax = Math.round(subtotal*0.05);
    const total = subtotal+tax;

    document.getElementById('ch-km-v').textContent = state.km;
    document.getElementById('ch-km-note').textContent = state.trip==='round' ? 'Total '+distance+' km' : 'one-way';

    const rows = [
      [f.name, '₹'+f.base.toLocaleString()],
      [distance+' km × ₹'+f.perKm, '₹'+(f.perKm*distance).toLocaleString()],
      ...(dayCost>0 ? [[(state.days-1)+' extra day(s)', '₹'+dayCost.toLocaleString()]] : []),
      ...(extraCost>0 ? [['Add-ons','₹'+extraCost.toLocaleString()]] : []),
      ['Taxes (5% GST)', '₹'+tax.toLocaleString()]
    ];
    document.getElementById('ch-rows').innerHTML = rows.map(([k,v])=>\`<div class="d-flex justify-content-between"><span class="text-muted">\${k}</span><span class="font-medium font-mono">\${v}</span></div>\`).join('');
    document.getElementById('ch-total').textContent = '₹'+total.toLocaleString();
    document.getElementById('ch-pp').textContent = '≈ ₹'+Math.round(total/f.capacity)+' per person';
    document.getElementById('ch-feats').innerHTML = f.features.map(x=>\`<div class="d-flex align-items-center gap-2"><span class="text-primary">✓</span>\${x}</div>\`).join('');
    return { total, distance, fleet:f };
  }
  paint();

  document.getElementById('ch-go').addEventListener('click', ()=>{
    const p = document.getElementById('ch-pickup').value, d = document.getElementById('ch-drop').value;
    if (!p || !d || !state.date) return toast.error('Fill all fields');
    const { total, distance, fleet } = paint();
    location.href = 'booking.html?kind=charter&from='+encodeURIComponent(p)+'&to='+encodeURIComponent(d)+'&date='+BE.fmtISO(state.date)+'&km='+distance+'&total='+total+'&fleet='+encodeURIComponent(fleet.name);
  });
});
</script>
`);
fs.writeFileSync(path.join(OUT,'charter.html'), CHARTER);
console.log('wrote charter.html');

/* ============================== ADMIN ============================== */
const ADMIN = HEAD('Admin · Control center', 'admin') + `
<section id="adm-gate" class="d-flex align-items-center justify-content-center px-3" style="min-height:70vh;">
  <div class="be-card p-4 shadow-elegant" style="border-radius:1.5rem; max-width:28rem; width:100%;">
    <div class="size-14 rounded-2xl grid-place mb-3 shadow-elegant" style="background:var(--gradient-primary); color:hsl(var(--primary-foreground)); font-size:1.5rem;">🔒</div>
    <h1 class="text-2xl font-extrabold mb-1">Admin access</h1>
    <p class="text-sm text-muted mb-3">Enter the admin PIN to manage the platform.</p>
    <input id="adm-pin" type="password" placeholder="•••• PIN" class="input-be font-mono" style="height:3rem; font-size:1.125rem;">
    <p class="text-xs text-muted mt-2">Hint: <span class="font-mono font-bold">2468</span></p>
    <button id="adm-go" class="btn-be btn-primary-grad w-100 mt-3" style="height:2.75rem;">Enter dashboard</button>
  </div>
</section>

<section id="adm-main" class="container py-4" style="display:none;">
  <div class="d-flex align-items-center justify-content-between mb-4 flex-wrap gap-2">
    <div>
      <span class="d-inline-flex align-items-center gap-1 px-2 py-1 rounded-pill text-xs font-semibold mb-2 border-be">🛡 Admin</span>
      <h1 class="text-4xl font-extrabold m-0">Control center</h1>
      <p class="text-muted m-0">Manage coupons, buses, users and bookings.</p>
    </div>
    <button id="adm-out" class="btn-be btn-outline-be">Logout</button>
  </div>

  <div class="row g-3" id="adm-stats"></div>

  <ul class="nav nav-tabs mt-4" role="tablist">
    <li class="nav-item"><button class="nav-link active" data-bs-toggle="tab" data-bs-target="#adm-coup">🏷 Coupons</button></li>
    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#adm-bus">🚌 Buses</button></li>
    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#adm-usr">👥 Users</button></li>
    <li class="nav-item"><button class="nav-link" data-bs-toggle="tab" data-bs-target="#adm-bk">🎫 Bookings</button></li>
  </ul>
  <div class="tab-content pt-4">
    <div class="tab-pane fade show active" id="adm-coup"></div>
    <div class="tab-pane fade" id="adm-bus"></div>
    <div class="tab-pane fade" id="adm-usr"></div>
    <div class="tab-pane fade" id="adm-bk"></div>
  </div>
</section>
` + FOOT(`
<script>
const ADMIN_PIN = '2468';
function showMain(){
  document.getElementById('adm-gate').style.display='none';
  document.getElementById('adm-main').style.display='block';
  paintStats(); paintCoupons(); paintBuses(); paintUsers(); paintBookings();
}
document.addEventListener('DOMContentLoaded', ()=>{
  if (sessionStorage.getItem('be_admin')==='1') showMain();
  document.getElementById('adm-go').addEventListener('click', ()=>{
    if (document.getElementById('adm-pin').value === ADMIN_PIN){
      sessionStorage.setItem('be_admin','1'); toast.success('Welcome, admin'); showMain();
    } else toast.error('Wrong PIN');
  });
  document.getElementById('adm-pin').addEventListener('keydown', e=>{ if (e.key==='Enter') document.getElementById('adm-go').click(); });
  document.getElementById('adm-out').addEventListener('click', ()=>{
    sessionStorage.removeItem('be_admin');
    document.getElementById('adm-main').style.display='none';
    document.getElementById('adm-gate').style.display='flex';
    document.getElementById('adm-pin').value='';
  });
});

function paintStats(){
  const stats = [
    { label:'Total bookings', value: BE.Bookings.all().length, c:'linear-gradient(135deg,#f43f5e,#f97316)' },
    { label:'Active coupons', value: BE.OffersStore.all().length, c:'linear-gradient(135deg,#8b5cf6,#d946ef)' },
    { label:'Custom buses', value: BE.BusStore.all().length, c:'linear-gradient(135deg,#0ea5e9,#6366f1)' },
    { label:'Registered users', value: BE.Users.all().length, c:'linear-gradient(135deg,#10b981,#14b8a6)' },
  ];
  document.getElementById('adm-stats').innerHTML = stats.map(s=>\`<div class="col-6 col-md-3"><div class="rounded-2xl p-3 text-white shadow-soft" style="background:\${s.c};"><div class="text-3xl font-extrabold">\${s.value}</div><div class="text-xs" style="opacity:.9;">\${s.label}</div></div></div>\`).join('');
}

let coup = { code:'',title:'',desc:'',color:'grad-rose-orange',icon:'🎟️',percent:10,maxOff:200 };
function paintCoupons(){
  const host = document.getElementById('adm-coup');
  const list = BE.OffersStore.all();
  host.innerHTML = \`
    <div class="row g-3">
      <div class="col-lg-4">
        <div class="be-card p-4" style="border-radius:1rem;">
          <h6 class="font-bold mb-3">+ New coupon</h6>
          <div class="d-flex flex-column gap-2">
            <div><label class="label-be">Code</label><input id="cp-code" class="input-be mt-1 font-mono" style="text-transform:uppercase;" value="\${coup.code}" placeholder="SAVE20"></div>
            <div><label class="label-be">Title</label><input id="cp-title" class="input-be mt-1" value="\${coup.title}" placeholder="20% OFF"></div>
            <div><label class="label-be">Description</label><input id="cp-desc" class="input-be mt-1" value="\${coup.desc}" placeholder="Limited time"></div>
            <div class="row g-2">
              <div class="col-6"><label class="label-be">% Off</label><input id="cp-pct" type="number" class="input-be mt-1" value="\${coup.percent}"></div>
              <div class="col-6"><label class="label-be">Max ₹</label><input id="cp-max" type="number" class="input-be mt-1" value="\${coup.maxOff}"></div>
            </div>
            <div><label class="label-be">Icon (emoji)</label><input id="cp-icon" class="input-be mt-1" value="\${coup.icon}"></div>
            <button id="cp-add" class="btn-be btn-primary-grad w-100">Add coupon</button>
            <button id="cp-reset" class="btn-be btn-outline-be w-100">Reset to defaults</button>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="d-flex flex-column gap-2">
          \${list.map(o=>\`<div class="rounded-2xl p-3 d-flex align-items-center gap-3 text-white \${o.color}">
            <div style="font-size:2rem;">\${o.icon}</div>
            <div class="flex-grow-1">
              <div class="font-bold">\${o.title} <span class="font-mono text-xs ms-2" style="opacity:.9;">\${o.code}</span></div>
              <div class="text-xs" style="opacity:.9;">\${o.desc}</div>
              <div class="text-xs mt-1" style="opacity:.8;">\${o.percent}% off · max ₹\${o.maxOff}</div>
            </div>
            <button data-rm="\${o.code}" class="cp-rm btn border-0 text-white" style="background:rgba(255,255,255,.1);">🗑</button>
          </div>\`).join('')}
        </div>
      </div>
    </div>\`;
  document.getElementById('cp-add').addEventListener('click', ()=>{
    const f = { code:document.getElementById('cp-code').value.trim().toUpperCase(), title:document.getElementById('cp-title').value.trim(),
      desc:document.getElementById('cp-desc').value.trim(), color:'grad-rose-orange', icon:document.getElementById('cp-icon').value||'🎟️',
      percent:+document.getElementById('cp-pct').value, maxOff:+document.getElementById('cp-max').value };
    if (!f.code || !f.title) return toast.error('Code and title required');
    if (BE.OffersStore.all().find(o=>o.code===f.code)) return toast.error('Code exists');
    BE.OffersStore.add(f); toast.success('Coupon added'); coup={code:'',title:'',desc:'',color:'grad-rose-orange',icon:'🎟️',percent:10,maxOff:200}; paintStats(); paintCoupons();
  });
  document.getElementById('cp-reset').addEventListener('click', ()=>{ BE.OffersStore.reset(); toast.success('Reset to defaults'); paintStats(); paintCoupons(); });
  host.querySelectorAll('.cp-rm').forEach(b=>b.addEventListener('click', ()=>{ BE.OffersStore.remove(b.dataset.rm); toast.success('Removed'); paintStats(); paintCoupons(); }));
}

let busF = { name:'', type:'AC Sleeper', from:'Mumbai', to:'Pune', price:599, departure:'22:00', arrival:'04:00' };
function paintBuses(){
  const host = document.getElementById('adm-bus');
  const list = BE.BusStore.all();
  const cityOpts = BE.CITIES.map(c=>\`<option>\${c}</option>\`).join('');
  host.innerHTML = \`
    <div class="row g-3">
      <div class="col-lg-4">
        <div class="be-card p-4" style="border-radius:1rem;">
          <h6 class="font-bold mb-3">+ Add bus</h6>
          <div class="d-flex flex-column gap-2">
            <div><label class="label-be">Operator</label><input id="bs-name" class="input-be mt-1" placeholder="My Travels"></div>
            <div><label class="label-be">Type</label><input id="bs-type" class="input-be mt-1" value="\${busF.type}"></div>
            <div class="row g-2">
              <div class="col-6"><label class="label-be">From</label><select id="bs-from" class="input-be mt-1 h-10">\${cityOpts}</select></div>
              <div class="col-6"><label class="label-be">To</label><select id="bs-to" class="input-be mt-1 h-10">\${cityOpts}</select></div>
            </div>
            <div class="row g-2">
              <div class="col-4"><label class="label-be">₹</label><input id="bs-pr" type="number" class="input-be mt-1" value="\${busF.price}"></div>
              <div class="col-4"><label class="label-be">Dep</label><input id="bs-dep" class="input-be mt-1 font-mono" value="\${busF.departure}"></div>
              <div class="col-4"><label class="label-be">Arr</label><input id="bs-arr" class="input-be mt-1 font-mono" value="\${busF.arrival}"></div>
            </div>
            <button id="bs-add" class="btn-be btn-primary-grad w-100">Add bus</button>
          </div>
        </div>
      </div>
      <div class="col-lg-8">
        <div class="d-flex flex-column gap-2">
          \${list.length ? list.map(b=>\`<div class="be-card p-3 d-flex align-items-center gap-3" style="border-radius:1rem;">
            <div class="size-10 rounded-xl grid-place" style="background:var(--gradient-primary);color:hsl(var(--primary-foreground));">🚌</div>
            <div class="flex-grow-1">
              <div class="font-bold">\${b.name} <span class="text-xs text-muted font-normal">· \${b.type}</span></div>
              <div class="text-xs text-muted">\${b.from} → \${b.to} · \${b.departure}–\${b.arrival} · ₹\${b.price}</div>
            </div>
            <button data-rm="\${b.id}" class="bs-rm btn-be btn-ghost-be">🗑</button>
          </div>\`).join('') : '<div class="text-sm text-muted be-card border-dashed-be p-4 text-center" style="border-radius:1rem;">No custom buses yet.</div>'}
        </div>
      </div>
    </div>\`;
  document.getElementById('bs-from').value = busF.from;
  document.getElementById('bs-to').value = busF.to;
  document.getElementById('bs-add').addEventListener('click', ()=>{
    const f = { name:document.getElementById('bs-name').value.trim(), type:document.getElementById('bs-type').value, from:document.getElementById('bs-from').value, to:document.getElementById('bs-to').value, price:+document.getElementById('bs-pr').value, departure:document.getElementById('bs-dep').value, arrival:document.getElementById('bs-arr').value };
    if (!f.name) return toast.error('Name required');
    BE.BusStore.add(f); toast.success('Bus added'); paintStats(); paintBuses();
  });
  host.querySelectorAll('.bs-rm').forEach(b=>b.addEventListener('click', ()=>{ BE.BusStore.remove(b.dataset.rm); paintStats(); paintBuses(); }));
}

function paintUsers(){
  const list = BE.Users.all();
  document.getElementById('adm-usr').innerHTML = \`
    <div class="be-card overflow-hidden" style="border-radius:1rem;">
      <table class="table m-0">
        <thead style="background:hsl(var(--muted) / .5); font-size:.75rem; text-transform:uppercase; letter-spacing:.05em;">
          <tr><th class="p-3">Name</th><th class="p-3">Email</th><th class="p-3 text-end">Action</th></tr>
        </thead>
        <tbody>
          \${list.length ? list.map(u=>\`<tr class="border-t-be"><td class="p-3 font-medium">\${u.name}</td><td class="p-3 text-muted">\${u.email}</td><td class="p-3 text-end"><button data-rm="\${u.email}" class="ur-rm btn-be btn-outline-be" style="font-size:.8rem; padding:.3rem .6rem;">🗑 Remove</button></td></tr>\`).join('') : '<tr><td colspan="3" class="p-5 text-center text-muted">No registered users yet.</td></tr>'}
        </tbody>
      </table>
    </div>\`;
  document.querySelectorAll('.ur-rm').forEach(b=>b.addEventListener('click', ()=>{ BE.Users.remove(b.dataset.rm); toast.success('Removed'); paintStats(); paintUsers(); }));
}

function paintBookings(){
  const list = BE.Bookings.all();
  document.getElementById('adm-bk').innerHTML = \`
    <div class="be-card overflow-hidden" style="border-radius:1rem;">
      <table class="table m-0">
        <thead style="background:hsl(var(--muted) / .5); font-size:.75rem; text-transform:uppercase; letter-spacing:.05em;">
          <tr><th class="p-3">PNR</th><th class="p-3">Passenger</th><th class="p-3">Route</th><th class="p-3">Date</th><th class="p-3 text-end">Total</th><th class="p-3 text-end">Status</th></tr>
        </thead>
        <tbody>
          \${list.length ? list.map(b=>\`<tr class="border-t-be">
            <td class="p-3 font-mono text-xs">\${b.id}</td>
            <td class="p-3">\${b.passenger.name}<div class="text-xs text-muted">\${b.passenger.email}</div></td>
            <td class="p-3">\${b.from} → \${b.to}</td>
            <td class="p-3">\${b.date}</td>
            <td class="p-3 text-end font-bold">₹\${b.total}</td>
            <td class="p-3 text-end"><span class="px-2 py-1 rounded-pill text-xs font-semibold" style="\${b.status==='confirmed'?'background:hsl(var(--primary));color:hsl(var(--primary-foreground));':'background:hsl(var(--destructive,0 70% 50%));color:#fff;'}">\${b.status}</span></td>
          </tr>\`).join('') : '<tr><td colspan="6" class="p-5 text-center text-muted">No bookings yet.</td></tr>'}
        </tbody>
      </table>
    </div>\`;
}
</script>
`);
fs.writeFileSync(path.join(OUT,'admin.html'), ADMIN);
console.log('wrote admin.html');

console.log('PHASE 2 done.');
