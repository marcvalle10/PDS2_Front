import React from "react";
import { Bentham } from "next/font/google";

// Configurar la fuente Bentham
const bentham = Bentham({
  weight: "400",
  subsets: ["latin"],
});

interface NavigationTabsProps {
  activeTab: "roles" | "historico";
  onTabChange: (tab: "roles" | "historico") => void;
}

export function NavigationTabs({ activeTab, onTabChange }: NavigationTabsProps) {
  return (
    <div className="bg-[#E6B10F] text-white px-3 sm:px-6 shadow-sm">
      <div className="flex">
        <button
          onClick={() => onTabChange("roles")}
          className={`py-3 sm:py-6 px-4 sm:px-6 text-base sm:text-xl font-normal transition-colors ${
            activeTab === "roles"
              ? "text-[#16469B] bg-[#E6B10F]"
              : "text-[#FFFFFF] bg-[#E6B10F] hover:bg-[#E6B10F]"
          }`}
        >
          <span className={bentham.className}>Gestión de Roles</span>
        </button>
        <button
          onClick={() => onTabChange("historico")}
          className={`py-3 sm:py-6 px-4 sm:px-6 text-base sm:text-xl font-normal transition-colors ${
            activeTab === "historico"
              ? "text-[#16469B] bg-[#E6B10F]"
              : "text-[#FFFFFF] bg-[#E6B10F] hover:bg-[#E6B10F]"
          }`}
        >
          <span className={bentham.className}>Reporte Histórico</span>
        </button>
      </div>
    </div>
  );
}