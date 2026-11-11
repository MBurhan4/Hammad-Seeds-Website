import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hammad Seeds | حماد سیڈز — Local & Imported Seeds, Sahiwal",
  description:
    "Hammad Seeds — Specialists in local and imported seeds for all vegetables and crops. Located at 62 Gulistan Road, Sahiwal, Pakistan.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Preconnect for fast font load */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Noto Nastaliq Urdu — only used for the company name حماد سیڈز */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
