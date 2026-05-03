import Link from "next/link";
import { ArrowRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Lead Generation", href: "/services/lead-generation/" },
    { label: "Business Development", href: "/services/business-development-strategy/" },
    { label: "Pipeline Management", href: "/services/sales-pipeline-management/" },
    { label: "Account-Based Marketing", href: "/services/account-based-marketing/" },
    { label: "Revenue Consulting", href: "/services/revenue-growth-consulting/" },
  ],
  Industries: [
    { label: "Technology & SaaS", href: "/industries/technology-saas/" },
    { label: "Financial Services", href: "/industries/financial-services/" },
    { label: "Healthcare & Life Sciences", href: "/industries/healthcare-life-sciences/" },
    { label: "Professional Services", href: "/industries/professional-services/" },
    { label: "Manufacturing", href: "/industries/manufacturing-industrial/" },
  ],
  Resources: [
    { label: "All Resources", href: "/resources/" },
    { label: "Case Studies", href: "/case-studies/" },
    { label: "Use Cases", href: "/use-cases/" },
    { label: "Industries", href: "/industries/" },
  ],
  Company: [
    { label: "About Us", href: "/about/" },
    { label: "Contact", href: "/contact/" },
    { label: "Privacy Policy", href: "/privacy/" },
    { label: "Terms of Service", href: "/terms/" },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: "rgba(255,255,255,0.06)", background: "#000" }}
    >
      {/* Top glow line */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, rgba(18,65,211,0.35), transparent)" }}
      />

      <div className="container-wide py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #1241d3, #1a50e8)",
                  boxShadow: "0 0 16px rgba(18,65,211,0.4)",
                }}
              >
                <span className="text-white font-bold text-sm">LB</span>
              </div>
              <span className="text-white font-semibold text-sm tracking-tight">
                The Leads Bridge Group
              </span>
            </Link>

            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              Premium B2B business development. We build the pipeline and processes that accelerate enterprise growth.
            </p>

            {/* Stats row */}
            <div className="flex gap-6 mb-7">
              {[
                { v: "180+", l: "Clients" },
                { v: "$240M+", l: "Pipeline" },
                { v: "94%", l: "Retention" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="text-sm font-bold" style={{ color: "#4a7de8" }}>{s.v}</div>
                  <div className="text-[10px] text-white/30 mt-0.5">{s.l}</div>
                </div>
              ))}
            </div>

            <Link href="/contact/" className="btn-primary text-xs py-2 px-4">
              Book a Strategic Discussion
              <ArrowRight size={12} />
            </Link>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <h3 className="text-[10px] font-bold text-white/25 uppercase tracking-widest mb-4">
                  {section}
                </h3>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/40 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs text-white/25">
            © {new Date().getFullYear()} The Leads Bridge Group. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            Premium B2B Business Development · Global Reach
          </p>
        </div>
      </div>
    </footer>
  );
}
