"use client";
import { useState } from "react";
import NavBar from "@/components/navBar";
import { pageData, type PageType } from "@/types/pageContents";
import DesignPreview from "@/components/designPreview";

export default function HomePage() {
  const [activePage, setActivePage] = useState<PageType>("home");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <NavBar activePage={activePage} onPageChange={setActivePage} />
      <DesignPreview content={pageData[activePage]} />
    </div>
  );
}
