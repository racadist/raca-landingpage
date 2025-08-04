"use client";

import { useState } from "react";
import Link from "next/link";
import { categories } from "../ProductSections/GridProducts/types";

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
        open ? "w-[600px]" : "w-0"
      } bg-white text-[#26294D] overflow-hidden`}
    >
      {/* Coluna das categorias */}
      <div className="w-1/2 border-r border-white/10 py-10 px-6 font-poppins">
        <h2 className="text-xl font-bold mb-4 mt-6">Categorias</h2>
        <ul className="space-y-3">
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
      <div className="w-1/2 py-10 px-6">
        <h2 className="text-xl font-bold mb-4 mt-6 font-poppins">Produtos</h2>
        {categories.map(
        (cat) =>
          cat.name === hoveredCategory && (
            <ul key={cat.name} className="space-y-3">
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
