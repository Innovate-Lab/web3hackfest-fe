"use client";

import localFont from "next/font/local";
import "./globals.css";
import { DataProvider } from "@/provider/DataContext";
import DefaultLayout from "@/layout/DefaultLayout";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
              <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests" />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SessionProvider>
          <DataProvider>
            <DefaultLayout>
              {children}
              <Toaster />
            </DefaultLayout>
          </DataProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
