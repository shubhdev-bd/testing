import React, { useState } from "react";
import {
  ArrowLeft,
  TrendingUp,
  Search,
  Filter,
  ChevronRight,
  X,
  Building2,
  Award,
  Users,
  BarChart3,
} from "lucide-react";

interface ClosingRanksPageProps {
  onBack: () => void;
}

/**
 * Enhanced Closing Ranks Page Component
 * Similar structure to AllotmentsPage with sidebar navigation
 * Shows closing rank data for different counselling categories
 */
const ClosingRanksPage: React.FC<ClosingRanksPageProps> = ({ onBack }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("DNB Sponsored - PG Medical (Govt or PSU Inservice Candidates)");
  const [searchTerm, setSearchTerm] = useState("");

  // Closing ranks categories (same as allotments)
  const rankCategories = [
    "DNB Sponsored - PG Medical (Govt or PSU Inservice Candidates)",
    "Goa - PG Medical",
    "Gujarat - PG Medical", 
    "Haryana - PG Medical",
    "Himachal Pradesh - PG Medical",
    "Jammu and Kashmir - PG Medical",
    "Jharkhand - PG Medical",
    "Karnataka - PG Medical",
    "Kerala - PG Medical",
    "Madhya Pradesh - PG Medical",
    "Maharashtra - PG Medical",
    "Manipur-JNIMS - PG Medical",
    "Manipur-RIMS - PG Medical"
  ];

  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
            <h1 className="text-xl font-bold text-slate-800">Closing Ranks</h1>
            <span className="text-sm text-slate-500">What's this?</span>
          </div>
          
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
          >
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="flex relative">
        {/* Sidebar - Desktop */}
        <div className="hidden lg:block w-80 bg-white/90 backdrop-blur-xl border-r border-slate-200/50 h-screen overflow-y-auto">
          <div className="p-6">
            <div className="mb-6">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search Counselling"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                />
              </div>
            </div>

            <div className="space-y-2">
              {rankCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                    selectedCategory === category
                      ? "bg-blue-50 border border-blue-200 text-blue-700"
                      : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  <span className="text-sm font-medium">{category}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div
              className="fixed inset-0 bg-black/50"
              onClick={() => setSidebarOpen(false)}
            />
            <div className="relative bg-white/95 backdrop-blur-xl w-80 h-full shadow-2xl border-r border-slate-200/50 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-slate-800">Closing Ranks</h3>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-600" />
                  </button>
                </div>

                <div className="space-y-2">
                  {rankCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedCategory(category);
                        setSidebarOpen(false);
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        selectedCategory === category
                          ? "bg-blue-50 border border-blue-200 text-blue-700"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span className="text-sm font-medium">{category}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Coming Soon Content */}
          <div className="max-w-4xl mx-auto flex items-center justify-center min-h-[80vh]">
            <div className="text-center">
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8 border border-slate-200">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Closing Ranks Data</h2>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  We're working on bringing you comprehensive closing ranks data for all medical colleges. 
                  This will include year-wise trends, category-wise cutoffs, and detailed analysis for:
                </p>

                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <h3 className="font-semibold text-blue-800 mb-2">{selectedCategory}</h3>
                  <p className="text-sm text-blue-700">
                    Detailed closing rank analysis will be available soon
                  </p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse w-3/4"></div>
                  </div>
                  <p className="text-sm text-slate-500">Coming Soon...</p>
                </div>
                
                <button
                  onClick={onBack}
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Dashboard</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClosingRanksPage;