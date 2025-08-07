import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";

interface StateTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isVisible?: boolean;
}

/**
 * StateTabs Component - Now Visible and Functional
 * Displays state-wise counselling tabs with navigation
 * Based on the provided image showing state-wise medical counselling options
 */
const StateTabs: React.FC<StateTabsProps> = ({ 
  activeTab, 
  onTabChange, 
  isVisible = true 
}) => {
  const [showAllTabs, setShowAllTabs] = useState(false);

  // Enhanced tab configuration based on the image
  const tabs = [
    {
      id: "all-india",
      label: "All India Counselling - UG Medical",
      shortLabel: "All India UG",
      icon: "🏥",
      color: "from-orange-500 to-red-600",
      description: "Central counselling for government medical colleges"
    },
    {
      id: "dnb-sponsored",
      label: "DNB Sponsored - PG Medical (Govt or PSU Inservice Candidates)",
      shortLabel: "DNB Sponsored",
      icon: "🏛️",
      color: "from-blue-500 to-indigo-600",
      description: "DNB sponsored seats for government employees"
    },
    {
      id: "goa-pg",
      label: "Goa - PG Medical",
      shortLabel: "Goa PG",
      icon: "🏥",
      color: "from-green-500 to-teal-600",
      description: "Postgraduate medical counselling for Goa"
    },
    {
      id: "gujarat-pg",
      label: "Gujarat - PG Medical",
      shortLabel: "Gujarat PG",
      icon: "🏥",
      color: "from-purple-500 to-pink-600",
      description: "Gujarat state PG medical counselling"
    },
    {
      id: "haryana-pg",
      label: "Haryana - PG Medical",
      shortLabel: "Haryana PG",
      icon: "🏥",
      color: "from-indigo-500 to-blue-600",
      description: "Haryana state PG medical counselling"
    },
    {
      id: "himachal-pg",
      label: "Himachal Pradesh - PG Medical",
      shortLabel: "HP PG",
      icon: "🏔️",
      color: "from-cyan-500 to-blue-600",
      description: "Himachal Pradesh PG medical counselling"
    },
    {
      id: "jammu-pg",
      label: "Jammu and Kashmir - PG Medical",
      shortLabel: "J&K PG",
      icon: "🏔️",
      color: "from-emerald-500 to-green-600",
      description: "J&K state PG medical counselling"
    },
    {
      id: "jharkhand-pg",
      label: "Jharkhand - PG Medical",
      shortLabel: "Jharkhand PG",
      icon: "🏥",
      color: "from-amber-500 to-orange-600",
      description: "Jharkhand state PG medical counselling"
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-16 z-30">
      <div className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4">
        <div className="flex items-center space-x-2 flex-1">
          <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors hidden lg:block">
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>

          {/* Mobile View - Scrollable tabs */}
          <div className="lg:hidden flex-1">
            <div className="flex items-center space-x-2 overflow-x-auto scrollbar-hide pb-2">
              {tabs.slice(0, showAllTabs ? tabs.length : 3).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-xl whitespace-nowrap transition-all duration-300 text-sm flex-shrink-0 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                      : "text-slate-700 hover:bg-slate-50 border border-slate-200"
                  }`}
                >
                  <span className="text-base">{tab.icon}</span>
                  <span className="font-medium">{tab.shortLabel}</span>
                </button>
              ))}
              {!showAllTabs && tabs.length > 3 && (
                <button
                  onClick={() => setShowAllTabs(true)}
                  className="flex items-center space-x-1 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors flex-shrink-0"
                >
                  <Plus className="w-4 h-4" />
                  <span className="text-sm">More</span>
                </button>
              )}
            </div>
          </div>

          {/* Desktop View - Full tabs */}
          <div className="hidden lg:flex items-center space-x-3 overflow-x-auto scrollbar-hide flex-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl whitespace-nowrap transition-all duration-300 transform hover:scale-105 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : "text-slate-700 hover:bg-slate-50 border border-slate-200"
                }`}
                title={tab.description}
              >
                <span className="text-lg">{tab.icon}</span>
                <div className="text-left">
                  <div className="font-medium text-sm">{tab.label}</div>
                  <div className="text-xs opacity-80">{tab.description}</div>
                </div>
              </button>
            ))}
          </div>

          <button className="p-2 hover:bg-slate-100 rounded-xl transition-colors hidden lg:block">
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>

        {/* Add Tab Button */}
        <button className="flex items-center space-x-2 px-3 py-2 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors ml-2">
          <Plus className="w-4 h-4" />
          <span className="hidden sm:inline text-sm font-medium">Add Tab</span>
        </button>

        {/* Close All Tabs (Mobile) */}
        {showAllTabs && (
          <button
            onClick={() => setShowAllTabs(false)}
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-xl transition-colors ml-2"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Active Tab Info */}
      <div className="px-4 lg:px-6 pb-3">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-3 border border-blue-200/50">
          <div className="flex items-center space-x-3">
            <span className="text-lg">
              {tabs.find(tab => tab.id === activeTab)?.icon || "🏥"}
            </span>
            <div>
              <div className="font-semibold text-slate-800 text-sm">
                {tabs.find(tab => tab.id === activeTab)?.label || "All India Counselling"}
              </div>
              <div className="text-xs text-slate-600">
                {tabs.find(tab => tab.id === activeTab)?.description || "Select a counselling type"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateTabs;