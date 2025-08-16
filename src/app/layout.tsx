'use client'
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./theme-context";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [color, setColor] = useState("");

  const setTheme = (theme: string) => {
    setColor(theme);
  };

  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`${geistSans.variable} min-h-full theme-${color} bg-bgPrimary antialiased`} >
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
