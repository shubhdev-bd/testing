import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Users,
  Building2,
  MapPin,
  Search,
  Filter,
  Download,
  Heart,
  X,
  ChevronRight,
  Award,
  Calendar,
  TrendingUp,
  BarChart3,
  DollarSign,
} from "lucide-react";

interface AllotmentsPageProps {
  onBack: () => void;
}

interface AllotmentData {
  Round: number;
  State_Rank: number;
  State: string;
  Institute: string;
  Course: string;
  Quota: string;
  Category: string;
  Fee: string;
  Stipend_Year_1: string;
  Bond_Years: number;
  Bond_Penalty: string;
  Beds: number;
}

/**
 * Enhanced Allotments Page Component
 * Displays NEET UG allotment data with sidebar navigation and detailed table view
 * Based on the provided image design
 */
const AllotmentsPage: React.FC<AllotmentsPageProps> = ({ onBack }) => {
  const [allotmentData, setAllotmentData] = useState<AllotmentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedQuota, setSelectedQuota] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedAllotment, setSelectedAllotment] = useState<string>("DNB Sponsored - PG Medical (Govt or PSU Inservice Candidates)");

  // Allotment categories for sidebar (based on image)
  const allotmentCategories = [
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

  const parseCSV = (csvText: string): AllotmentData[] => {
    const lines = csvText.trim().split("\n");
    return lines.slice(1).map((line) => {
      const values = line.split(",");
      return {
        Round: parseInt(values[0]) || 1,
        State_Rank: parseInt(values[1]) || 0,
        State: values[2] || "",
        Institute: values[3] || "",
        Course: values[4] || "",
        Quota: values[5] || "",
        Category: values[6] || "",
        Fee: values[7] || "",
        Stipend_Year_1: values[8] || "",
        Bond_Years: parseInt(values[9]) || 0,
        Bond_Penalty: values[10] || "",
        Beds: parseInt(values[11]) || 0,
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/Neet_UG_Allotment_data_all-open_seats.csv");
        const csvText = await response.text();
        const parsedData = parseCSV(csvText);
        setAllotmentData(parsedData);
      } catch (error) {
        console.error("Error fetching allotment data:", error);
        // Enhanced fallback data
        setAllotmentData([
          {
            Round: 1,
            State_Rank: 12897,
            State: "Delhi",
            Institute: "Hindu Rao Hospital, Delhi",
            Course: "DNB GENERAL MEDICINE",
            Quota: "DNB Sponsored",
            Category: "GEN",
            Fee: "₹1,25,000",
            Stipend_Year_1: "₹1,21,389",
            Bond_Years: 0,
            Bond_Penalty: "₹0",
            Beds: 980
          },
          {
            Round: 1,
            State_Rank: 14214,
            State: "Jharkhand", 
            Institute: "Tata Main Hospital, Jamshedpur",
            Course: "DNB GENERAL MEDICINE",
            Quota: "DNB Sponsored",
            Category: "GEN",
            Fee: "₹1,25,000",
            Stipend_Year_1: "₹52,000",
            Bond_Years: 0,
            Bond_Penalty: "₹0",
            Beds: 915
          },
          {
            Round: 1,
            State_Rank: 15997,
            State: "Delhi",
            Institute: "Sir Ganga Ram Hospital, Delhi", 
            Course: "DNB GENERAL MEDICINE",
            Quota: "DNB Sponsored",
            Category: "GEN",
            Fee: "₹1,25,000",
            Stipend_Year_1: "₹83,000",
            Bond_Years: 0,
            Bond_Penalty: "₹0",
            Beds: 675
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredData = allotmentData.filter((item) => {
    const matchesSearch =
      item.Institute.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.Course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.State.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "all" || item.State === selectedState;
    const matchesQuota = selectedQuota === "all" || item.Quota === selectedQuota;
    const matchesCategory = selectedCategory === "all" || item.Category === selectedCategory;
    return matchesSearch && matchesState && matchesQuota && matchesCategory;
  });

  const states = ["all", ...Array.from(new Set(allotmentData.map((item) => item.State)))];
  const quotas = ["all", ...Array.from(new Set(allotmentData.map((item) => item.Quota)))];
  const categories = ["all", ...Array.from(new Set(allotmentData.map((item) => item.Category)))];

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading Allotment Data...</p>
        </div>
      </div>
    );
  }

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
            <h1 className="text-xl font-bold text-slate-800">Allotments</h1>
            <span className="text-sm text-slate-500">What's this?</span>
          </div>
          
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors"
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
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                />
              </div>
            </div>

            <div className="space-y-2">
              {allotmentCategories.map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAllotment(category)}
                  className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                    selectedAllotment === category
                      ? "bg-orange-50 border border-orange-200 text-orange-700"
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
                  <h3 className="text-lg font-bold text-slate-800">Allotments</h3>
                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    <X className="w-5 h-5 text-slate-600" />
                  </button>
                </div>

                <div className="mb-6">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search Counselling"
                      className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  {allotmentCategories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setSelectedAllotment(category);
                        setSidebarOpen(false);
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                        selectedAllotment === category
                          ? "bg-orange-50 border border-orange-200 text-orange-700"
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
          {/* Selected Category Header */}
          <div className="bg-orange-100 border border-orange-200 rounded-xl p-4 mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-orange-800">{selectedAllotment}</h2>
              <ChevronRight className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-sm text-orange-600 mt-1">
              Click on the record for detailed information and factors.
            </p>
            <p className="text-xs text-orange-600 mt-1">
              (*) Indicates additional remarks available in Details & Factors.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-lg mb-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search institutes, courses, or states..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                />
              </div>

              <div className="flex gap-4">
                <select
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800"
                >
                  {states.map((state) => (
                    <option key={state} value={state}>
                      {state === "all" ? "All States" : state}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedQuota}
                  onChange={(e) => setSelectedQuota(e.target.value)}
                  className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800"
                >
                  {quotas.map((quota) => (
                    <option key={quota} value={quota}>
                      {quota === "all" ? "All Quotas" : quota}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-slate-600">
                  1 - 50 of {filteredData.length} Records in 2024 session
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Choice List</span>
                </button>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-sm">
                  State Rank
                </button>
                <button className="px-4 py-2 bg-slate-500 text-white rounded-xl hover:bg-slate-600 transition-colors text-sm">
                  All India Rank
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Ask every time</span>
                </button>
                <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm">
                  Sort
                </button>
                <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors text-sm">
                  Filter
                </button>
              </div>
            </div>
          </div>

          {/* Allotment Data Table */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl border border-white/20 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">ROUND</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">STATE RANK</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">STATE</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">INSTITUTE</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">COURSE</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">QUOTA</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">CATEGORY</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">FEE</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">STIPEND YEAR 1</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">BOND YEARS</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">BOND PENALTY</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm">BEDS</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700 text-sm"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer ${
                        index % 2 === 0 ? "bg-white/50" : "bg-slate-50/30"
                      }`}
                    >
                      <td className="px-4 py-4 text-sm text-slate-800 font-medium">
                        {item.Round}
                      </td>
                      <td className="px-4 py-4 text-sm font-bold text-blue-600">
                        {item.State_Rank.toLocaleString()}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {item.State}
                      </td>
                      <td className="px-4 py-4 text-sm text-blue-600 hover:underline cursor-pointer font-medium">
                        {item.Institute}
                      </td>
                      <td className="px-4 py-4 text-sm text-slate-700">
                        {item.Course}
                      </td>
                      <td className="px-4 py-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                          {item.Quota}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                          {item.Category}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-slate-800">
                        {item.Fee}
                      </td>
                      <td className="px-4 py-4 text-sm font-semibold text-green-600">
                        {item.Stipend_Year_1}
                      </td>
                      <td className="px-4 py-4 text-sm text-center text-slate-700">
                        {item.Bond_Years}
                      </td>
                      <td className="px-4 py-4 text-sm text-center text-slate-700">
                        {item.Bond_Penalty}
                      </td>
                      <td className="px-4 py-4 text-sm text-center font-medium text-slate-800">
                        {item.Beds}
                      </td>
                      <td className="px-4 py-4">
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                          <Heart className="w-4 h-4 text-slate-400 hover:text-red-500" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-6">
            <button className="w-8 h-8 bg-orange-500 text-white rounded-lg font-medium">1</button>
            <button className="w-8 h-8 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors">2</button>
            <button className="w-8 h-8 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors">3</button>
            <button className="w-8 h-8 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors">4</button>
            <button className="w-8 h-8 bg-slate-200 text-slate-700 rounded-lg hover:bg-slate-300 transition-colors">></button>
          </div>

          {/* No Results Message */}
          {filteredData.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-slate-500" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">No data found</h3>
              <p className="text-slate-600">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllotmentsPage;