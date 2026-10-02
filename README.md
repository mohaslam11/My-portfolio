# Mohammed Aslam — Portfolio V2

A responsive editorial/product-style developer portfolio built around the V2 plan.

## Stack
- Next.js 15
- React 19
- TypeScript
- Framer Motion
- Lucide React
- Next Font

## Design system
- Background: `#F5F4F0`
- Text: `#151515`
- Secondary: `#686862`
- Borders: `#D9D8D2`
- Accent: `#3157D5`
- Dark accent: `#2443A8`

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
npm start
```

## Manual setup before deployment
1. Replace the CSS-generated product mockups with real optimized project screenshots when available.
2. Add dedicated case-study routes for Cherish Vogue, Varnika Store and Sahachari if desired.
3. Add your final Open Graph image and favicon.
4. Update `metadataBase` in `app/layout.tsx` if the production domain changes.
5. Deploy to Vercel and connect the final custom domain.
6. Run Lighthouse on mobile and desktop after replacing images.
7. Add analytics only if you actually want visitor data; keep the initial build lightweight.

## Notes
The hero uses lightweight CSS/DOM 3D-style perspective layers instead of WebGL. This is intentional for performance. If you later provide a specific Three.js/WebGL animation or 3D source you want incorporated, it can be isolated to the hero without changing the rest of the architecture.
