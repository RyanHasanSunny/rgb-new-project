import React from "react";

export default function Footer() {
  return (
    <footer className="footer w-full mt-5  text-white text-center py-4">
      <p className="text-sm">
        © {new Date().getFullYear()} ryangraphicboy. All rights reserved.
      </p>
    </footer>
  );
}
