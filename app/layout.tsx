import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Suspense } from "react";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
  weight: ["400", "600", "700", "800"],
  style: ["normal", "italic"],
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

const siteUrl = "https://penchala3589.github.io/resume-website";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Krishna Madhiraju — Senior Quality Consultant",
  description:
    "Senior QA Consultant with 12+ years in Salesforce, Oracle ERP, API and integration testing. Helping organisations ship faster with fewer defects.",
  keywords: [
    "Senior Quality Consultant",
    "QA Consultant",
    "Salesforce Testing",
    "Oracle Cloud ERP Testing",
    "API Testing",
    "AI-Augmented Testing",
    "Test Analyst Wellington",
    "QA Consultant New Zealand",
    "Playwright Automation",
    "ISTQB",
  ],
  authors: [{ name: "Krishna Madhiraju" }],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Krishna Madhiraju — Senior Quality Consultant",
    description:
      "12+ years helping enterprise teams ship confidently — Salesforce, Oracle ERP, API & integration testing, AI exploration.",
    type: "website",
    url: siteUrl,
    siteName: "Krishna Madhiraju",
    images: [
      {
        url: "/professional-headshot-of-krishna-madhiraju-softwar.jpg",
        width: 800,
        height: 800,
        alt: "Krishna Madhiraju — Senior Quality Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Krishna Madhiraju — Senior Quality Consultant",
    description:
      "12+ years helping enterprise teams ship confidently — Salesforce, Oracle ERP, API & integration testing.",
    images: ["/professional-headshot-of-krishna-madhiraju-softwar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Krishna Madhiraju",
  jobTitle: "Senior Quality Consultant",
  description:
    "Senior QA Consultant with 12+ years helping enterprise organisations ship confidently through strategic test leadership, Salesforce testing, Oracle Cloud ERP testing, and API integration testing.",
  url: siteUrl,
  email: "krishna3589@gmail.com",
  telephone: "+64212999930",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wellington",
    addressCountry: "NZ",
  },
  image: `${siteUrl}/professional-headshot-of-krishna-madhiraju-softwar.jpg`,
  sameAs: [
    "https://linkedin.com/in/krishna-madhiraju",
    "https://github.com/krishna-madhiraju",
  ],
  knowsAbout: [
    "Salesforce Testing",
    "Oracle Cloud ERP Testing",
    "API Testing",
    "Playwright Automation",
    "Integration Testing",
    "UAT",
    "Risk-Based QA",
    "Agile Testing",
    "AI-Augmented Testing",
    "Defect Management",
    "SQL",
    "Postman",
    "Rest Assured",
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      name: "Salesforce Certified AI Associate",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "Professional Scrum Master I (PSM I)",
    },
    {
      "@type": "EducationalOccupationalCredential",
      name: "ISTQB Foundation Level",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "TTC Australia",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`font-sans antialiased ${dmSans.variable} ${playfairDisplay.variable} ${jetbrainsMono.variable}`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  );
}
