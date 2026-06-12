"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  { href: "/catalogue", label: "Catalogue" },
  { href: "/artistes", label: "Artistes" },
  { href: "/a-propos", label: "À propos" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-black text-xl tracking-widest uppercase text-white hover:opacity-70 transition-opacity"
          aria-label="18heure48 — accueil"
        >
          18heure48
        </Link>

        {/* Navigation desktop */}
        <nav aria-label="Navigation principale" className="hidden md:flex gap-8">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-xs uppercase tracking-widest transition-colors duration-200 ${
                pathname.startsWith(href)
                  ? "text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Burger mobile */}
        <button
          className="md:hidden text-white p-2"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-5 h-px bg-current mb-1.5" />
          <span
            className={`block w-5 h-px bg-current mb-1.5 transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span className="block w-5 h-px bg-current" />
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav
          aria-label="Navigation mobile"
          className="md:hidden border-t border-border bg-background"
        >
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block px-6 py-4 text-sm uppercase tracking-widest border-b border-border transition-colors ${
                pathname.startsWith(href)
                  ? "text-white"
                  : "text-muted hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
