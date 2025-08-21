"use client";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

interface SquareCardProps {
    className?: string;
}
  
export const SquareImage: React.FC<SquareCardProps> = ({ className = '' }) => {
    return (
      <motion.div 
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`relative ${className}`}
      >
        <div className="relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] mx-auto lg:mx-0 -mt-8 -ml-8">
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
      </motion.div>
      );
};

export default SquareImage;
