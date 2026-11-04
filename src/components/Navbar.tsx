"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-container items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <a
          href="#"
          className="text-lg font-heading font-bold text-fg focus-visible:ring-1 focus-visible:ring-accent"
        >
          Buka Republic
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#menu"
            className="text-sm font-body text-fg hover:text-muted focus-visible:ring-1 focus-visible:ring-accent"
          >
            Menu
          </a>
          <a
            href="#reserve"
            className="text-sm font-body text-fg hover:text-muted focus-visible:ring-1 focus-visible:ring-accent"
          >
            Reserve
          </a>
          <a
            href="#reviews"
            className="text-sm font-body text-fg hover:text-muted focus-visible:ring-1 focus-visible:ring-accent"
          >
            Reviews
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="rounded-token border border-border bg-surface px-3 py-1.5 text-xs font-body text-fg focus-visible:ring-2 focus-visible:ring-accent"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-border bg-bg px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#menu"
              onClick={closeMenu}
              className="text-base font-body text-fg hover:text-muted"
            >
              Menu
            </a>
            <a
              href="#reserve"
              onClick={closeMenu}
              className="text-base font-body text-fg hover:text-muted"
            >
              Reserve
            </a>
            <a
              href="#reviews"
              onClick={closeMenu}
              className="text-base font-body text-fg hover:text-muted"
            >
              Reviews
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

