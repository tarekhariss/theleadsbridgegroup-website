"use client";

import { motion } from "framer-motion";

const marketNodes = [
  { id: 1, label: "New York", top: "28%", left: "14%", color: "#22c55e", delay: 0 },
  { id: 2, label: "London", top: "22%", left: "43%", color: "#4a7de8", delay: 0.1 },
  { id: 3, label: "Frankfurt", top: "25%", left: "52%", color: "#4a7de8", delay: 0.15 },
  { id: 4, label: "Dubai", top: "38%", left: "62%", color: "#f59e0b", delay: 0.2 },
  { id: 5, label: "Mumbai", top: "42%", left: "69%", color: "#a78bfa", delay: 0.25 },
  { id: 6, label: "Singapore", top: "54%", left: "78%", color: "#22c55e", delay: 0.3 },
];

const pipelineStages = [
  { label: "Targeted", value: "1,240", pct: 100, color: "#1241d3" },
  { label: "Contacted", value: "847", pct: 68, color: "#1a50e8" },
  { label: "Engaged", value: "312", pct: 25, color: "#4a7de8" },
  { label: "Meeting", value: "87", pct: 7, color: "#22c55e" },
];

const recentActivity = [
  { id: 1, icon: "↗", title: "Meeting booked", detail: "CFO · Saudi Aramco", time: "2m", color: "#22c55e" },
  { id: 2, icon: "↩", title: "Interested reply", detail: "VP Ops · HSBC Global", time: "14m", color: "#4a7de8" },
  { id: 3, icon: "✓", title: "Lead qualified", detail: "CTO · Scale.ai", time: "1h", color: "#a78bfa" },
];

export function CommandCenter() {
  return (
    <div
      style={{
        animation: "slide-in-right 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both",
      }}
      className="w-full max-w-[400px]"
    >
      <div
        className="rounded-3xl overflow-hidden relative"
        style={{
          background: "rgba(6,6,6,0.97)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow:
            "0 48px 96px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.04), 0 0 80px rgba(18,65,211,0.1), inset 0 1px 0 rgba(255,255,255,0.07)",
        }}
      >
        {/* ── Top bar ── */}
        <div
          className="px-4 py-2.5 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center gap-2">
            <div className="live-dot" />
            <span className="text-[11px] font-semibold text-white/65 tracking-wide">
              BD Command Center
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
              <div
                key={c}
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: c, opacity: 0.55 }}
              />
            ))}
          </div>
        </div>

        {/* ── Mini global map ── */}
        <div
          className="relative overflow-hidden"
          style={{
            height: 130,
            background:
              "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(18,65,211,0.06) 0%, transparent 70%)",
            borderBottom: "1px solid rgba(255,255,255,0.05)",
          }}
        >
          {/* Latitude lines */}
          {[22, 44, 66, 88].map((t) => (
            <div
              key={t}
              className="absolute left-0 right-0 h-px"
              style={{ top: `${t}%`, background: "rgba(255,255,255,0.06)" }}
            />
          ))}
          {/* Longitude lines */}
          {[16, 33, 50, 67, 84].map((l) => (
            <div
              key={l}
              className="absolute top-0 bottom-0 w-px"
              style={{ left: `${l}%`, background: "rgba(255,255,255,0.04)" }}
            />
          ))}

          {/* Connection lines SVG */}
          <svg
            className="absolute inset-0 w-full h-full"
            style={{ opacity: 0.2 }}
          >
            <line x1="14%" y1="28%" x2="43%" y2="22%" stroke="#1241d3" strokeWidth="0.8" strokeDasharray="3 4" />
            <line x1="43%" y1="22%" x2="52%" y2="25%" stroke="#1241d3" strokeWidth="0.8" strokeDasharray="3 4" />
            <line x1="52%" y1="25%" x2="62%" y2="38%" stroke="#1241d3" strokeWidth="0.8" strokeDasharray="3 4" />
            <line x1="62%" y1="38%" x2="69%" y2="42%" stroke="#f59e0b" strokeWidth="0.7" strokeDasharray="2 5" />
            <line x1="69%" y1="42%" x2="78%" y2="54%" stroke="#a78bfa" strokeWidth="0.7" strokeDasharray="2 5" />
            <line x1="43%" y1="22%" x2="62%" y2="38%" stroke="#4a7de8" strokeWidth="0.5" strokeDasharray="2 7" opacity="0.5" />
          </svg>

          {/* Market nodes — CSS animated for immediate visibility */}
          {marketNodes.map((node) => (
            <div
              key={node.id}
              className="absolute"
              style={{
                top: node.top,
                left: node.left,
                transform: "translate(-50%, -50%)",
                animation: `slide-in-up 0.4s cubic-bezier(0.16,1,0.3,1) ${node.delay + 0.3}s both`,
              }}
            >
              {/* Pulse ring */}
              <div
                className="absolute rounded-full"
                style={{
                  width: 18,
                  height: 18,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: node.color,
                  opacity: 0.12,
                  animation: `pulse-ring 2s ease-out infinite`,
                  animationDelay: `${node.delay}s`,
                }}
              />
              {/* Core dot */}
              <div
                className="w-2 h-2 rounded-full relative z-10"
                style={{
                  background: node.color,
                  boxShadow: `0 0 6px ${node.color}`,
                }}
              />
              {/* Label */}
              <div
                className="absolute text-[8px] font-medium whitespace-nowrap"
                style={{ top: 10, left: 4, color: "rgba(255,255,255,0.4)" }}
              >
                {node.label}
              </div>
            </div>
          ))}

          {/* Active markets badge */}
          <div
            className="absolute bottom-2 right-3 text-[9px] font-semibold"
            style={{ color: "#1241d3" }}
          >
            6 Active Markets
          </div>
        </div>

        {/* ── Pipeline funnel ── */}
        <div
          className="px-4 py-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[9px] font-bold uppercase tracking-widest text-white/25">
              Pipeline Funnel
            </span>
            <span className="text-[9px] text-white/20">This Month</span>
          </div>
          <div className="space-y-1.5">
            {pipelineStages.map((stage, i) => (
              <div key={stage.label} className="flex items-center gap-2">
                <div className="text-[9px] text-white/30 w-14 shrink-0">{stage.label}</div>
                <div
                  className="flex-1 h-1.5 rounded-full overflow-hidden"
                  style={{ background: "rgba(255,255,255,0.05)" }}
                >
                  <motion.div
                    className="h-full rounded-full"
                    style={{ background: stage.color }}
                    initial={{ width: 0 }}
                    animate={{ width: `${stage.pct}%` }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <div className="text-[9px] font-semibold text-white/40 w-8 text-right shrink-0">
                  {stage.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Recent activity ── */}
        <div className="p-3 space-y-2">
          {recentActivity.map((a, i) => (
            <div
              key={a.id}
              className="flex items-center gap-2.5 rounded-xl px-3 py-2.5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.05)",
                animation: `slide-in-up 0.45s cubic-bezier(0.16,1,0.3,1) ${0.6 + i * 0.1}s both`,
              }}
            >
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0"
                style={{ background: `${a.color}18`, color: a.color }}
              >
                {a.icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-white/80">{a.title}</span>
                  <span className="text-[9px] text-white/25">{a.time} ago</span>
                </div>
                <p className="text-[10px] text-white/35 truncate">{a.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Bottom KPI strip ── */}
        <div
          className="grid grid-cols-4 gap-px"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            background: "rgba(255,255,255,0.04)",
          }}
        >
          {[
            { v: "87", l: "Meetings" },
            { v: "34%", l: "Reply Rate" },
            { v: "1.2k", l: "Outreach" },
            { v: "94%", l: "Retention" },
          ].map((s) => (
            <div
              key={s.l}
              className="py-3 text-center"
              style={{ background: "#060606" }}
            >
              <div className="text-xs font-bold" style={{ color: "#4a7de8" }}>
                {s.v}
              </div>
              <div className="text-[9px] text-white/25 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
