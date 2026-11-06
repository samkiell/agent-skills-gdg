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
        className="mx-auto flex max-w-container items-center justify-between px-6 py-5 sm:px-8 lg:px-12"
      >
        <a
          href="#"
          className="text-2xl font-heading font-black tracking-tight text-fg focus-visible:ring-2 focus-visible:ring-accent"
        >
          Buka Republic
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#menu"
            className="text-base font-body font-medium text-fg hover:text-accent focus-visible:ring-1 focus-visible:ring-accent"
          >
            Menu
          </a>
          <a
            href="#reserve"
            className="text-base font-body font-medium text-fg hover:text-accent focus-visible:ring-1 focus-visible:ring-accent"
          >
            Reserve
          </a>
          <a
            href="#reviews"
            className="text-base font-body font-medium text-fg hover:text-accent focus-visible:ring-1 focus-visible:ring-accent"
          >
            Reviews
          </a>
          <a
            href="#reserve"
            className="flex min-h-[48px] items-center justify-center rounded-token bg-accent px-6 py-2.5 text-sm font-body font-semibold text-bg hover:opacity-90 focus-visible:ring-2 focus-visible:ring-accent"
          >
            Reserve a table
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-token border border-border bg-surface px-4 py-2 text-sm font-body font-semibold text-fg focus-visible:ring-2 focus-visible:ring-accent"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-border bg-bg px-6 py-6 shadow-md md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#menu"
              onClick={closeMenu}
              className="text-lg font-body font-medium text-fg hover:text-accent"
            >
              Menu
            </a>
            <a
              href="#reserve"
              onClick={closeMenu}
              className="text-lg font-body font-medium text-fg hover:text-accent"
            >
              Reserve
            </a>
            <a
              href="#reviews"
              onClick={closeMenu}
              className="text-lg font-body font-medium text-fg hover:text-accent"
            >
              Reviews
            </a>
            <a
              href="#reserve"
              onClick={closeMenu}
              className="mt-2 flex min-h-[48px] items-center justify-center rounded-token bg-accent px-6 py-3 text-center text-sm font-body font-semibold text-bg hover:opacity-90"
            >
              Reserve a table
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
