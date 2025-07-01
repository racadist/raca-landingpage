import { Check } from "lucide-react";
import { Button } from "../ui/button";

export function SectionAbout() {
    return (
        <div className="container mx-auto px-4 mt-20">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                    <img 
                    src="path_to_image.jpg" 
                    alt="Descrição da imagem" 
                    className="w-full h-auto object-cover" 
                    />
                </div>
                <div className="flex-1">
                    <h3 className="text-4xl font-medium font-comic-neue text-muted-foreground">Conheça um pouco sobre a gente</h3>
                    <h1 className="text-5xl font-extrabold text-[#0B1A2A] font-poppins"> A única distribuidora Itambé de PE</h1>
                    <p className="text-lg max-w-2xl text-[#BB1717] font-poppins mt-6">
                        Lorem ipsum is simply free text used by copytypinh refreshing.
                        Neque porro est qui                   
                    </p>
                    <p className="text-lg max-w-2xl text-muted-foreground font-poppins mt-6">
                        There are many variations of passages of lorem ipsum available but the
                        majority have suffered alteration in some form by injected humor or
                        random word which don’t look even.
                    </p>
                    <div className="mt-6 space-y-4 font-semibold font-poppins text-xl">
                        <div className="flex items-center space-x-2">
                            <Check className="text-[#24306B]" />
                            <span>Suspe ndisse suscipit sagittis leo</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="text-[#24306B]" />
                            <span>Suspe ndisse suscipit sagittis leo</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Check className="text-[#24306B]" />
                            <span>Suspe ndisse suscipit sagittis leo</span>
                        </div>
                    </div>
                    <Button size="lg" className="bg-[#BB1717] text-white mt-6 hover:bg-[#BB1717]/90 transition-colors trasition hover:scale-110 cursor-pointer font-poppins">
                        Saiba mais
                    </Button>
                </div>
            </div>
        </div>
    );
 }