"use client";

import { motion } from "framer-motion";

const activities = [
  {
    id: 1,
    type: "meeting",
    title: "Meeting booked",
    role: "CFO",
    company: "Saudi Aramco",
    location: "Saudi Arabia",
    time: "2m ago",
    color: "#22c55e",
  },
  {
    id: 2,
    type: "reply",
    title: "Interested reply",
    role: "VP Operations",
    company: "HSBC Global",
    location: "United Kingdom",
    time: "14m ago",
    color: "#4a7de8",
  },
  {
    id: 3,
    type: "qualified",
    title: "Lead qualified",
    role: "CTO",
    company: "Scale.ai",
    location: "UAE",
    time: "1h ago",
    color: "#a78bfa",
  },
  {
    id: 4,
    type: "report",
    title: "Weekly report ready",
    role: "GCC Campaign",
    company: "Week 8 Summary",
    location: "Performance +34%",
    time: "3h ago",
    color: "#f59e0b",
  },
];

const typeIcon: Record<string, string> = {
  meeting: "↗",
  reply: "↩",
  qualified: "✓",
  report: "■",
};

export function ActivityPanel() {
  return (
    <div
      style={{
        perspective: "800px",
        transformStyle: "preserve-3d",
        animation: "slide-in-right 0.9s cubic-bezier(0.16,1,0.3,1) 0.2s both",
      }}
      className="w-full max-w-sm"
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: "rgba(8, 8, 8, 0.9)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          boxShadow:
            "0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), 0 0 60px rgba(18,65,211,0.1)",
        }}
      >
        {/* Header */}
        <div
          className="px-4 py-3 flex items-center justify-between"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        >
          <div className="flex items-center gap-2">
            <div className="live-dot" />
            <span className="text-xs font-semibold text-white/70">
              Pipeline Activity
            </span>
          </div>
          <div className="flex items-center gap-1">
            {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c, opacity: 0.6 }} />
            ))}
          </div>
        </div>

        {/* Activity items */}
        <div className="p-3 space-y-2">
          {activities.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-start gap-3 rounded-xl p-3"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0 mt-0.5"
                style={{ background: `${a.color}20`, color: a.color }}
              >
                {typeIcon[a.type]}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-white truncate">{a.title}</span>
                  <span className="text-[10px] text-white/30 shrink-0">{a.time}</span>
                </div>
                <p className="text-[11px] text-white/45 mt-0.5 truncate">
                  {a.role} · {a.company}
                </p>
                <p className="text-[10px] mt-0.5" style={{ color: a.color, opacity: 0.7 }}>
                  {a.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* KPI strip */}
        <div
          className="px-4 py-3 grid grid-cols-4 gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {[
            { v: "12", l: "Meetings" },
            { v: "34", l: "Replies" },
            { v: "127", l: "Active" },
            { v: "1.2k", l: "Targets" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="text-sm font-bold text-white">{s.v}</div>
              <div className="text-[9px] text-white/30 mt-0.5">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
