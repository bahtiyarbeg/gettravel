# GetTravel — Nha Trang Tour Agency

Travel agency website for Nha Trang, Vietnam. 22 tours, booking form, admin panel.

**Last updated:** 2026-06-23 — Language switcher fixed on all tour pages, booking form emoji icons, admin edit modal improvements.

---

## Live Pages

| URL | Purpose |
|---|---|
| `index.html` | Main page — hero, tours, booking form, contacts |
| `tours.html` | All 22 tours catalogue |
| `tour-*.html` | 22 individual tour pages |
| `secret-admin.html` | Admin panel (linked from footer) |
| `admin-login.html` | Separate login page |
| `admin-dashboard.html` | Full admin dashboard (requires session auth) |
| `mobile-app.html` | Mobile PWA landing |

---

## Admin Panel

**URL:** `secret-admin.html`  
**Password:** `Gettravel2026!Admin`  
**Auth:** SHA-256 hashed, stored in localStorage. Session expires after 8 hours.

### Features:
- ✅ **All Tours tab** — shows all 22 static tours, Edit button on each card
- ✅ **Edit modal** — edits Title, Subtitle, Description, Duration, Category, Image URL (with live preview), Prices, Status, Featured. Saves to `tables/tours` API.
- ✅ **Add New Tour** — creates new tour via POST to API
- ✅ **Bookings tab** — reads from `tables/bookings`
- ✅ **Settings** — change password, phone, email

---

## REST API Tables

| Table | Usage |
|---|---|
| `tables/tours` | Tour overrides from admin edits |
| `tables/bookings` | Booking form submissions |

API base: relative path `tables/{name}` — standard CRUD (GET/POST/PUT/PATCH/DELETE).

---

## Tech Stack

- Pure HTML5 / CSS3 / Vanilla JS — no frameworks
- Font Awesome 6.4 (CDN)
- Google Fonts — Inter
- Google Translate widget
- GA4: `G-XXXXXXXXXX` (replace with real ID)
- Yandex.Metrica: `window._ymId` (set in page `<head>`)

---

## Completed Fixes (this session)

- ✅ Chat widget removed from index.html (5 chat files deleted)
- ✅ Admin Edit Tour — STATIC_TOURS array with all 22 tours hardcoded
- ✅ Edit modal — description + image URL fields visible and working
- ✅ Image preview in edit modal
- ✅ Hero photo replaced with Nha Trang beach (Unsplash, stable URL)
- ✅ Booking form icon spacing fixed
- ✅ Nav logo "GetTravel" fixed (was split into two elements)
- ✅ secret-admin.html: SHA-256 auth, Chat tab → Edit Tour tab
- ✅ 0 Russian characters in all HTML/JS/CSS files
- ✅ ~60 junk .md/.py files deleted from project root

---

## Pending / Next Steps

1. **Replace analytics placeholders** — set real GA4 ID (`G-XXXXXXXXXX` → your actual ID) in all 23 HTML files
2. **Set Yandex.Metrica counter** — add `window._ymId = YOUR_ID;` to `<head>` of each page
3. **Hero image** — if current Unsplash photo doesn't match brand, replace `css/style.css` line ~377
4. **Prices in tours** — currently `adult_price: 0` in static tours — fill via admin Edit Tour
5. **tours.html page** — verify no layout issues on mobile

---

## File Structure

```
index.html              Main page
tours.html              Tours catalogue
tour-*.html             22 tour detail pages (22 files)
secret-admin.html       Admin panel (active, linked from footer)
admin-login.html        Login page for admin-dashboard
admin-dashboard.html    Full dashboard (requires sessionStorage auth)
mobile-app.html         PWA landing
css/style.css           Main styles
css/style-new.css       Extended styles
js/main.js              Main JS (gallery, booking, lazy load)
js/tours.js             Tours page JS
manifest.json           PWA manifest
sw.js                   Service worker
sitemap.xml             SEO sitemap
robots.txt              SEO robots
```
