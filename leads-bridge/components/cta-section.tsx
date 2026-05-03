"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Ready to Build Qualified Pipeline?",
  description = "Join 180+ companies that trust The Leads Bridge Group to drive enterprise B2B growth.",
  primaryLabel = "Book a Strategic Discussion",
  primaryHref = "/contact/",
  secondaryLabel = "View Case Studies",
  secondaryHref = "/case-studies/",
}: CTASectionProps) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(18,65,211,0.1) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(18,65,211,0.5), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(18,65,211,0.25), transparent)",
        }}
      />

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="brand-dot" />
            <span className="eyebrow">Get Started</span>
          </div>

          <h2 className="display-2 text-white mb-5">{title}</h2>

          <p className="text-white/45 text-base md:text-lg leading-relaxed mb-10">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href={primaryHref} className="btn-primary">
                {primaryLabel}
                <ArrowRight size={15} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.01 }}>
              <Link href={secondaryHref} className="btn-secondary">
                {secondaryLabel}
              </Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-10 md:gap-16"
        >
          {[
            { label: "Clients Served", value: "180+" },
            { label: "Pipeline Generated", value: "$240M+" },
            { label: "Client Retention", value: "94%" },
            { label: "Revenue Multiplier", value: "4.2×" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-bold text-gradient-brand">{stat.value}</div>
              <div className="text-xs text-white/30 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
