"use client";

import { motion } from "framer-motion";
import { Phone, Instagram, MapPin, MessageCircle, ArrowUpRight } from "lucide-react";
import { useReveal } from "./use-reveal";

const CONTACTS = [
  {
    icon: Phone,
    label: "Phone / WhatsApp",
    value: "+251 940 938 770",
    href: "tel:+251940938770",
    note: "Direct line · WhatsApp welcome",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@Eddieas21",
    href: "https://instagram.com/Eddieas21",
    note: "DMs open for opportunities",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@Eddieas21",
    href: "https://t.me/Eddieas21",
    note: "Fast replies for recruiters & brands",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Addis Ababa, Ethiopia",
    href: "",
    note: "Available across Ethiopia",
  },
];

export function Contact() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-24 md:py-32 bg-secondary/40 reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-gold block mb-4">
            Contact
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-4xl sm:text-5xl text-foreground leading-tight"
          >
            Let&rsquo;s{" "}
            <span className="italic text-gold">connect</span>.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-muted-foreground leading-relaxed"
          >
            Whether you&rsquo;re hiring for a full-time role, a campaign, a
            single shoot or a long-term partnership — Eden is one message
            away and ready to work across Ethiopia.
          </motion.p>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group bg-card border border-border/70 rounded-2xl p-6 flex items-start gap-4 hover:border-gold/70 hover:shadow-lg hover:shadow-[oklch(0.78_0.11_75/0.08)] transition-all duration-300"
            >
              <div className="size-12 rounded-xl bg-blush/50 group-hover:bg-gold group-hover:text-white flex items-center justify-center shrink-0 transition-colors">
                <c.icon className="size-5 text-foreground group-hover:text-white transition-colors" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {c.label}
                </div>
                <div className="font-serif text-xl text-foreground mt-1 truncate">
                  {c.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {c.note}
                </div>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground/50 group-hover:text-gold transition-colors shrink-0 mt-1" />
            </motion.a>
          ))}
        </div>

        {/* Primary CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-5%" }}
          transition={{ duration: 0.7 }}
          className="mt-8 bg-foreground text-background rounded-3xl p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="text-center sm:text-left">
            <h3 className="font-serif text-2xl sm:text-3xl">
              Looking for her next role
            </h3>
            <p className="text-background/70 mt-2 text-sm">
              Call or message directly — she typically replies within 24
              hours. Open to opportunities across Ethiopia.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href="tel:+251940938770"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-white rounded-full text-sm uppercase tracking-[0.18em] hover:bg-background hover:text-foreground transition-all duration-300"
            >
              <Phone className="size-4" />
              Call now
            </a>
            <a
              href="https://wa.me/251940938770"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-background/30 text-background rounded-full text-sm uppercase tracking-[0.18em] hover:border-gold hover:text-gold transition-all duration-300"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </a>
          </div>
        </motion.div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Available across Ethiopia · Open to full-time, freelance and
          contract roles · All inquiries reviewed personally by Eden
        </p>
      </div>
    </section>
  );
}
