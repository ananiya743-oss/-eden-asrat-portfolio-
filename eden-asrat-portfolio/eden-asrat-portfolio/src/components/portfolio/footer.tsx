"use client";

import { Instagram, Phone, MessageCircle, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-serif text-3xl">
              Eden <span className="italic text-gold">Asrat</span>
            </div>
            <p className="mt-4 text-background/70 max-w-sm leading-relaxed">
              Social media & video host based in Addis Ababa, Ethiopia.
              Available for live streams, video hosting, brand campaigns and
              event hosting across Ethiopia. Open to work.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                {
                  icon: Instagram,
                  label: "Instagram @Eddieas21",
                  href: "https://instagram.com/Eddieas21",
                },
                {
                  icon: Phone,
                  label: "Call +251 940 938 770",
                  href: "tel:+251940938770",
                },
                {
                  icon: MessageCircle,
                  label: "WhatsApp +251 940 938 770",
                  href: "https://wa.me/251940938770",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  className="size-10 rounded-full bg-background/10 hover:bg-gold hover:text-foreground flex items-center justify-center transition-all"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
              Explore
            </div>
            <ul className="space-y-2.5 text-sm text-background/80">
              {[
                { href: "#about", label: "About" },
                { href: "#specialties", label: "Specialties" },
                { href: "#services", label: "Services" },
                { href: "#portfolio", label: "Portfolio" },
                { href: "#contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-gold transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4">
              Get in touch
            </div>
            <ul className="space-y-2.5 text-sm text-background/80">
              <li>
                <a
                  href="tel:+251940938770"
                  className="hover:text-gold transition-colors"
                >
                  +251 940 938 770
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/251940938770"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/Eddieas21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  @Eddieas21
                </a>
              </li>
              <li className="text-background/60">
                Addis Ababa · Ethiopia
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-background/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-background/60">
          <p>
            © {new Date().getFullYear()} Eden Asrat. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gold transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Terms
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              Back to top
              <ArrowUp className="size-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
