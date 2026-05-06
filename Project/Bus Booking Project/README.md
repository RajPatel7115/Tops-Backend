# BusEase — Bootstrap edition

A complete vanilla **HTML / CSS / Bootstrap 5 / JavaScript** rebuild of the React+Tailwind BusEase app.
Works on any plain static server (Live Server, GitHub Pages, S3, nginx…).

## Run locally

Just open `index.html` with any static web server. Examples:

```bash
# VS Code "Live Server" extension → right-click index.html → Open with Live Server
# OR Python:
python3 -m http.server 8000
# OR Node:
npx serve .
```

Then visit http://localhost:8000/

> Don't open the .html files via `file://` — the localStorage demo + bootstrap modules need a real `http://` origin.

## Pages (13)

| File | Purpose |
|------|---------|
| `index.html` | Landing page — hero, search, popular routes, why-us, testimonials |
| `search.html` | Search results with filters, sort, types |
| `seats.html` | Seat picker (booked/ladies/premium) |
| `booking.html` | Passenger details, coupon, payment (UPI/Card/NetBanking) |
| `confirmation.html` | E-ticket with PNR |
| `my-trips.html` | All bookings, cancel |
| `offers.html` | Coupon catalogue with copy-to-clipboard |
| `advance.html` | 30-day price calendar |
| `charter.html` | Whole-bus charter quote builder |
| `track.html` | Live bus tracking demo |
| `support.html` | Contact + FAQ |
| `admin.html` | Admin dashboard (PIN: **2468**) |
| `404.html` | Not found |

## Admin

Open `admin.html`, enter PIN `2468`. Manage:
- **Coupons** — add/remove/reset (used live by `booking.html`)
- **Buses** — add custom routes
- **Users** — list + remove signups
- **Bookings** — read all bookings

## Architecture

```
assets/
  css/styles.css       — design tokens (HSL), utilities, components
  js/
    data.js            — data layer (cities, generateBuses, Auth, Bookings, OffersStore, BusStore, Users, BUS_FLEET)
    common.js          — navbar, footer, chatbot, auth modal, toasts, theme
    search-form.js     — reusable search widget
  img/hero-bus.jpg     — hero image
build.js               — re-generates all .html from this build script (node build.js)
```

All state is persisted to `localStorage` under `busease_*` keys.

## Regenerate pages

```bash
node build.js
```
