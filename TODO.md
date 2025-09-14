# TODO for Making About Section Dynamic

- [x] Add fetchAbout function in src/api.jsx to fetch name, description, and image URL from Firestore "about" collection.
- [x] Update src/components/Sections/Aboutsection.jsx to:
  - Use React hooks to fetch About data on mount.
  - Display dynamic name, description, and image (fallback to static image if no URL).
  - Handle loading and error states gracefully.
- [ ] Test the About section to verify dynamic data rendering.
- [ ] Optionally update backend to store image URL if not present.

# SEO Improvements Completed

- [x] Install react-helmet-async for dynamic meta tags
- [x] Enhance index.html with comprehensive meta tags (description, Open Graph, Twitter Cards)
- [x] Implement Helmet in App.jsx for route-specific meta tags
- [x] Add robots.txt to public/ for crawler instructions
- [x] Add sitemap.xml to public/ for site structure
- [x] Implement JSON-LD structured data for Person/portfolio schema
- [x] Add canonical URLs in Helmet
- [x] Review and ensure all images have descriptive alt attributes (already present)
- [x] Optimize heading hierarchy across components (h1 in hero, h2 in about/services, proper nesting)
- [ ] Consider prerendering for better SEO (suggest vite-plugin-ssr or similar for server-side rendering)
