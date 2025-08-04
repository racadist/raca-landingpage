"use client";
import { useState } from 'react';
import { SidebarProducts } from "../SideBarProducts/sideBarProducts";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader
} from "@/components/ui/sheet";
import { Home, ImageIcon, Package, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { s } from 'motion/react-client';

export function Sidebar() {
  const pathname = usePathname();
  const [showProductsSidebar, setShowProductsSidebar] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleClose = () => {
    setIsSidebarOpen(false);
    setShowProductsSidebar(false);
  };

  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          onClick={() => setIsSidebarOpen(true)}
          className={`hover:bg-transparent transition hover:scale-105 duration-200 rounded-full p-2`}>
          <Menu className="size-12 bg-none"/>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-screen px-10 py-10"
      >
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-[#26294D]">
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-8 mt-10">
          <Link
            href="/home"
            className={`flex items-center gap-3 text-3xl font-semibold font-poppins transition duration-200 hover:scale-105 hover:text-[#BB1717] ${
              pathname === "/home" || pathname === "/"
                ? "text-[#BB1717]"
                : "text-[#26294D]"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <Home size={24} />
            Início
          </Link>

          <Link
            href="/about"
            className={`flex items-center gap-3 text-3xl font-medium font-poppins transition duration-200 hover:scale-105 hover:text-[#BB1717] ${
              pathname === "/about"
              ? "text-[#BB1717]"
              : "text-[#26294D]"
            }`}
            onClick={() => setIsSidebarOpen(false)}
          >
            <ImageIcon size={24} />
            Sobre nós
          </Link>

          <div
              onMouseEnter={() => setShowProductsSidebar(true)}
              onMouseLeave={() => setShowProductsSidebar(false)}
              className="relative"
            >
              <Link
                href="/products"
               className={`flex items-center gap-3 text-3xl font-medium font-poppins transition duration-200 hover:scale-105 hover:text-[#BB1717] ${
                pathname === "/products"
                  ? "text-[#BB1717]"
                  : "text-[#26294D]"
                }`}
              >
                <Package size={24} />
                Produtos
              </Link>
                {/* Sidebar de produtos como submenu */}
                <div
                  className={`fixed left-64 top-0 h-full transition-all duration-300 ease-in-out ${
                  showProductsSidebar
                    ? 'translate-x-0 opacity-100 pointer-events-auto'
                    : 'translate-x-10 opacity-0 pointer-events-none'
                  }`}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <SidebarProducts onClose={handleClose} />
                </div>
              
            </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
