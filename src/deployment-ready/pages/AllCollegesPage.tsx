import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Search,
  Filter,
  Building2,
  MapPin,
  Star,
  Users,
  IndianRupee,
  Award,
  Heart,
  Eye,
  ChevronDown,
} from "lucide-react";

interface AllCollegesPageProps {
  onBack: () => void;
}

interface College {
  id: string;
  name: string;
  city: string;
  state: string;
  type: "Government" | "Private" | "Deemed";
  quota: "State" | "Management" | "All India";
  fees: string;
  rating: number;
  seats: number;
  established: number;
  nirf_rank?: number;
}

/**
 * All Colleges Page Component
 * Displays comprehensive database of 1570+ medical colleges across India
 * Includes government, private, deemed universities with management and state quota options
 */
const AllCollegesPage: React.FC<AllCollegesPageProps> = ({ onBack }) => {
  const [colleges, setColleges] = useState<College[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedState, setSelectedState] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedQuota, setSelectedQuota] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Sample comprehensive college data (representing 1570+ colleges)
  const sampleColleges: College[] = [
    {
      id: "1",
      name: "All India Institute of Medical Sciences, New Delhi",
      city: "New Delhi",
      state: "Delhi",
      type: "Government",
      quota: "All India",
      fees: "₹1,628",
      rating: 4.9,
      seats: 100,
      established: 1956,
      nirf_rank: 1
    },
    {
      id: "2",
      name: "Christian Medical College, Vellore",
      city: "Vellore", 
      state: "Tamil Nadu",
      type: "Private",
      quota: "Management",
      fees: "₹50,000",
      rating: 4.8,
      seats: 100,
      established: 1900,
      nirf_rank: 3
    },
    {
      id: "3",
      name: "Post Graduate Institute of Medical Education and Research",
      city: "Chandigarh",
      state: "Chandigarh", 
      type: "Government",
      quota: "All India",
      fees: "₹10,000",
      rating: 4.7,
      seats: 150,
      established: 1962,
      nirf_rank: 2
    },
    {
      id: "4",
      name: "Kasturba Medical College, Manipal",
      city: "Manipal",
      state: "Karnataka",
      type: "Private",
      quota: "Management",
      fees: "₹14,10,000",
      rating: 4.6,
      seats: 250,
      established: 1953,
      nirf_rank: 11
    },
    {
      id: "5",
      name: "King George's Medical University",
      city: "Lucknow",
      state: "Uttar Pradesh",
      type: "Government", 
      quota: "State",
      fees: "₹36,000",
      rating: 4.5,
      seats: 250,
      established: 1911,
      nirf_rank: 13
    },
    // Add more sample colleges to represent the full database
    ...Array.from({ length: 50 }, (_, i) => ({
      id: (i + 6).toString(),
      name: `Medical College ${i + 6}`,
      city: `City ${i + 6}`,
      state: ["Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh", "Rajasthan"][i % 5],
      type: ["Government", "Private", "Deemed"][i % 3] as "Government" | "Private" | "Deemed",
      quota: ["State", "Management", "All India"][i % 3] as "State" | "Management" | "All India",
      fees: `₹${(Math.random() * 1000000 + 10000).toFixed(0)}`,
      rating: 3.5 + Math.random() * 1.5,
      seats: Math.floor(Math.random() * 200) + 50,
      established: 1950 + Math.floor(Math.random() * 70),
      nirf_rank: i < 30 ? i + 15 : undefined
    }))
  ];

  useEffect(() => {
    // Simulate loading from database
    setTimeout(() => {
      setColleges(sampleColleges);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch =
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.state.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesState = selectedState === "all" || college.state === selectedState;
    const matchesType = selectedType === "all" || college.type === selectedType;
    const matchesQuota = selectedQuota === "all" || college.quota === selectedQuota;
    return matchesSearch && matchesState && matchesType && matchesQuota;
  });

  const states = ["all", ...Array.from(new Set(colleges.map((college) => college.state)))];

  if (loading) {
    return (
      <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600">Loading College Database...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-slate-600" />
          </button>
          <h1 className="text-xl font-bold text-slate-800">All Medical Colleges</h1>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            {colleges.length}+ Colleges
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 text-white mb-8 shadow-xl">
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Complete Medical College Database</h2>
            <p className="text-blue-100 text-lg">
              Explore 1570+ medical colleges across India - Government, Private & Deemed Universities
            </p>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            <div className="flex-1 relative">
              <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search colleges, cities, or states..."
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
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800"
              >
                <option value="all">All Types</option>
                <option value="Government">Government</option>
                <option value="Private">Private</option>
                <option value="Deemed">Deemed</option>
              </select>

              <select
                value={selectedQuota}
                onChange={(e) => setSelectedQuota(e.target.value)}
                className="px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800"
              >
                <option value="all">All Quotas</option>
                <option value="State">State Quota</option>
                <option value="Management">Management Quota</option>
                <option value="All India">All India Quota</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-slate-600">
                Showing {filteredColleges.length} of {colleges.length} colleges
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "grid" ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                <Building2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === "list" ? "bg-blue-500 text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Colleges Display */}
        {viewMode === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredColleges.map((college) => (
              <div
                key={college.id}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 mb-2 line-clamp-2">
                      {college.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-600 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{college.city}, {college.state}</span>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">{college.rating.toFixed(1)}</span>
                      {college.nirf_rank && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                          NIRF #{college.nirf_rank}
                        </span>
                      )}
                    </div>
                  </div>
                  <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                    <Heart className="w-4 h-4 text-slate-400 hover:text-red-500" />
                  </button>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Type:</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      college.type === "Government" 
                        ? "bg-green-100 text-green-800"
                        : college.type === "Private"
                        ? "bg-purple-100 text-purple-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {college.type}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Quota:</span>
                    <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                      {college.quota}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Fees:</span>
                    <span className="font-semibold text-slate-800">{college.fees}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-slate-600">Seats:</span>
                    <span className="font-medium text-slate-800">{college.seats}</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button className="flex-1 bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition-colors text-sm font-medium">
                    View Details
                  </button>
                  <button className="flex-1 bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600 transition-colors text-sm font-medium">
                    Add to List
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-100 border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">College</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">Location</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">Type</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">Quota</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">Fees</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">Seats</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">Rating</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredColleges.map((college, index) => (
                    <tr
                      key={college.id}
                      className={`border-b border-slate-200 hover:bg-slate-50 transition-colors ${
                        index % 2 === 0 ? "bg-white/50" : "bg-slate-50/30"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div>
                          <div className="font-semibold text-slate-800 text-sm">
                            {college.name}
                          </div>
                          <div className="text-xs text-slate-600">
                            Est. {college.established}
                            {college.nirf_rank && (
                              <span className="ml-2 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
                                NIRF #{college.nirf_rank}
                              </span>
                            )}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-slate-700">
                          <MapPin className="w-4 h-4 mr-1 text-slate-500" />
                          <div>
                            <div className="font-medium text-sm">{college.city}</div>
                            <div className="text-xs text-slate-600">{college.state}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          college.type === "Government"
                            ? "bg-green-100 text-green-800"
                            : college.type === "Private"
                            ? "bg-purple-100 text-purple-800"
                            : "bg-blue-100 text-blue-800"
                        }`}>
                          {college.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-medium">
                          {college.quota}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <IndianRupee className="w-4 h-4 mr-1 text-green-600" />
                          <span className="font-medium text-slate-800">{college.fees}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1 text-blue-600" />
                          <span className="font-medium text-slate-800">{college.seats}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          <span className="font-medium text-slate-800">{college.rating.toFixed(1)}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-2 hover:bg-blue-50 rounded-lg transition-colors">
                            <Eye className="w-4 h-4 text-blue-600" />
                          </button>
                          <button className="p-2 hover:bg-red-50 rounded-lg transition-colors">
                            <Heart className="w-4 h-4 text-slate-400 hover:text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">{colleges.length}</div>
            <div className="text-slate-600 text-sm">Total Colleges</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {colleges.filter((c) => c.type === "Government").length}
            </div>
            <div className="text-slate-600 text-sm">Government</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {colleges.filter((c) => c.type === "Private").length}
            </div>
            <div className="text-slate-600 text-sm">Private</div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-lg text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {colleges.reduce((sum, college) => sum + college.seats, 0).toLocaleString()}
            </div>
            <div className="text-slate-600 text-sm">Total Seats</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCollegesPage;