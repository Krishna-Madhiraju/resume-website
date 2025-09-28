import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Krishna Madhiraju - Software Test Analyst",
  description:
    "QA Consultant with 12+ years in Salesforce testing, cloud migration, and enterprise quality assurance. I help organisations deliver reliable software faster — with fewer defects and greater confidence.",
  generator: "v0.app",
  keywords: [
    "Software Test Analyst",
    "QA Consultant",
    "Salesforce Testing",
    "Quality Assurance",
    "Test Automation",
  ],
  authors: [{ name: "Krishna Madhiraju" }],
  openGraph: {
    title: "Krishna Madhiraju - Software Test Analyst",
    description:
      "QA Consultant specializing in Salesforce testing and enterprise quality assurance",
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
        <meta
          name="cache-control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta name="pragma" content="no-cache" />
        <meta name="expires" content="0" />
      </head>
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
