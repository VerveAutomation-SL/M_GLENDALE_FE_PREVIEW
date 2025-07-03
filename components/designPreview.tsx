import { PageContent } from "@/types/pageContents";
import React from "react";
import Image from "next/image";

interface DesignPreviewProps {
  content: PageContent;
}

const DesignPreview = ({ content }: DesignPreviewProps) => {
  return (
    <div className="w-full bg-black relative">
      <Image
        src={content.imagePath}
        alt={content.title}
        layout="responsive"
        width={1920}
        height={1080}
        className="object-contain"
      />
    </div>
  );
};

export default DesignPreview;
