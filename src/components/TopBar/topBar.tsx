"use client";
import Image from "next/image";
import { Sidebar } from "@/components/SideBar/sideBar";
import { Button } from "../ui/button";

interface TopBarProps {
  menuButtonColor?: string;
}

export function TopBar({ menuButtonColor }: TopBarProps) {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-40 bg-white">
      {/* Logo */}
      <div className="relative w-[140px] h-[60px]">
        <Button variant="ghost" className="hover:bg-transparent" onClick={() => window.location.href = '/home'}>                                                                            
        <Image
          src="/img/logo.png"
          alt="Raça Distribuição"
          fill
          className="object-contain"                                                    
          priority
        />
        </Button>
      </div>
      <Sidebar menuButtonColor={menuButtonColor} />
    </header>
  );
}