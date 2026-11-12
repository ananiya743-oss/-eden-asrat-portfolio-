"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Soft background gradient */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-b from-[oklch(0.95_0.03_50)] via-background to-[oklch(0.96_0.02_70)]"
      />
      {/* Decorative blurred blobs */}
      <div
        aria-hidden
        className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-[oklch(0.85_0.05_20/0.55)] blur-3xl -z-10"
      />
      <div
        aria-hidden
        className="absolute bottom-0 -left-32 w-[24rem] h-[24rem] rounded-full bg-[oklch(0.78_0.11_75/0.18)] blur-3xl -z-10"
      />
      {/* Subtle dot pattern overlay (attracts visual depth) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.025] [background-image:radial-gradient(oklch(0.42_0.07_40)_1px,transparent_1px)] [background-size:18px_18px]"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-[1fr_1.05fr] gap-10 md:gap-16 items-center w-full">
        {/* Left: text */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="order-2 md:order-1 text-center md:text-left"
        >
          {/* Open-to-work pill — pulsing */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] mb-6 px-4 py-2 rounded-full bg-foreground text-background"
          >
            <span className="relative flex size-2">
              <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-75" />
              <span className="relative rounded-full size-2 bg-gold" />
            </span>
            Open to opportunities
          </motion.span>

          <h1 className="font-serif font-medium leading-[0.95] text-foreground text-[3.25rem] sm:text-7xl lg:text-[6.5rem]">
            Eden
            <br />
            <span className="italic text-gold">Asrat</span>
          </h1>

          <p className="mt-5 text-sm sm:text-base text-muted-foreground max-w-md mx-auto md:mx-0 uppercase tracking-[0.18em]">
            Social media &amp; video host · based in Ethiopia
          </p>

          <p className="mt-6 text-base sm:text-lg text-foreground/80 max-w-md mx-auto md:mx-0 leading-relaxed">
            A 24-year-old host bringing warmth, energy and authentic storytelling
            to every live stream, video, brand campaign and event she leads —
            and looking for her next role across Ethiopia.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="eden-asrat-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-foreground text-background rounded-full text-sm uppercase tracking-[0.18em] hover:bg-gold hover:text-white transition-all duration-300"
            >
              <Download className="size-4" />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-foreground/30 text-foreground rounded-full text-sm uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-all duration-300"
            >
              Let&rsquo;s connect
            </a>
          </div>

          {/* Mini stats row */}
          <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md mx-auto md:mx-0">
            {[
              { k: "24", l: "Years old" },
              { k: "1.67m", l: "Height" },
              { k: "Addis", l: "Ababa, ET" },
            ].map((s) => (
              <div key={s.l} className="text-center md:text-left">
                <dt className="font-serif text-3xl text-foreground">{s.k}</dt>
                <dd className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                  {s.l}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Right: portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut", delay: 0.15 }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative mx-auto max-w-md md:max-w-none">
            {/* Decorative frame */}
            <div
              aria-hidden
              className="absolute -inset-3 sm:-inset-4 border border-gold/40 rounded-[2rem] -z-10"
            />
            <div
              aria-hidden
              className="absolute -inset-1.5 rounded-[1.8rem] overflow-hidden -z-10 bg-blush/40"
            />
            <div className="relative overflow-hidden rounded-[1.5rem] aspect-[3/4] bg-muted">
              <img
                src="portfolio/IMG_0204.jpg"
                alt="Eden Asrat in a studio portrait wearing a pink dress"
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              {/* Soft gradient overlay for depth */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-transparent"
              />
            </div>

            {/* Floating tag — top-right corner, "looking for roles" */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -top-3 -right-3 sm:-right-6 bg-background/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-border/60 max-w-[15rem]"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1 flex items-center gap-1.5">
                <MapPin className="size-3" />
                Based in Addis Ababa
              </p>
              <p className="font-serif text-base text-foreground leading-tight">
                Available across Ethiopia
              </p>
            </motion.div>

            {/* Floating bottom-left badge — quick highlight */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-3 -left-3 sm:-left-6 bg-foreground text-background px-4 py-3 rounded-2xl shadow-lg max-w-[14rem]"
            >
              <p className="font-serif text-base leading-tight">
                Live streams · Video · Brand · Events
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint — bottom-left, away from the portrait */}
      <div
        aria-hidden
        className="absolute bottom-6 left-6 sm:left-8 text-muted-foreground/60 hidden md:flex flex-col items-start gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
