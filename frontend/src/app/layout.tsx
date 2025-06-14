import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ResponsiveWrapper from "./ResponsiveWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLUEBOX",
  description: "Explore your most intimate desires.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#18181c] min-h-screen flex items-center justify-center`}
        style={{ minHeight: "100vh", background: "#18181c" }}
      >
        <ResponsiveWrapper>{children}</ResponsiveWrapper>
      </body>
    </html>
  );
}
