# Appscrip Product Listing Page (PLP)

A simple Product Listing Page implemented with React and pure CSS. Fetches mock data from Fake Store API with a fallback local dataset.

## Features
- Responsive grid (desktop/tablet/mobile)
- Sidebar filters (category, availability example)
- Search and sorting
- SEO metadata (react-helmet) and JSON-LD schema
- Minimal dependencies (React + react-helmet)
- Clean modular code structure, BEM-like CSS naming
- Lazy-loaded images and accessible markup

## Run locally
1. `npm install`
2. `npm start`
3. App runs at `http://localhost:5137`

## Build & Deployement
- `npm run build` then deployed `build/` to Netlify host.

## Notes
- Uses Fake Store API at `https://fakestoreapi.com/products`. If remote fetch fails, local `src/data/products.json` kicks in.
- Keep images SEO-friendly by replacing sample images with named product images (e.g. `bag-gray.jpg`) in `public/assets`.
