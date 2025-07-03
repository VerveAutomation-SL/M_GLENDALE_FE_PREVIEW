import React from "react";
import type { PageType } from "@/types/pageContents";
// import PreviewButton from "./previewButton";
import { navItems } from "@/types/pageContents";

interface NavBarProps {
  activePage: PageType;
  onPageChange: (page: PageType) => void;
}

const NavBar = ({ activePage, onPageChange }: NavBarProps) => {
  return (
    <nav className="bg-stone-100 shadow-lg sticky top-0 z-50">
      <div className="w-full p-3 flex items-center justify-between gap-2">
        {/*Website Pages Section*/}
        <div className="flex w-full items-center justify-between lg:px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.key}
                className={`flex items-center gap-2 
                            p-1 sm:p-3 md:p-2
                            rounded-lg hover:bg-gray-400
                            transition-all duration-400
                            mx-auto ${
                              activePage === item.key
                                ? "bg-gray-200 text-black"
                                : "bg-transparent text-gray-500"
                            }`}
                onClick={() => onPageChange(item.key)}
              >
                <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="hidden lg:inline">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* Figma Preview Button (Right) */}
        <div>{/* <PreviewButton /> */}</div>
      </div>
    </nav>
  );
};

export default NavBar;
