'use client'

import RegisterModal from "@/components/Modal/RegisterModal";
import Image from "next/image";
import { useCallback, useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
      setIsOpen((value) => !value);
  }, []);

  return (
    <>
    <main>
      <h1>Page</h1>
    </main>
    </>
  );
}
