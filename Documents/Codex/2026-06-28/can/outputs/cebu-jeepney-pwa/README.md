# Sakay Cebu

Zero-backend, offline-first PWA prototype. Serve this folder over HTTPS (or localhost); geolocation and service workers do not work reliably from `file://`.

```sh
npx serve .
```

## Deploy on Vercel

### Dashboard (no command line)

1. Open <https://vercel.com/new> and sign in.
2. Choose **Browse/Upload** and upload this `cebu-jeepney-pwa` folder (not its parent `outputs` folder).
3. Keep **Framework Preset** set to `Other` and leave Build Command and Output Directory empty.
4. Select **Deploy**. Vercel provides HTTPS automatically, so geolocation and the service worker can run.

### Vercel CLI

From this folder, run:

```sh
npx vercel
```

Choose `N` when asked to link an existing project, accept this folder as the project directory, and keep the detected settings. For the production deployment, run `npx vercel --prod`.

## Production notes

- `data/routes.js` contains planning-grade route templates, not an official or exhaustive franchise database. Validate paths/directions with Cebu City/LTFRB before public launch.
- Fare constants are isolated in `data/routes.js`. The included traditional-PUJ estimate uses ₱15 for the first 4 km plus ₱1.80/km, rounded up to the nearest ₱0.25. Update whenever LTFRB issues a new fare matrix.
- Public Nominatim forbids API-powered autocomplete. The app performs local autocomplete and only sends a remote request after an explicit Search/Enter action. Results are cached and requests are globally spaced at least 1 second apart. Browser JavaScript cannot set the forbidden `User-Agent` header; the browser supplies its own and the page Referer identifies the deployment.
- OSM standard tiles are intentionally excluded from the Service Worker. OSM forbids bulk/offline tile use. The route engine, landmarks and itinerary remain available offline; previously viewed tiles may remain in the browser HTTP cache under OSM's response headers.
- Replace the contact/deployment details and review OSMF policies before launch. For guaranteed offline basemaps, use an offline-licensed tile package/provider or self-hosted vector tiles.
