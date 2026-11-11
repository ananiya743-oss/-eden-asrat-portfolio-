import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eden Asrat — Social Media & Video Host · Open to work",
  description:
    "Eden Asrat is a 24-year-old social media & video host based in Addis Ababa, Ethiopia. Open to full-time, freelance and contract roles across Ethiopia. Contact +251 940 938 770 · @Eddieas21",
  keywords: [
    "Eden Asrat",
    "social media host",
    "video host",
    "content creator",
    "live stream host",
    "brand ambassador",
    "event MC",
    "portfolio",
    "CV",
    "resume",
    "Eddieas21",
    "Ethiopia",
    "Addis Ababa",
  ],
  authors: [{ name: "Eden Asrat" }],
  openGraph: {
    title: "Eden Asrat — Social Media & Video Host · Open to work",
    description:
      "Portfolio & CV of Eden Asrat — social media & video host based in Addis Ababa, Ethiopia. Open to opportunities across Ethiopia. Contact +251 940 938 770 · @Eddieas21",
    siteName: "Eden Asrat",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eden Asrat — Social Media & Video Host",
    description:
      "Portfolio & CV of Eden Asrat — social media & video host based in Addis Ababa, Ethiopia. Open to work.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
