"use client";
import React from "react";

interface NutritionSectionProps {
  nutrition?: {
    portion: string;
    items: { name: string; amount: string; dailyValue: string }[];
    legend: string[];
  };
  ingredients?: {
    list?: string;
    legend: string[];
    codes?: { ean?: string; dun?: string; sku?: string; validity?: string };
  };
}

export function NutritionSection({ nutrition, ingredients }: NutritionSectionProps) {
  if (!nutrition && !ingredients) return null;

  return (
    <div
      className={`container mx-auto my-10 grid grid-cols-1 ${
        nutrition ? "md:grid-cols-2" : "text-center max-w-5xl"
      } gap-8`}
    >
      {/* Informação Nutricional */}
      {nutrition && (
        <div>
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-[#223872]">Informação Nutricional</h2>
            <p className="text-md text-[#223872]">{nutrition.portion}</p>
          </div>
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-[#bb1717] text-white">
                <th className="p-2 text-left">Quantidade por porção</th>
                <th className="p-2"></th>
                <th className="p-2">% VD(*)</th>
              </tr>
            </thead>
            <tbody>
              {nutrition.items.map((item, idx) => (
                <tr key={idx} className="border-t">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">{item.amount}</td>
                  <td className="p-2">{item.dailyValue}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-2 text-sm text-gray-800 space-y-1">
            {nutrition.legend.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
        </div>
      )}

      {/* Ingredientes */}
      {ingredients && (
        <div>
          <h2 className="text-2xl font-bold mb-2 text-[#223872]">Lista de Ingredientes</h2>
          <p className="text-md mb-3">{ingredients.list}</p>
          <div className="text-sm text-[#223872] space-y-1">
            {ingredients.legend.map((l, i) => (
              <p key={i}>{l}</p>
            ))}
          </div>
          <div className="mt-4 text-sm">
            {ingredients.codes?.ean && <p>Código EAN: {ingredients.codes.ean}</p>}
            {ingredients.codes?.dun && <p>Código DUN: {ingredients.codes.dun}</p>}
            {ingredients.codes?.sku && <p>Código SKU: {ingredients.codes.sku}</p>}
            {ingredients.codes?.validity && <p>Validade: {ingredients.codes.validity}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
