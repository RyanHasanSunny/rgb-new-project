# TODO: Project Reorganization Completed

- [x] Create frontend/ and backend/ directories
- [x] Move all frontend files (src/, public/, index.html, vite.config.js, eslint.config.js, package.json, package-lock.json) to frontend/
- [x] Create new root package.json with scripts for frontend and backend
- [x] Set up basic Node.js/Express backend in backend/ with package.json and server.js
- [x] Install dependencies for backend and frontend

# TODO: Add Left-Right Fadeout to WebDevShowcase

- [ ] Modify frontend/src/styles/WebDevShowcase.css to add mask-image for fadeout effect
- [ ] Test the fadeout by running the app from frontend/

# TODO: Implement Global Loader

- [x] Create Loader component with animated overlay and logo
- [x] Add CSS for loader animation
- [x] Add fetchPortfolio and fetchCategories to frontend/src/api.jsx
- [x] Centralize data fetching in MainSite component
- [x] Update Herosection, Servicesection, Featuresection to use props
- [x] Show loader until all data is fetched

# TODO: Test Reorganized Project

- [ ] Run frontend: npm run dev:frontend from root
- [ ] Run backend: npm run dev:backend from root
- [ ] Verify both are working
- [ ] Update any broken paths if necessary
