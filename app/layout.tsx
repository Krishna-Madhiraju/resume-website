import type React from "react";
import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  variable: "--font-dm-serif-display",
  display: "swap",
  weight: "400",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krishna Madhiraju — Senior Quality Consultant",
  description:
    "Senior QA Consultant with 12+ years in Salesforce, Oracle ERP, API and integration testing. Helping organisations ship faster with fewer defects.",
  keywords: [
    "Senior Quality Consultant",
    "QA Consultant",
    "Salesforce Testing",
    "Oracle ERP Testing",
    "API Testing",
    "AI Testing",
    "Test Analyst Wellington",
  ],
  authors: [{ name: "Krishna Madhiraju" }],
  openGraph: {
    title: "Krishna Madhiraju — Senior Quality Consultant",
    description:
      "12+ years helping enterprise teams ship confidently — Salesforce, Oracle ERP, API & integration testing, AI exploration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="cache-control" content="no-cache, no-store, must-revalidate" />
        <meta name="pragma" content="no-cache" />
        <meta name="expires" content="0" />
      </head>
      <body
        className={`font-sans antialiased ${dmSans.variable} ${dmSerifDisplay.variable} ${jetbrainsMono.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
