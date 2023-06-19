import { useIdiomas } from "@/hooks/idiomas";
import Link from "next/link";
import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {};

export default function ButtonWsp({}: Props) {
  
  const t = useIdiomas({});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link href="https://api.whatsapp.com/send?phone=5491136317470" passHref>
        <div>
          <div
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-green-500 hover:bg-green-500 text-white font-bold py-4 px-4 rounded-full"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <FaWhatsapp className="text-white text-4xl" />
            {isHovered && (
              <div className="ml-2 hidden md:inline-block">{t.wsp}</div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
