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
      className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
      onClick={onClick}
    >
      <Presentation className="w-4 h-4" />
      Figma Preview
    </button>
  );
};

export default PreviewButton;
