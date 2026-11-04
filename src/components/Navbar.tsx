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
    <header className="sticky top-0 z-50 border-b border-border bg-bg/95 backdrop-blur-sm">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-container items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-heading font-black tracking-tight text-fg focus-visible:ring-2 focus-visible:ring-accent"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-token bg-accent text-xs font-bold text-white shadow-sm">
            BR
          </span>
          <span>Buka Republic</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#menu"
            className="text-sm font-body font-medium text-fg hover:text-accent focus-visible:ring-1 focus-visible:ring-accent"
          >
            Menu
          </a>
          <a
            href="#reserve"
            className="text-sm font-body font-medium text-fg hover:text-accent focus-visible:ring-1 focus-visible:ring-accent"
          >
            Reserve
          </a>
          <a
            href="#reviews"
            className="text-sm font-body font-medium text-fg hover:text-accent focus-visible:ring-1 focus-visible:ring-accent"
          >
            Reviews
          </a>
          <a
            href="#reserve"
            className="rounded-token bg-accent px-4 py-2 text-xs font-body font-semibold uppercase tracking-wider text-white shadow-sm hover:bg-accent-hover focus-visible:ring-2 focus-visible:ring-accent"
          >
            Book Table
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="rounded-token border border-border bg-surface px-3 py-1.5 text-xs font-body font-semibold text-fg shadow-sm focus-visible:ring-2 focus-visible:ring-accent"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-border bg-surface px-6 py-6 shadow-lg md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#menu"
              onClick={closeMenu}
              className="text-base font-body font-medium text-fg hover:text-accent"
            >
              Menu
            </a>
            <a
              href="#reserve"
              onClick={closeMenu}
              className="text-base font-body font-medium text-fg hover:text-accent"
            >
              Reserve
            </a>
            <a
              href="#reviews"
              onClick={closeMenu}
              className="text-base font-body font-medium text-fg hover:text-accent"
            >
              Reviews
            </a>
            <a
              href="#reserve"
              onClick={closeMenu}
              className="mt-2 inline-block rounded-token bg-accent px-4 py-2.5 text-center text-sm font-body font-semibold text-white shadow-sm"
            >
              Reserve a table
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
