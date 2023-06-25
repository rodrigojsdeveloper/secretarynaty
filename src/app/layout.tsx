"use client";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Teste Secretária Naty",
  description: "Esse é um teste da empresa Secretária Naty",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </body>
    </html>
  );
}
