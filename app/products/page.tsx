import { SegmentsSection, ContactMapSection, TopBar, GridProducts } from "@/components";

export default function Products() {
    return (
        <div className="relative">
            <TopBar menuButtonColor="[#26294D]" />
            <h1 className="text-3xl sm:text-5xl font-extrabold font-poppins mt-24 mb-6 text-center">
                Explore nossos produtos
            </h1>
            <GridProducts />
            <SegmentsSection />
            <ContactMapSection />
        </div>
    );
}