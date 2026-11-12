"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useReveal } from "./use-reveal";
import { cn } from "@/lib/utils";

type Shot = {
  src: string;
  thumb: string;
  title: string;
  caption: string;
  /** grid span classes for editorial layout */
  className?: string;
};

const SHOTS: Shot[] = [
  {
    src: "portfolio/IMG_0204.jpg",
    thumb: "portfolio/IMG_0204-thumb.jpg",
    title: "Studio — Pink Dress",
    caption: "Editorial studio portrait · soft window light",
    className: "col-span-2 md:col-span-2 md:row-span-2",
  },
  {
    src: "portfolio/IMG_0604.jpg",
    thumb: "portfolio/IMG_0604-thumb.jpg",
    title: "Lifestyle 01",
    caption: "Natural light · on-location",
    className: "",
  },
  {
    src: "portfolio/IMG_1296.jpg",
    thumb: "portfolio/IMG_1296-thumb.jpg",
    title: "Lifestyle 02",
    caption: "Off-duty portrait · warm tones",
    className: "",
  },
  {
    src: "portfolio/IMG_3685.jpg",
    thumb: "portfolio/IMG_3685-thumb.jpg",
    title: "Lifestyle 03",
    caption: "Candid · natural setting",
    className: "",
  },
  {
    src: "portfolio/IMG_3981.jpg",
    thumb: "portfolio/IMG_3981-thumb.jpg",
    title: "Closing frame",
    caption: "Final frame · soft grain",
    className: "",
  },
];

export function Gallery() {
  const { ref, isVisible } = useReveal();
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? i : (i - 1 + SHOTS.length) % SHOTS.length
      ),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? i : (i + 1) % SHOTS.length)),
    []
  );

  // Keyboard controls
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, prev, next]);

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`py-24 md:py-32 bg-secondary/40 reveal ${isVisible ? "is-visible" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold block mb-4">
              Portfolio
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl text-foreground leading-tight">
              Selected frames
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A first look at Eden&rsquo;s on-camera range. Tap any frame to
            view full-size. More campaigns available on request.
          </p>
        </div>

        {/* Editorial grid — 2 cols mobile, 4 cols md+. Big cover spans 2x2 on
            desktop, 2 cols (full-width banner) on mobile. Remaining 4 thumbs
            fill the right 2x2 area on desktop and rows 2-3 on mobile. */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[13rem] sm:auto-rows-[15rem] md:auto-rows-[19rem]">
          {SHOTS.map((shot, i) => (
            <motion.button
              key={shot.src}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-muted block focus:outline-none focus-visible:ring-2 focus-visible:ring-gold",
                shot.className
              )}
              aria-label={`Open ${shot.title} — ${shot.caption}`}
            >
              <img
                src={shot.thumb}
                alt={shot.title}
                loading="lazy"
                className="w-full h-full object-cover object-[50%_25%] transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay — stronger at bottom for caption legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/25 to-transparent" />
              {/* Hover zoom */}
              <div className="absolute top-3 right-3 size-9 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="size-4 text-foreground" />
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 inset-x-0 p-4 text-left text-background">
                <div className="font-serif text-base leading-tight drop-shadow-sm">
                  {shot.title}
                </div>
                <div className="text-[11px] uppercase tracking-[0.14em] text-background/70 mt-1">
                  {shot.caption}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`View ${SHOTS[active].title}`}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 size-11 rounded-full bg-background/15 hover:bg-background/25 text-background flex items-center justify-center transition-colors"
            >
              <X className="size-5" />
            </button>

            {/* Prev */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 size-11 rounded-full bg-background/15 hover:bg-background/25 text-background flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="size-5" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 size-11 rounded-full bg-background/15 hover:bg-background/25 text-background flex items-center justify-center transition-colors"
            >
              <ChevronRight className="size-5" />
            </button>

            {/* Image */}
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
            >
              <div className="relative w-full flex-1 min-h-0">
                <img
                  src={SHOTS[active].src}
                  alt={SHOTS[active].title}
                  className="w-full h-full object-contain max-h-[78vh] rounded-lg"
                />
              </div>
              <div className="text-center text-background mt-4 px-4">
                <div className="font-serif text-xl">
                  {SHOTS[active].title}
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-background/70 mt-1">
                  {SHOTS[active].caption} · {active + 1} / {SHOTS.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
