import type { Metadata } from "next";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Background remover",
  description: "High quility background remover app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav
          style={{
            height: "60px",
            width: "100%",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Image
            src="/logo-bg.png"
            width={200}
            height={33}
            alt="logo"
            style={{
              borderRadius: "0 5px 5px 0",
            }}
          />{" "}
          <a
            href="https://github.com/illia-stv/background-remover"
            target="_blank"
          >
            <Image
              src="/github-icon.svg"
              alt="github icon"
              width={30}
              height={30}
              style={{
                cursor: "pointer",
              }}
            />
          </a>
        </nav>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
