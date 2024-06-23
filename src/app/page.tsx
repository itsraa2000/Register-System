'use client'

import RegisterModal from "@/components/Modal/RegisterModal";
import Image from "next/image";
import useRegisterModal from "./hooks/useRegisterModal";
import { useCallback, useState } from "react";

export default function Home() {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
      setIsOpen((value) => !value);
  }, []);

  return (
    <>
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-6">
      <h1>Page</h1>
    </main>
    </>
  );
}
