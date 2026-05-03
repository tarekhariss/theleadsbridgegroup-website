import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with The Leads Bridge Group. Book a consultation to discuss your B2B business development goals and how we can help accelerate your growth.",
  openGraph: {
    title: "Contact | The Leads Bridge Group",
    description:
      "Book a consultation with The Leads Bridge Group to discuss your B2B business development goals.",
  },
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@theleadsbridgegroup.com",
    href: "mailto:hello@theleadsbridgegroup.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (800) 555-0190",
    href: "tel:+18005550190",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "New York, NY",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 1 business day",
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-24">
      <div className="container-wide">
        <div className="max-w-2xl mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-1 rounded-full" style={{ background: "#1241d3" }} />
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#4a7de8" }}>
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Talk About Your Growth
          </h1>
          <p className="mt-5 text-base text-white/45 leading-relaxed">
            Every engagement starts with a conversation. Tell us where you are, where you want to go, and we&apos;ll tell you exactly how we&apos;d get you there.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-8"
              style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h2 className="text-lg font-bold text-white mb-6">Book a Strategic Discussion</h2>
              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-3.5 py-2.5 text-sm text-white placeholder-white/20 rounded-lg outline-none transition-colors focus:border-white/25"
                      style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.1)" }}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-white/40 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Smith"
                      className="w-full px-3.5 py-2.5 text-sm text-white placeholder-white/20 rounded-lg outline-none transition-colors focus:border-white/25"
                      style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.1)" }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full px-3.5 py-2.5 text-sm text-white placeholder-white/20 rounded-lg outline-none transition-colors focus:border-white/25"
                    style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full px-3.5 py-2.5 text-sm text-white placeholder-white/20 rounded-lg outline-none transition-colors focus:border-white/25"
                    style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/40 mb-2">
                    What are your primary growth goals?
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your current situation and what you're trying to achieve..."
                    className="w-full px-3.5 py-2.5 text-sm text-white placeholder-white/20 rounded-lg outline-none transition-colors resize-none focus:border-white/25"
                    style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.1)" }}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 text-sm font-semibold text-white rounded-lg transition-opacity hover:opacity-90"
                  style={{ background: "#1241d3" }}
                >
                  Send Message
                </button>
                <p className="text-xs text-center text-white/25">
                  We&apos;ll respond within 1 business day.
                </p>
              </form>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            {contactInfo.map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 rounded-xl p-5"
                style={{ background: "#0a0a0a", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                  style={{ background: "rgba(18,65,211,0.15)" }}
                >
                  <item.icon size={16} style={{ color: "#4a7de8" }} />
                </div>
                <div>
                  <p className="text-xs font-medium text-white/35 mb-0.5">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white/70">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div
              className="rounded-xl p-6 mt-6"
              style={{ background: "rgba(18,65,211,0.08)", border: "1px solid rgba(18,65,211,0.2)" }}
            >
              <h3 className="text-sm font-semibold text-white mb-2">What to Expect</h3>
              <ul className="space-y-2.5">
                {[
                  "30-minute discovery call",
                  "Assessment of your current GTM motion",
                  "Initial recommendations tailored to your situation",
                  "Proposal with engagement options and investment",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-white/45">
                    <div className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#1241d3" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
