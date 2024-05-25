import type { Metadata } from "next";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="yandex-verification" content="7d1f6d2e81411212" />
        <meta name="yandex-verification" content="022511a094aaa775" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favi.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favi.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favi.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
