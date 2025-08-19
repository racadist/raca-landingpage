"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Image from "next/image";
import { categories } from "./types";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SidebarProducts } from "@/components/SideBarProducts/sideBarProducts";

const INITIAL_VISIBLE = 6;

export function GridProducts() {
  const [showAll, setShowAll] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  const visibleCategories = showAll ? categories : categories.slice(0, INITIAL_VISIBLE);

  const handleViewMore = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setIsSidebarOpen(true);
  };

  return (
    <>
      <div className="max-w-8xl mx-auto px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {visibleCategories.map((cat, idx) => {
            const realIdx = showAll ? idx : idx;
            return (
              <div
                key={realIdx}
                className="flex flex-col overflow-hidden shadow-lg"
              >
                <div className="relative group">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    width={400}
                    height={300}
                    className="h-90 w-full group-hover:scale-105 transition-transform duration-300 object-cover"
                  />

                  <div className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-75 rounded-xl" />

                  <div className="absolute bottom-0 left-0 w-full px-2 py-3 bg-gradient-to-t from-black/30 to-transparent">
                    <h3 className="text-3xl font-poppins font-extrabold text-[#223872] drop-shadow-lg">{cat.name}</h3>
                  </div>

                  <div className="absolute top-4 right-4 z-20">
                    <Button
                      onClick={() => handleViewMore(cat.name)}
                      className="bg-[#223872] text-sm font-semibold font-poppins text-white px-4 py-1 rounded-full shadow hover:bg-[#26294D] transition cursor-pointer"
                    >
                      Ver mais
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {categories.length > INITIAL_VISIBLE && !showAll && (
          <div className="flex justify-center mt-8">
            <Button
              onClick={() => setShowAll(true)}
              className="bg-[#223872] text-white px-6 py-2 rounded-full shadow hover:bg-[#26294D] transition font-bold cursor-pointer"
            >
              Ver mais categorias
            </Button>
          </div>
        )}
      </div>

      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-[600px] p-0">
          <SidebarProducts 
            selectedCategorySlug={selectedCategory} 
            onClose={() => setIsSidebarOpen(false)}
          />
        </SheetContent>
      </Sheet>
    </>
  );
}