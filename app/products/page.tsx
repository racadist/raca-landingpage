"use client";
import { SegmentsSection, ContactMapSection, GridProducts } from "@/components";

export default function Products() {
    return (
        <div className="relative">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#223872] font-gilroy mt-24 mb-6 text-center">
                Explore nossos produtos
            </h1>
            <GridProducts />
            <SegmentsSection />
            <ContactMapSection />
        </div>
    );
}