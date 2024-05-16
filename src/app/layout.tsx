import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";
import { Navbar } from "@/components/layout/Navbar/navbar.component";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arthur Fernandez",
  description: "Portfolio do desenvolvedor Arthur Fernandez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={montserrat.className}>
       <Navbar />
        {children}
      </body>
    </html>
  );
}
