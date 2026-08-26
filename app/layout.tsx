import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CLEATO",
  description:
    "CLEATO gives footballers access to quality football boots at better prices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}