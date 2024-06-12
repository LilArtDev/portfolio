import { NavbarProvider } from "@/components/layout/Navbar/context/navbar.context";
import { Navbar } from "@/components/layout/Navbar/navbar.component";
import "@/shared/styles/globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import React from "react";

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
        <NavbarProvider>
          <Navbar />
        </NavbarProvider>
        {children}
      </body>
    </html>
  );
}
