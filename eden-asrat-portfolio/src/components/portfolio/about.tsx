"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useReveal } from "./use-reveal";

export function About() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="about"
      ref={ref}
      className={`py-24 md:py-32 reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Left: secondary portrait */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative order-2 md:order-1"
        >
          <div className="relative mx-auto max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-3 border border-gold/30 rounded-[2rem] -z-10 rotate-2"
            />
            <div className="overflow-hidden rounded-[1.5rem] aspect-[3/4] bg-muted">
              <img
                src="portfolio/IMG_1296.jpg"
                alt="Eden Asrat portrait"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating quote card */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-background/95 backdrop-blur-sm border border-border/60 rounded-2xl p-4 max-w-[14rem] shadow-sm">
              <Quote className="size-4 text-gold mb-1.5" />
              <p className="font-serif text-sm text-foreground leading-snug italic">
                &ldquo;Hosting is making every viewer feel seen.&rdquo;
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right: text */}
        <div className="order-1 md:order-2">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gold block mb-5"
          >
            About Eden
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-4xl sm:text-5xl text-foreground leading-tight"
          >
            A new voice with{" "}
            <span className="italic text-gold">timeless presence</span>.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 space-y-4 text-muted-foreground leading-relaxed"
          >
            <p>
              Eden Asrat is a 24-year-old social media host and content
              creator based in Addis Ababa, Ethiopia, with a natural gift for
              connection. Standing at 1.67&nbsp;m, she carries a graceful,
              camera-ready presence that translates across platforms and
              audiences.
            </p>
            <p>
              Though newly established in the industry, Eden brings a rare
              combination of poise, curiosity and discipline to every
              collaboration. She is comfortable on live stream, in front of a
              video camera, on a brand set, on a stage and in front of a stills
              camera — switching register without losing her authentic warmth.
            </p>
            <p>
              Her approach is simple: understand the brand, respect the
              audience, and show up fully prepared. The result is content that
              feels human, fresh and effortlessly on-brand. She is now open
              to full-time, freelance and contract roles across Ethiopia.
            </p>
          </motion.div>

          {/* Quick facts */}
          <motion.dl
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {[
              { k: "Age", v: "24 years" },
              { k: "Height", v: "1.67 m" },
              { k: "Profession", v: "Host & Creator" },
              { k: "Languages", v: "Amharic · English" },
              { k: "Based in", v: "Addis Ababa" },
              { k: "Status", v: "Open to work" },
            ].map((item) => (
              <div
                key={item.k}
                className="border-l-2 border-gold/40 pl-3"
              >
                <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.k}
                </dt>
                <dd className="font-serif text-base text-foreground mt-0.5">
                  {item.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
