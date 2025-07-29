import Image from "next/image";
import React from "react";

interface HexagonCardProps {
    className?: string;
}
  
export const HexagonImage: React.FC<HexagonCardProps> = ({ className = '' }) => {
    return (
      <div className={`relative ${className}`}>
        {/* hexagon container */}
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] mx-auto">
          {/* <div 
        className="absolute inset-0 w-full h-full"
        style={{
          clipPath: 'polygon(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)',
          background: '#0B1623',
        }}
          /> */}
          
          <div 
            className="absolute inset-4 sm:inset-8 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] h-[calc(100%-16px)] sm:h-[calc(100%-32px)] mb-4"
            style={{
          clipPath: 'square(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)',
          background: '#BB1717',
        }}
          />
          
          {/* Image container */}
          <div 
        className="absolute inset-8 sm:inset-16 w-[calc(100%-32px)] sm:w-[calc(100%-100px)] h-[calc(100%-32px)] sm:h-[calc(100%-108px)] overflow-hidden"
        style={{
          clipPath: 'square(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)',
        }}
          >
        <img 
          src="/img/homem_raça.png"
          alt="Happy professional woman with laptop"
          className="w-full h-full object-cover object-center"
        />
          </div>
        </div>
        
        <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4">
          <div className="w-4 h-4 sm:w-6 sm:h-6 bg-[#BB1717] rounded-full opacity-80"></div>
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-[#BB1717] rounded-full absolute -top-1 sm:-top-2 right-4 sm:right-8 opacity-60"></div>
        </div>
        
        <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6">
          <div className="w-2 h-2 sm:w-5 sm:h-5 bg-[#0B1623] rounded-full"></div>
          <div className="w-3 h-3 sm:w-8 sm:h-8 bg-[#BB1717] rounded-full absolute left-3 sm:left-6 top-1 sm:top-2 opacity-50"></div>
          <div className="w-1 h-1 sm:w-2 sm:h-2 bg-[#BB1717] rounded-full absolute left-5 sm:left-10 -top-0.5 sm:-top-1 opacity-80"></div>
          <div className="w-2 h-2 sm:w-4 sm:h-4 bg-[#0B1623] rounded-full absolute left-9 sm:left-14 top-3 sm:top-6 opacity-20"></div>
        </div>
      </div>
      );
};

export default HexagonImage;
