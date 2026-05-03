"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Services", href: "/services/" },
  { label: "Case Studies", href: "/case-studies/" },
  { label: "Industries", href: "/industries/" },
  { label: "Use Cases", href: "/use-cases/" },
  { label: "Resources", href: "/resources/" },
];

export function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(0,0,0,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(28px) saturate(180%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(28px) saturate(180%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, #1241d3, #1a50e8)",
                boxShadow: "0 0 16px rgba(18,65,211,0.4)",
              }}
            >
              <span className="text-white font-bold text-sm">LB</span>
            </div>
            <span className="text-white font-semibold text-sm tracking-tight hidden sm:block">
              The Leads Bridge Group
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center">
            <div
              className="flex items-center rounded-full px-1 py-1"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {navLinks.map((link) => {
                const isActive = pathname !== null && (pathname === link.href || pathname.startsWith(link.href.slice(0, -1) + "/"));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-1.5 text-sm rounded-full transition-all duration-200",
                      isActive
                        ? "text-white font-medium"
                        : "text-white/50 hover:text-white"
                    )}
                    style={isActive ? {
                      background: "rgba(255,255,255,0.08)",
                    } : {}}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact/" className="text-sm text-white/50 hover:text-white transition-colors">
              Contact
            </Link>
            <Link href="/contact/" className="btn-primary py-2 px-5 text-xs">
              Book a Strategic Discussion
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white/50 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden"
            style={{
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(28px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2.5 text-sm rounded-xl transition-colors",
                      isActive ? "text-white bg-white/[0.07]" : "text-white/55 hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 mt-2 border-t border-white/[0.06]">
                <Link href="/contact/" className="btn-primary w-full justify-center text-xs">
                  Book a Strategic Discussion
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
