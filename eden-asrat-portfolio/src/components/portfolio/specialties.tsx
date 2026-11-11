"use client";

import { motion } from "framer-motion";
import {
  Radio,
  Camera,
  Mic2,
  Megaphone,
  Heart,
  Globe2,
  TrendingUp,
  Users,
  Video,
} from "lucide-react";
import { useReveal } from "./use-reveal";

const SPECIALTIES = [
  {
    icon: Radio,
    title: "Live Streaming Host",
    desc: "Confident on-camera presence for live shopping, talk shows and Q&A formats across TikTok, Instagram and YouTube.",
  },
  {
    icon: Video,
    title: "Video Hosting",
    desc: "Front-of-camera talent for brand films, explainers, Reels, TikTok and YouTube — from script to delivery.",
  },
  {
    icon: Megaphone,
    title: "Brand Campaigns",
    desc: "Authentic on-brand storytelling for product launches, ambassador roles and influencer collaborations.",
  },
  {
    icon: Mic2,
    title: "Event MC",
    desc: "Warm, articulate hosting for brand activations, pop-ups, galas and digital events of any scale.",
  },
  {
    icon: Camera,
    title: "Editorial & Stills",
    desc: "Editorial-ready look and trained movement for print, look-books and campaign stills.",
  },
  {
    icon: Heart,
    title: "Audience Connection",
    desc: "A genuine, relatable tone that turns first-time viewers into returning followers and loyal fans.",
  },
  {
    icon: Globe2,
    title: "Cross-Cultural Reach",
    desc: "Comfortable across markets — bridging languages, cultures and audience expectations with ease.",
  },
];

const METRICS = [
  { icon: Users, value: "0→1K", label: "Follower growth (target 90 days)" },
  { icon: TrendingUp, value: "7+", label: "Platform formats mastered" },
  { icon: Video, value: "Live + Video", label: "Streaming & video ready" },
];

export function Specialties() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="specialties"
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
            Specialties
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="font-serif text-4xl sm:text-5xl text-foreground"
          >
            What Eden brings to the screen
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-5 text-muted-foreground leading-relaxed"
          >
            A versatile skill set covering the full spectrum of modern social
            media hosting — from real-time engagement to polished campaign
            delivery.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SPECIALTIES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative flex flex-col h-full bg-card border border-border/70 rounded-2xl p-6 hover:border-gold/70 hover:shadow-lg hover:shadow-[oklch(0.78_0.11_75/0.08)] transition-all duration-300"
            >
              <div className="mb-5 inline-flex items-center justify-center size-12 rounded-xl bg-blush/50 text-foreground group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                <s.icon className="size-5" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
              <span className="absolute top-6 right-6 text-[10px] font-mono text-muted-foreground/50">
                0{i + 1}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Metrics row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7 }}
          className="mt-14 grid sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-4 bg-background border border-border/70 rounded-2xl p-5"
            >
              <div className="inline-flex items-center justify-center size-11 rounded-full bg-gold/15 text-gold shrink-0">
                <m.icon className="size-5" />
              </div>
              <div>
                <div className="font-serif text-2xl text-foreground leading-none">
                  {m.value}
                </div>
                <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground mt-1.5">
                  {m.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
