import type { Metadata } from "next";
import { Mitr } from "next/font/google";
import { Pacifico } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";

import PrelineScript from "./components/PrelineScript";
import { CounterProvider } from "@/store/SidebarStore";
import SessionProvider from "./HOC/SessionProvider";

export const metadata: Metadata = {
  title: "Khana Khazana",
  description: "Best vegetarian restaurant in the universe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProvider>
    <CounterProvider>
    <html lang="en">
      <body>{children}</body>
      <PrelineScript />
    </html>
    </CounterProvider>
    </SessionProvider>
  );
}
