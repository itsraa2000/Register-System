import type { Metadata } from "next";
import "./globals.css";

import UserProvider from "@/components/Provider/UserProvider";
import ToasterProvider from "@/components/Provider/ToastProvider";
import RegisterModal from "@/components/Modal/RegisterModal";
import LoginModal from "@/components/Modal/LoginModal";
import Navbar from "@/components/navbar/Navbar";
import getCurrentUser from "./action/getCurrentUser";


export const metadata: Metadata = {
  title: "Secret App",
  description: "Login and Register System Test - I want to make register application and use backend with next.js , docker and python , django",
  keywords: "Register , Login , System , Frontend , Backend and Next.js", 
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body>
        <UserProvider>
          <ToasterProvider />
          <RegisterModal />
          <LoginModal />
          <Navbar currentUser={currentUser} />
        </UserProvider>
        {children}
      </body>
    </html>
  );
}
