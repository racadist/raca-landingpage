import React from "react";
import { Instagram, Facebook, Youtube, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#26294D] p-6 text-white font-poppins">
      {/* Background decoration (opcional) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full bg-grid-white/[0.05]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <Image
                src="/img/logo.png" // Certifique-se de que essa imagem está no public/img
                alt="Raça Distribuição"
                width={160}
                height={40}
                className="object-contain"
              />
            </div>
            <p className="leading-relaxed text-gray-300">
              Desde 1992 atuando com excelência na distribuição de alimentos,
              conectando marcas e clientes por toda Pernambuco.
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <h4 className="mb-4 text-xl font-semibold text-white">Contato</h4>
            <div className="space-y-2 text-gray-300">
              <p>contato@racadistribuicao.com.br</p>
              <p>(81) 99999-9999</p>
              <p>📍 Recife, PE</p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-right">
                <h4 className="mb-4 text-xl font-semibold text-white">Siga-nos</h4>
                <div className="flex items-center justify-center space-x-4 md:justify-end">
                  <a
                    href="#"
                    className="group rounded-full bg-white/10 p-3 transition-colors duration-300 hover:bg-white/20"
                  >
                    <Instagram className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
                  <a
                    href="#"
                    className="group rounded-full bg-white/10 p-3 transition-colors duration-300 hover:bg-white/20"
                   >
                    <Facebook className="h-5 w-5 transition-transform group-hover:scale-110" />
                  </a>
                  <a
                    href="#"
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
