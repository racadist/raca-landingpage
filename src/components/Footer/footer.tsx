import React from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#223872] p-6 text-white font-poppins">
      {/* Background decoration (opcional) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-grid-white/[0.05]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start">
              <Image
                src="/img/logo_white.png" 
                alt="Raça Distribuição"
                width={200}
                height={40}
                className="object-cover"
              />
            </div>
            <p className="leading-relaxed text-gray-300">
            Desde 1992, unindo excelência em distribuição de alimentos com eficiência
            logística em todo Pernambuco.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center mt-8">
            <h4 className="mb-4 text-xl font-semibold text-white">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>racadist@racadist.com</p>
              <p>(81) 99323-5218 | (81) 99323-5217 </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-right mt-6">
                <h4 className="mb-4 text-xl font-semibold text-white">Siga-nos</h4>
                <div className="flex items-center justify-center space-x-4 md:justify-end">
                  <a
                    href="https://www.instagram.com/racadistribuicao.pe/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-full bg-white/10 p-3 transition-colors duration-300 hover:bg-white/20"
                  >
                    <Instagram className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
                  <a
                    href="https://www.facebook.com/people/Ra%C3%A7a-Distribui%C3%A7%C3%A3o/61577039849996/?locale=pt_BR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-full bg-white/10 p-3 transition-colors duration-300 hover:bg-white/20"
                   >
                    <Facebook className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/ra%C3%A7a-distribui%C3%A7%C3%A3o/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-full bg-white/10 p-3 transition-colors duration-300 hover:bg-white/20"
                  >
                    <Linkedin className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
            </div>
            <div className="flex items-center justify-center space-x-4 md:justify-end mt-10">
              <Link href="/">
                <p className="cursor-pointer">Home</p>
              </Link>
              <Link href="/about">
                <p className="cursor-pointer">Sobre Nós</p>
              </Link>
              <Link href="/products">
                <p className="cursor-pointer">Produtos</p>
              </Link>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Raça Distribuição. Todos os direitos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
