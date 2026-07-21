import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/src/shared/components/providers";
import localFont from "next/font/local";

const yekanBakh = localFont({
  src: [
    {
      path: "../../public/Yekan.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  fallback: ["sans-serif"],
  variable: "--font-yekan-bakh",
  display: "swap",
});

export const metadata: Metadata = {
  title: "پاراف کلاب",
  description: "داشبورد باشگاه مشتریان پاراف",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${yekanBakh.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

