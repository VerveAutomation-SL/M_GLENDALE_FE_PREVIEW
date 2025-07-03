import React from "react";
import { Presentation } from "lucide-react";

const PreviewButton = () => {
  const onClick = () => {
    window.open(
      "https://www.figma.com/proto/WgwIQPo8YS0wXgfacLBdn2/Hotel-Services-UI?node-id=1-155&p=f&t=1UZ8Rk0u5izbcpTg-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A155d",
      "_blank"
    );
  };

  return (
    <button
      className="flex items-center gap-1 sm:gap-2 md:gap-3
                text-[10px] sm:text-sm md:text-base
                px-1 sm:px-3 md:px-3 lg:px-3
                py-1 sm:py-2
                bg-purple-600 hover:bg-purple-700 
                rounded-lg transition-all duration-200"
      onClick={onClick}
    >
      <Presentation className="w-2 h-2 sm:w-4 sm:h-4 md:w-5 md:h-5" />
      <span className="whitespace-nowrap">Figma Preview</span>
    </button>
  );
};

export default PreviewButton;
