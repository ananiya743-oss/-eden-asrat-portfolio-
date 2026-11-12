"use client";

import { motion } from "framer-motion";
import { Check, ArrowUpRight, MapPin } from "lucide-react";
import { useReveal } from "./use-reveal";

const CAPABILITIES = [
  {
    tag: "Live",
    title: "Live Stream Hosting",
    summary:
      "End-to-end live hosting for shopping, talk and Q&A streams — delivered on-brand from open to sign-off.",
    duration: "60–180 min per session",
    features: [
      "Pre-stream briefing & script prep",
      "On-camera hosting & audience engagement",
      "Real-time Q&A & call-to-action",
      "Post-stream recap with key moments",
    ],
  },
  {
    tag: "On-camera",
    title: "Video Hosting",
    summary:
      "Front-of-camera talent for YouTube, Reels, TikTok, brand films, explainer videos and short-form series.",
    duration: "Half-day or full-day shoot",
    features: [
      "Script alignment & on-camera delivery",
      "Voice-over & product walkthroughs",
      "Multi-platform delivery (YT, Reels, TikTok)",
      "Wardrobe, hair & makeup coordination",
    ],
  },
  {
    tag: "Brand",
    title: "Brand & Campaign Hosting",
    summary:
      "Front-of-camera talent for product launches, ambassador content and short-form brand series.",
    duration: "Half-day or full-day shoot",
    features: [
      "Concept alignment with brand & creative",
      "On-set hosting, narration & walkthroughs",
      "Multi-platform delivery",
      "End-to-end campaign support",
    ],
  },
  {
    tag: "In-person",
    title: "Event MC & Appearances",
    summary:
      "On-stage or in-venue hosting for brand activations, pop-ups, launches and hybrid events across Ethiopia.",
    duration: "Per event (half / full day)",
    features: [
      "Custom run-of-show & script development",
      "Stage MC duties, intros & audience warm-up",
      "Press & photo-call participation",
      "Travel-ready across Ethiopia",
    ],
  },
];

export function Services() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="capabilities"
      ref={ref}
      className={`py-24 md:py-32 reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 mb-14">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold block mb-4">
              Capabilities
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground leading-tight">
              What Eden can do
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed self-end max-w-xl">
            Four core capabilities — each tailored to the brand, the platform
            and the audience. Every role is approached with a discovery call,
            a clear brief, and a delivery timeline agreed up-front.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {CAPABILITIES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative flex flex-col bg-card border border-border/70 rounded-3xl p-7 hover:border-gold/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-[oklch(0.78_0.11_75/0.1)] transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold border border-gold/40 px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground/60">
                  0{i + 1}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {s.summary}
              </p>

              <ul className="space-y-2.5 mb-6 mt-auto">
                {s.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm text-foreground/85"
                  >
                    <Check className="size-4 text-gold mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  {s.duration}
                </span>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm text-foreground hover:text-gold transition-colors"
                  aria-label={`Contact Eden about ${s.title}`}
                >
                  Contact
                  <ArrowUpRight className="size-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Ethiopia availability strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7 }}
          className="mt-14 bg-foreground text-background rounded-3xl p-7 sm:p-10 relative overflow-hidden"
        >
          <div
            aria-hidden
            className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gold/20 blur-3xl"
          />
          <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-3 flex items-center gap-1.5">
                <MapPin className="size-3.5" />
                Availability
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-background leading-tight">
                Available across Ethiopia
              </h3>
              <p className="text-background/70 mt-2 text-sm max-w-md">
                Open to full-time, freelance and contract roles — Addis Ababa
                and beyond. Travel-ready for shoots, streams and events.
              </p>
            </div>
            <a
              href="eden-asrat-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-white rounded-full text-sm uppercase tracking-[0.18em] hover:bg-background hover:text-foreground transition-all duration-300 self-start sm:self-auto"
            >
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
