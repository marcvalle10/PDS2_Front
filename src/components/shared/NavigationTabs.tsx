import React from "react";
import { Bentham } from "next/font/google";

// Configurar la fuente Bentham
const bentham = Bentham({
  weight: "400",
  subsets: ["latin"],
});

type TabKey = "roles" | "historico" | "horarios" | "asistencia" | "planes";


interface NavigationTabsProps {
  activeTab: TabKey;
  onTabChange: (tab: TabKey) => void;
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

        <button
          onClick={() => onTabChange("horarios")}
          className={`py-3 sm:py-6 px-4 sm:px-6 text-base sm:text-xl font-normal transition-colors ${
            activeTab === "horarios"
              ? "text-[#16469B] bg-[#E6B10F]"
              : "text-[#FFFFFF] bg-[#E6B10F] hover:bg-[#E6B10F]"
          }`}
        >
          <span className={bentham.className}>Horarios</span>
        </button>

        <button
          onClick={() => onTabChange("asistencia")}
          className={`py-3 sm:py-6 px-4 sm:px-6 text-base sm:text-xl font-normal transition-colors ${
            activeTab === "asistencia"
              ? "text-[#16469B] bg-[#E6B10F]"
              : "text-[#FFFFFF] bg-[#E6B10F] hover:bg-[#E6B10F]"
          }`}
        >
          <span className={bentham.className}>Grupos</span>
        </button>

        <button
          onClick={() => onTabChange("planes")}
          className={`py-3 sm:py-6 px-4 sm:px-6 text-base sm:text-xl font-normal transition-colors ${
            activeTab === "planes"
              ? "text-[#16469B] bg-[#E6B10F]"
              : "text-[#FFFFFF] bg-[#E6B10F] hover:bg-[#E6B10F]"
          }`}
        >
          <span className={bentham.className}>Planes de estudio</span>
        </button>

      </div>
    </div>
  );
}
