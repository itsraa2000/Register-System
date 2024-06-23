import type { Metadata } from "next";
import "./globals.css";
import UserProvider from "@/components/Provider/UserProvider";
import RegisterModal from "@/components/Modal/RegisterModal";

export const metadata: Metadata = {
  title: "Secret App",
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
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
