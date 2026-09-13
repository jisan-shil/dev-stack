import React from 'react';

export default function Footer() {
  return (
    <footer className="footer footer-center p-6 bg-base-200 text-base-content rounded-xl mt-12">
      <aside>
        <p className="font-semibold text-sm">
          DevStack © {new Date().getFullYear()} - Built with React & Tailwind CSS
        </p>
      </aside>
    </footer>
  );
}