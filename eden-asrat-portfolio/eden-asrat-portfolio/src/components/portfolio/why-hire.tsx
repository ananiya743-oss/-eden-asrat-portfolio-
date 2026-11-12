"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Repeat,
  ShieldCheck,
  HeartHandshake,
  Download,
} from "lucide-react";
import { useReveal } from "./use-reveal";

const STRENGTHS = [
  {
    icon: Clock,
    title: "Prepared",
    desc: "Shows up fully briefed, scripted and on-brand — every time, with no surprises on the day.",
  },
  {
    icon: Repeat,
    title: "Adaptable",
    desc: "Equally at home on live stream, on video, on stage or in stills — switching register without losing warmth.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable",
    desc: "Punctual, communicative and disciplined across every collaboration. She does what she says she will.",
  },
  {
    icon: HeartHandshake,
    title: "Authentic",
    desc: "A genuine, relatable tone that turns first-time viewers into returning followers and loyal fans.",
  },
];

export function WhyHire() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="why-eden"
      ref={ref}
      className={`py-24 md:py-32 bg-secondary/40 reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-gold block mb-4"
          >
            Why Eden
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-4xl sm:text-5xl text-foreground"
          >
            Why hire Eden
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-muted-foreground leading-relaxed"
          >
            The four qualities that make Eden a dependable hire — for brands,
            agencies, studios and event teams across Ethiopia.
          </motion.p>
        </div>

        {/* Strengths grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STRENGTHS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-card border border-border/70 rounded-2xl p-6 hover:border-gold/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-[oklch(0.78_0.11_75/0.1)] transition-all duration-300 text-center"
            >
              <div className="mb-5 inline-flex items-center justify-center size-14 rounded-full bg-blush/50 text-foreground group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <s.icon className="size-6" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CV call-to-action card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7 }}
          className="mt-12 bg-card border-2 border-gold/40 rounded-3xl p-7 sm:p-10 relative overflow-hidden"
        >
          {/* Decorative corner accents */}
          <div
            aria-hidden
            className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-blush/40 blur-2xl"
          />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-3">
                Take it with you
              </div>
              <h3 className="font-serif text-3xl text-foreground leading-tight">
                Download Eden&rsquo;s full CV
              </h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">
                A printable one-page CV with contact details, skills,
                capabilities and strengths — ready to forward to your team or
                attach to your shortlist.
              </p>
            </div>
            <a
              href="eden-asrat-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-foreground text-background rounded-full text-sm uppercase tracking-[0.18em] hover:bg-gold hover:text-white transition-all duration-300 self-start md:self-auto shrink-0"
            >
              <Download className="size-4" />
              Download CV (PDF)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
