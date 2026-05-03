"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stages = [
  { label: "Identify", value: 1200, unit: "accounts", color: "#1241d3" },
  { label: "Research", value: 850, unit: "enriched", color: "#1a50e8" },
  { label: "Outreach", value: 320, unit: "sequences", color: "#2d65f0" },
  { label: "Replies", value: 89, unit: "interested", color: "#4a7de8" },
  { label: "Meetings", value: 12, unit: "booked / wk", color: "#6b9eff" },
];

function CountUp({ target, duration = 1.5 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = (Date.now() - start) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * ease));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const formatted = target >= 1000 ? `${(count / 1000).toFixed(count >= 1000 ? 1 : 0)}k` : count.toString();
  const display = target >= 1000 ? (count >= 1000 ? `${(count / 1000).toFixed(1)}k` : count.toString()) : count.toString();

  return <span ref={ref}>{display}</span>;
}

export function PipelineDiagram() {
  return (
    <div className="w-full">
      {/* Stage bars */}
      <div className="flex items-end gap-0 w-full">
        {stages.map((stage, i) => {
          const heightPct = 30 + (stages.length - i) * 12;
          return (
            <div key={stage.label} className="flex-1 flex flex-col items-center">
              {/* Value label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
                className="mb-2 text-center"
              >
                <div
                  className="text-lg md:text-2xl font-bold"
                  style={{ color: stage.color }}
                >
                  <CountUp target={stage.value} />
                </div>
                <div className="text-[10px] text-white/35 mt-0.5">{stage.unit}</div>
              </motion.div>

              {/* Bar */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  height: `${heightPct}px`,
                  transformOrigin: "bottom",
                  background: `linear-gradient(to top, ${stage.color}, ${stage.color}60)`,
                  borderRadius: "6px 6px 0 0",
                  width: "100%",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Shimmer */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                    animation: `shimmer ${1.5 + i * 0.3}s linear infinite`,
                    backgroundSize: "200% 100%",
                  }}
                />
              </motion.div>

              {/* Stage label */}
              <div
                className="w-full py-2 text-center"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span className="text-[10px] md:text-xs font-medium text-white/40">
                  {stage.label}
                </span>
              </div>

              {/* Arrow connector */}
              {i < stages.length - 1 && (
                <div className="hidden" />
              )}
            </div>
          );
        })}
      </div>

      {/* Flow arrows row */}
      <div className="flex items-center mt-1 px-1">
        {stages.slice(0, -1).map((_, i) => (
          <div key={i} className="flex-1 flex items-center justify-center">
            <div
              className="h-px flex-1 relative overflow-hidden"
              style={{ background: "rgba(18,65,211,0.2)" }}
            >
              <div
                className="absolute top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                style={{
                  background: "#1241d3",
                  boxShadow: "0 0 6px rgba(18,65,211,0.8)",
                  animation: `flow-particle ${1.8 + i * 0.2}s ease-in-out infinite`,
                  animationDelay: `${i * 0.35}s`,
                  left: 0,
                }}
              />
            </div>
            <div className="text-white/15 text-xs px-1">›</div>
          </div>
        ))}
        <div className="flex-1" />
      </div>
    </div>
  );
}

// ─── Horizontal pipeline for detail pages ────────────────────────────
export function PipelineFlow({
  steps,
}: {
  steps: { label: string; description: string }[];
}) {
  return (
    <div className="flex flex-col md:flex-row gap-0 w-full">
      {steps.map((step, i) => (
        <div key={step.label} className="flex md:flex-col items-start md:items-center flex-1">
          <div className="flex md:flex-col items-center gap-3 md:gap-0 w-full">
            {/* Node */}
            <div className="flex items-center md:flex-col md:w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                style={{
                  background: "linear-gradient(135deg, #1241d3, #1a50e8)",
                  boxShadow: "0 0 20px rgba(18,65,211,0.4)",
                }}
              >
                {i + 1}
              </motion.div>

              {/* Connector line */}
              {i < steps.length - 1 && (
                <div
                  className="hidden md:block h-px flex-1 mx-2 relative overflow-hidden"
                  style={{ background: "rgba(18,65,211,0.25)", minWidth: 0 }}
                >
                  <div
                    className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                    style={{
                      background: "#1241d3",
                      boxShadow: "0 0 8px rgba(18,65,211,0.8)",
                      animation: `flow-particle 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.4}s`,
                      left: 0,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Text */}
            <div className="mt-3 md:text-center px-1">
              <p className="text-xs font-semibold text-white">{step.label}</p>
              <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{step.description}</p>
            </div>
          </div>

          {/* Mobile vertical connector */}
          {i < steps.length - 1 && (
            <div
              className="md:hidden w-px h-8 ml-4"
              style={{ background: "rgba(18,65,211,0.25)" }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
