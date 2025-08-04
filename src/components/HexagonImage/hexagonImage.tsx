import Image from "next/image";
import React from "react";

interface HexagonCardProps {
    className?: string;
}
  
export const HexagonImage: React.FC<HexagonCardProps> = ({ className = '' }) => {
    return (
      <div className={`relative ${className}`}>
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] mx-auto -ml-8 -mt-8">
          <div 
            className="absolute inset-4 sm:inset-8 w-[calc(100%-16px)] sm:w-[calc(100%-32px)] h-[calc(100%-16px)] sm:h-[calc(100%-32px)] mb-4"
            style={{
              clipPath: 'square(25% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)',
              background: '#BB1717',
            }}
          />
          {/* Image container */}
          <div 
            className="absolute inset-8 sm:inset-16 w-80 sm:w-96 h-80 sm:h-96 overflow-hidden"
            style={{
              clipPath: 'square(35% 3%, 75% 3%, 100% 50%, 75% 97%, 25% 97%, 0% 50%)',
            }}
          >
            <Image 
              height={500}
              width={500}
              src="/img/diferencial.png"
              alt="Happy professional woman with laptop"
              className="w-full h-full object-center object-cover"
            />
          </div>
        </div>
      </div>
      );
};

export default HexagonImage;
