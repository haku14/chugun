import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "itsupufa.ru",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="yandex-verification" content="45b88ab78277b0f9" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favi.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favi.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favi.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
