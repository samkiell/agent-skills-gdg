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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl">
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex max-w-container items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-white focus-visible:ring-2 focus-visible:ring-purple-400"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 text-sm font-extrabold text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
            ✨
          </span>
          <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent">
            Buka Republic
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#menu"
            className="text-sm font-medium text-slate-300 hover:text-purple-400 focus-visible:ring-1 focus-visible:ring-purple-400"
          >
            Menu
          </a>
          <a
            href="#reserve"
            className="text-sm font-medium text-slate-300 hover:text-purple-400 focus-visible:ring-1 focus-visible:ring-purple-400"
          >
            Reserve
          </a>
          <a
            href="#reviews"
            className="text-sm font-medium text-slate-300 hover:text-purple-400 focus-visible:ring-1 focus-visible:ring-purple-400"
          >
            Reviews
          </a>
          <a
            href="#reserve"
            className="rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(168,85,247,0.5)] hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] focus-visible:ring-2 focus-visible:ring-purple-400"
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
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0B0F19]/95 px-6 py-6 shadow-2xl backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#menu"
              onClick={closeMenu}
              className="text-base font-medium text-slate-200 hover:text-purple-400"
            >
              Menu
            </a>
            <a
              href="#reserve"
              onClick={closeMenu}
              className="text-base font-medium text-slate-200 hover:text-purple-400"
            >
              Reserve
            </a>
            <a
              href="#reviews"
              onClick={closeMenu}
              className="text-base font-medium text-slate-200 hover:text-purple-400"
            >
              Reviews
            </a>
            <a
              href="#reserve"
              onClick={closeMenu}
              className="mt-2 block rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-6 py-3 text-center text-sm font-bold text-white shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              Reserve a table
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
