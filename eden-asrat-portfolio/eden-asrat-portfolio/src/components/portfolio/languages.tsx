"use client";

import { motion } from "framer-motion";
import { Languages as LanguagesIcon, Sparkles } from "lucide-react";
import { useReveal } from "./use-reveal";

const LANGS = [
  {
    name: "Amharic",
    native: "አማርኛ",
    level: "Native",
    blurb: "Ethiopia's official working language — fluent in every register, from live broadcast to formal events.",
    dots: 5,
  },
  {
    name: "Oromifa",
    native: "Afaan Oromoo",
    level: "Native",
    blurb: "The most widely spoken language in Ethiopia — Eden connects naturally with Oromo audiences across the country.",
    dots: 5,
  },
  {
    name: "English",
    native: "English",
    level: "Fluent",
    blurb: "Fully fluent for international brands, global livestreams and cross-cultural campaigns.",
    dots: 4,
  },
];

export function Languages() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="languages"
      ref={ref}
      className={`py-24 md:py-32 reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold mb-4"
          >
            <LanguagesIcon className="size-3.5" />
            Languages
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-4xl sm:text-5xl text-foreground"
          >
            Eden speaks{" "}
            <span className="italic text-gold">three languages</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-muted-foreground leading-relaxed"
          >
            Hosting across Ethiopia&rsquo;s major language communities — and
            ready for international audiences too. Every audience gets Eden in
            their own language.
          </motion.p>
        </div>

        {/* Language cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LANGS.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-card border border-border/70 rounded-3xl p-7 hover:border-gold/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-[oklch(0.78_0.11_75/0.1)] transition-all duration-300 overflow-hidden"
            >
              {/* Decorative corner accent */}
              <div
                aria-hidden
                className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-blush/40 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"
              />

              <div className="relative">
                {/* Native name (large, serif) */}
                <div className="font-serif text-3xl sm:text-4xl text-foreground leading-tight">
                  {lang.native}
                </div>

                {/* English name */}
                <div className="text-[10px] uppercase tracking-[0.18em] text-gold mt-2">
                  {lang.name}
                </div>

                {/* Level + dots */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    {lang.level}
                  </span>
                  <div className="flex items-center gap-1.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span
                        key={idx}
                        className={
                          idx < lang.dots
                            ? "size-2 rounded-full bg-gold"
                            : "size-2 rounded-full bg-border"
                        }
                        aria-hidden
                      />
                    ))}
                  </div>
                </div>

                {/* Blurb */}
                <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
                  {lang.blurb}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom highlight strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7 }}
          className="mt-10 bg-secondary/40 rounded-2xl p-5 sm:p-6 flex items-center gap-4 sm:gap-6"
        >
          <div className="inline-flex items-center justify-center size-12 rounded-full bg-gold/15 text-gold shrink-0">
            <Sparkles className="size-5" />
          </div>
          <p className="text-sm sm:text-base text-foreground/85 leading-relaxed">
            <span className="font-medium text-foreground">
              Reach every audience.
            </span>{" "}
            Eden hosts live streams, videos and events in Amharic, Oromifa or
            English — switching mid-stream when the audience is mixed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
