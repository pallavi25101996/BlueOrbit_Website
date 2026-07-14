import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";
import { SITE } from "@/content/site";

// Body: Inter. Headlines: Space Grotesk (confident geometric sans).
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "BlueOrbit — Building the systems ambitious businesses run on",
    template: "%s | BlueOrbit",
  },
  description:
    "BlueOrbit builds enterprise AI products, runs technology delivery, and opens new markets. The technology innovation arm of MyAsia Consulting.",
  keywords: [
    "enterprise AI",
    "AI products",
    "cybersecurity consulting",
    "innovation labs",
    "global market expansion",
    "managed business services",
    "government tenders",
    "MyAsia Consulting",
  ],
  openGraph: {
    title: "BlueOrbit — Building the systems ambitious businesses run on",
    description:
      "Enterprise AI products, technology delivery, and market expansion for companies who've stopped waiting for permission to grow.",
    type: "website",
    siteName: "BlueOrbit",
  },
  // TODO(client): add a proper favicon/OG image export once the real logo
  // is available. app/icon.svg provides a placeholder tab icon for now.
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-electric-blue focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
