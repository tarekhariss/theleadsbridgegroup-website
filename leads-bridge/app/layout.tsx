import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--app-font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://theleadsbridgegroup.com"),
  title: {
    default: "The Leads Bridge Group | Premium B2B Business Development",
    template: "%s | The Leads Bridge Group",
  },
  description:
    "The Leads Bridge Group is a premium B2B business development company helping companies build qualified pipeline, accelerate revenue growth, and scale their sales operations.",
  keywords: [
    "B2B lead generation",
    "business development",
    "sales pipeline",
    "account-based marketing",
    "revenue growth",
    "B2B consulting",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "The Leads Bridge Group",
    title: "The Leads Bridge Group | Premium B2B Business Development",
    description:
      "Premium B2B business development. We build qualified pipeline and accelerate revenue growth for ambitious companies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Leads Bridge Group | Premium B2B Business Development",
    description:
      "Premium B2B business development. We build qualified pipeline and accelerate revenue growth for ambitious companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
