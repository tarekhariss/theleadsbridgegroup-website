import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 pt-16">
      <div
        className="text-8xl font-bold mb-4"
        style={{
          background: "linear-gradient(135deg, #1241d3, #4a7de8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        404
      </div>
      <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
      <p className="text-white/45 max-w-sm mb-8">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="px-6 py-3 text-sm font-semibold text-white rounded-lg"
          style={{ background: "#1241d3" }}
        >
          Back to Home
        </Link>
        <Link
          href="/contact/"
          className="px-6 py-3 text-sm font-semibold text-white/60 hover:text-white rounded-lg border border-white/10 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
