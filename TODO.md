# TODO for Making About Section Dynamic

- [x] Add fetchAbout function in src/api.jsx to fetch name, description, and image URL from Firestore "about" collection.
- [x] Update src/components/Sections/Aboutsection.jsx to:
  - Use React hooks to fetch About data on mount.
  - Display dynamic name, description, and image (fallback to static image if no URL).
  - Handle loading and error states gracefully.
- [ ] Test the About section to verify dynamic data rendering.
- [ ] Optionally update backend to store image URL if not present.
