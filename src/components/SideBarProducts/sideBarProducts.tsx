"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "../ProductSections/GridProductsSection/types";

interface SidebarProductsProps {
  selectedCategorySlug?: string;
  open?: boolean;
  onClose?: () => void;
}



export const SidebarProducts = ({
  selectedCategorySlug,
  open = true,
  onClose,
}: SidebarProductsProps) => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(
    selectedCategorySlug || null
  );

  const handleProductClick = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
   <div
      className={`transition-all duration-300 flex h-screen ${
        open ? "w-[400px] md:w-[600px] md:mt-26" : "w-0"
      } bg-white text-[#26294D] overflow-y-auto`} // Adicionado overflow-y-auto
      >
      {/* Coluna das categorias */}
      <div className="w-1/2 border-r border-white/10 md:px-6 font-poppins">
      <h2 className="text-xl font-bold mb-4 mt-2">Categorias</h2> 
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li
              key={cat.name}
              onMouseEnter={() => setHoveredCategory(cat.name)}
              className={`cursor-pointer hover:text-[#BB1717] text-lg ${
                hoveredCategory === cat.name ? "text-[#BB1717]" : ""
              }`}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </div>

    {/* Coluna dos produtos */}
    {hoveredCategory && (
      <div className="w-1/3 md:w-1/2 md:px-6">
        <h2 className="text-xl font-bold mb-4 mt-2 font-poppins">Produtos</h2>
        {categories.map(
        (cat) =>
          cat.name === hoveredCategory && (
            <ul key={cat.name} className="space-y-2">
            {cat.products.map((product) => (
              <li key={product.slug}>
                <Link
                href={`/products/${product.slug}`}
                className="hover:underline text-[#26294D] text-lg"
                onClick={handleProductClick}
                >
                {product.name}
                </Link>
              </li>
            ))}
            </ul>
          )
        )}
      </div>
    )}
    </div>
  );
};
