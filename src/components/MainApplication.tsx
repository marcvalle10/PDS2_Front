'use client';

import React, { useState } from "react";
import { UniversityHeaderOnly, NavigationTabs } from "@/components/shared";
import { UserDirectory, FileUploadView, HistoricalReportView } from "@/components/features";

export function MainApplication() {
  const [activeTab, setActiveTab] = useState<"roles" | "historico">("roles");
  const [currentView, setCurrentView] = useState<"directory" | "upload">("directory");

  const handleTabChange = (tab: "roles" | "historico") => {
    setActiveTab(tab);
    if (tab === "roles") {
      setCurrentView("directory");
    }
  };

  const handleUploadClick = () => {
    setCurrentView("upload");
    setActiveTab("roles");
  };

  const handleHistoryClick = () => {
    setActiveTab("historico");
  };

  return (
    <div className="px-3 sm:px-6 lg:px-[80px] pt-2 bg-[#EDE9FF]">
      <div
        className="min-h-screen"
        style={{ background: "linear-gradient(to bottom, #e8e4ff, #f3f0ff)" }}
      >
        <UniversityHeaderOnly />
        <NavigationTabs activeTab={activeTab} onTabChange={handleTabChange} />

        {/* Main Content */}
        {activeTab === "roles" && currentView === "directory" && <UserDirectory />}
        {activeTab === "roles" && currentView === "upload" && (
          <FileUploadView onHistoryClick={handleHistoryClick} />
        )}
        {activeTab === "historico" && (
          <HistoricalReportView onUploadClick={handleUploadClick} />
        )}
      </div>
    </div>
  );
}