"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 py-5 md:px-10 md:py-6">
        {/* Logo */}
        <Link
          href="/"
          className="font-[family-name:var(--font-playfair)] text-2xl md:text-3xl font-bold tracking-wider text-white"
        >
          BrujaMaruja
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-[0.2em] uppercase transition-opacity hover:opacity-100 ${
                pathname === link.href ? "opacity-100" : "opacity-60"
              } text-white`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-px bg-white transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-white transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 mix-blend-normal">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-5 right-6 p-2"
            aria-label="Close menu"
          >
            <span className="block w-6 h-px bg-white rotate-45 translate-y-px" />
            <span className="block w-6 h-px bg-white -rotate-45" />
          </button>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-playfair)] text-4xl font-light text-white tracking-wider"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
