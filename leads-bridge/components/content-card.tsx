"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  href: string;
  eyebrow?: string;
  title: string;
  excerpt: string;
  tags?: string[];
  meta?: string;
  className?: string;
  variant?: "default" | "featured";
  index?: number;
}

export function ContentCard({
  href,
  eyebrow,
  title,
  excerpt,
  tags,
  meta,
  className,
  variant = "default",
  index = 0,
}: ContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href={href} className={cn("group block", className)}>
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className={cn("h-full flex flex-col p-6 card-premium", variant === "featured" && "p-7")}
        >
          {/* Hover glow overlay */}
          <div
            className="absolute inset-0 rounded-[20px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(18,65,211,0.07) 0%, transparent 70%)",
            }}
          />

          {eyebrow && (
            <div className="flex items-center gap-1.5 mb-3">
              <div className="brand-dot" />
              <span className="eyebrow">{eyebrow}</span>
            </div>
          )}

          <h3
            className={cn(
              "font-semibold text-white leading-snug group-hover:text-white transition-colors relative",
              variant === "featured" ? "text-lg md:text-xl" : "text-base"
            )}
          >
            {title}
          </h3>

          <p
            className={cn(
              "mt-3 text-white/40 leading-relaxed relative",
              variant === "featured" ? "text-sm" : "text-sm"
            )}
          >
            {excerpt}
          </p>

          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5 relative">
              {tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] rounded-md text-white/35"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex items-center justify-between relative pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
            {meta && (
              <span className="text-[11px] text-white/25">{meta}</span>
            )}
            <div
              className="flex items-center gap-1.5 text-xs font-semibold group-hover:gap-2 transition-all ml-auto"
              style={{ color: "#4a7de8" }}
            >
              View
              <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
