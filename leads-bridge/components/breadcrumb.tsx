import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1.5 text-xs text-white/35" aria-label="Breadcrumb">
      <Link href="/" className="hover:text-white/60 transition-colors">
        Home
      </Link>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          <ChevronRight size={12} className="text-white/20" />
          {item.href ? (
            <Link href={item.href} className="hover:text-white/60 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span className="text-white/55">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
