import React from "react";
import type { PageType } from "@/types/pageContents";
import PreviewButton from "./previewButton";
import { navItems } from "@/types/pageContents";

interface NavBarProps {
  activePage: PageType;
  onPageChange: (page: PageType) => void;
}

const NavBar = ({ activePage, onPageChange }: NavBarProps) => {
  return (
    <nav className="bg-stone-100 shadow-lg sticky top-0 z-50">
      <div className="w-full p-4 flex items-center justify-between">
        {/*Website Pages Section*/}
        <div className="flex items-center justify-between">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-400 ${
                  activePage === item.key
                    ? "bg-gray-200 text-black"
                    : "bg-transparent text-gray-500"
                }`}
                onClick={() => onPageChange(item.key)}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Figma Preview Button (Right) */}
        <div>
          <PreviewButton />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
