"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#specialties", label: "Specialties" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#top"
          className="font-serif text-xl sm:text-2xl tracking-wide text-foreground hover:text-accent transition-colors"
          aria-label="Eden Asrat — home"
        >
          <span className="font-medium">Eden</span>{" "}
          <span className="text-gold italic">Asrat</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-[0.18em] text-foreground/75 hover:text-accent transition-colors relative group py-1"
              >
                {l.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CV download CTA (desktop) */}
        <a
          href="eden-asrat-cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] px-5 py-2.5 border border-gold/70 text-foreground hover:bg-gold hover:text-white transition-all duration-300 rounded-full"
        >
          <Download className="size-3.5" />
          Download CV
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-[64px] bg-background border-t border-border/60 backdrop-blur-md transition-all duration-300 z-40 overflow-y-auto",
          open
            ? "opacity-100 pointer-events-auto h-[calc(100vh-64px)]"
            : "opacity-0 pointer-events-none h-0"
        )}
      >
        <ul className="flex flex-col gap-2 p-8">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-serif text-2xl text-foreground hover:text-accent transition-colors border-b border-border/60"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="mt-4">
            <a
              href="eden-asrat-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 w-full text-sm uppercase tracking-[0.18em] px-5 py-3 border border-gold/70 rounded-full hover:bg-gold hover:text-white transition-all"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
