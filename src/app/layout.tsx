import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Register System App - Test",
  description: "Login and Register System Test - I want to make register application and use backend with next.js , docker and python , django",
  keywords: "Register , Login , System , Frontend , Backend and Next.js", 
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
