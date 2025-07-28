"use client";

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

export function Sidebar() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className={`hover:bg-transparent transition hover:scale-105 duration-200 rounded-full p-2`}>
          <Menu className="size-12 bg-none"/>
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[260px] rounded-r-2xl px-6 py-10"
      >
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-[#26294D]">
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-8 mt-10">
          <Link
            href="/home"
            className={`flex items-center gap-3 text-xl font-semibold font-poppins transition duration-200 hover:scale-105 hover:text-[#BB1717] ${
              pathname === "/home" || pathname === "/"
                ? "text-[#BB1717]"
                : "text-[#26294D]"
            }`}
          >
            <Home size={24} />
            Início
            {(pathname === "/home" || pathname === "/") && (
              <span className="ml-auto h-8 w-[4px] bg-[#BB1717] rounded-full" />
            )}
          </Link>

          <Link
            href="/about"
            className={`flex items-center gap-3 text-xl font-medium font-poppins transition duration-200 hover:scale-105 hover:text-[#BB1717] ${
              pathname === "/about"
              ? "text-[#BB1717]"
              : "text-[#26294D]"
            }`}
          >
            <ImageIcon size={24} />
            Sobre nós
            {pathname === "/about" && (
              <span className="ml-auto h-8 w-[4px] bg-[#BB1717] rounded-full" />
            )}
          </Link>

          <Link
            href="/products"
            className={`flex items-center gap-3 text-xl font-medium font-poppins transition duration-200 hover:scale-105 hover:text-[#BB1717] ${
              pathname === "/products"
              ? "text-[#BB1717]"
              : "text-[#26294D]"
            }`}
          >
            <Package size={24} />
            Produtos
            {pathname === "/products" && (
              <span className="ml-auto h-8 w-[4px] bg-[#BB1717] rounded-full" />
            )}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
