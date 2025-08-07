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
import { usePathname, useRouter } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";


export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showProductsSidebar, setShowProductsSidebar] = useState(false);
  const isMobile = useIsMobile();

  const handleClose = () => {
    setIsSidebarOpen(false);
    setShowProductsSidebar(false);
  };

  const handleBack = () => {
    setShowProductsSidebar(false);
  };

  return (
    <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          onClick={() => setIsSidebarOpen(true)}
          className="hover:bg-transparent transition hover:scale-105 duration-200 rounded-full p-2"
        >
          <Menu className="size-12 bg-none" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-screen px-10 py-10">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold text-[#26294D]" />
        </SheetHeader>

        {/* Verifica se está mostrando os produtos no mobile */}
        {showProductsSidebar && isMobile ? (
          <div className="flex flex-col gap-6">
            {/* Botão voltar */}
            <button
              className="text-left text-[#BB1717] font-medium hover:underline cursor-pointer"
              onClick={handleBack}
            >
              ← Voltar
            </button>

            {/* SidebarProducts renderizada no lugar da navegação principal */}
            <SidebarProducts onClose={handleClose} />
          </div>
        ) : (
          // Menu principal
          <nav className="flex flex-col gap-8 mt-10">
            <Link
              href="/home"
              className={`flex items-center gap-3 text-3xl font-semibold font-poppins transition duration-200 hover:scale-105 hover:text-[#BB1717] ${
                pathname === "/home" || pathname === "/"
                  ? "text-[#BB1717]"
                  : "text-[#26294D]"
              }`}
              onClick={handleClose}
            >
              <Home size={32} />
              Início
            </Link>

            <Link
              href="/about"
              className={`flex items-center gap-3 text-3xl font-medium font-poppins transition duration-200 hover:scale-105 hover:text-[#BB1717] ${
                pathname === "/about"
                  ? "text-[#BB1717]"
                  : "text-[#26294D]"
              }`}
              onClick={handleClose}
            >
              <ImageIcon size={32} />
              Sobre nós
            </Link>

            {/* Lida com a responsividade ao clicar em produtos */}
            <div
              className="relative"
              onMouseEnter={() => {
                if (window.innerWidth >= 768) {
                  setShowProductsSidebar(true); // Desktop
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) {
                  setShowProductsSidebar(false);
                }
              }}
            >
              <button
                className={`flex items-center gap-3 text-3xl font-medium font-poppins transition duration-200 hover:scale-105 hover:text-[#BB1717] cursor-pointer ${
                  pathname === "/products"
                    ? "text-[#BB1717]"
                    : "text-[#26294D]"
                }`}
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setShowProductsSidebar(true); // Mobile → substitui menu
                  }
                  if (!isMobile) {
                    setShowProductsSidebar(false)
                    router.push("/products");
                    setIsSidebarOpen(false);
                  }
                }}
              >
                <Package size={32} />
                Produtos
              </button>

             {/* Apenas desktop: mostra SidebarProducts como menu lateral */}
             {!isMobile && (
                <div
                  className={`fixed left-64 top-0 h-full transition-all duration-300 ease-in-out z-50 ${
                    showProductsSidebar
                      ? "translate-x-0 opacity-100 pointer-events-auto"
                      : "translate-x-10 opacity-0 pointer-events-none"
                  }`}
                >
                  <SidebarProducts onClose={handleClose} />
                </div>
              )}
            </div>
          </nav>
        )}
      </SheetContent>
    </Sheet>
  );
}
