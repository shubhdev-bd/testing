import React, { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Search,
  Plus,
  X,
  ChevronRight,
  Building2,
  MapPin,
  Star,
  Filter,
} from "lucide-react";

interface ChoiceListsPageProps {
  onBack: () => void;
}

interface College {
  id: string;
  name: string;
  location: string;
  state: string;
  type: "Government" | "Private";
  quota: "State" | "Management" | "All India";
  fees: string;
  rating: number;
  seats: number;
}

interface ChoiceList {
  id: string;
  name: string;
  colleges: College[];
  counsellingType: string;
}

/**
 * Choice Lists Page Component
 * Based on the provided image design for managing choice lists
 * Allows students to create and manage their college preference lists
 */
const ChoiceListsPage: React.FC<ChoiceListsPageProps> = ({ onBack }) => {
  const [choiceLists, setChoiceLists] = useState<ChoiceList[]>([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showCollegeSelector, setShowCollegeSelector] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCounselling, setSelectedCounselling] = useState("");
  const [newListName, setNewListName] = useState("");

  // Sample counselling options based on image
  const counsellingOptions = [
    "Chandigarh - PG Medical",
    "Chhattisgarh - PG Medical", 
    "CPS - PG Medical",
    "Delhi - PG Medical",
    "DNB - Inservice Seats - PG Medical",
    "DNB - PDCET - PG Medical",
    "DNB Sponsored - PG Medical (Govt or PSU Inservice Candidates)"
  ];

  // Sample colleges database (1570 colleges)
  const [colleges] = useState<College[]>([
    {
      id: "1",
      name: "All India Institute of Medical Sciences, New Delhi",
      location: "New Delhi",
      state: "Delhi",
      type: "Government",
      quota: "All India",
      fees: "₹1,628",
      rating: 4.9,
      seats: 100
    },
    {
      id: "2", 
      name: "Christian Medical College, Vellore",
      location: "Vellore",
      state: "Tamil Nadu",
      type: "Private",
      quota: "Management",
      fees: "₹50,000",
      rating: 4.8,
      seats: 100
    },
    {
      id: "3",
      name: "Post Graduate Institute of Medical Education and Research",
      location: "Chandigarh", 
      state: "Chandigarh",
      type: "Government",
      quota: "All India",
      fees: "₹10,000",
      rating: 4.7,
      seats: 150
    },
    {
      id: "4",
      name: "King George's Medical University",
      location: "Lucknow",
      state: "Uttar Pradesh", 
      type: "Government",
      quota: "State",
      fees: "₹36,000",
      rating: 4.6,
      seats: 250
    },
    {
      id: "5",
      name: "Maulana Azad Medical College",
      location: "New Delhi",
      state: "Delhi",
      type: "Government", 
      quota: "State",
      fees: "₹4,000",
      rating: 4.5,
      seats: 250
    }
  ]);

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = 
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.state.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const createChoiceList = () => {
    if (newListName.trim() && selectedCounselling) {
      const newList: ChoiceList = {
        id: Date.now().toString(),
        name: newListName.trim(),
        colleges: [],
        counsellingType: selectedCounselling
      };
      setChoiceLists([...choiceLists, newList]);
      setNewListName("");
      setSelectedCounselling("");
      setShowCreateModal(false);
    }
  };

  return (
    <div className="flex-1 bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50 min-h-screen">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-xl border-b border-white/20 px-4 lg:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-slate-600" />
            </button>
            <h1 className="text-xl font-bold text-slate-800">My Choice Lists</h1>
            <button
              onClick={() => setShowCreateModal(true)}
              className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search your Choice Lists"
              className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>
        </div>

        {/* Empty State */}
        {choiceLists.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-slate-500" />
              </div>
              
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Create Counselling specific Choice lists to curate your choices
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                (preferred order of seats) specific to each counselling.<br/>
                You can add to a preferred seat to a Choice list from the Allotments, 
                Closing Ranks, Seat Matrix, and Fee, Stipend & Bond menus.
              </p>
              
              <div className="bg-slate-50 rounded-xl p-4 mb-6">
                <p className="text-slate-600 text-sm">
                  You don't have any choice lists currently.<br/>
                  Create one here or add from any of the sections.
                </p>
              </div>

              <button
                onClick={() => setShowCreateModal(true)}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-medium transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto"
              >
                <Plus className="w-5 h-5" />
                <span>Create Choice List</span>
              </button>
            </div>
          </div>
        )}

        {/* Choice Lists Display */}
        {choiceLists.length > 0 && (
          <div className="space-y-4">
            {choiceLists.map((list) => (
              <div
                key={list.id}
                className="bg-white/80 backdrop-blur-xl rounded-xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">{list.name}</h3>
                    <p className="text-sm text-slate-600">{list.counsellingType}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-500">{list.colleges.length} colleges</span>
                    <ChevronRight className="w-5 h-5 text-slate-400" />
                  </div>
                </div>
                
                {list.colleges.length === 0 ? (
                  <div className="text-center py-8 border-2 border-dashed border-slate-300 rounded-xl">
                    <p className="text-slate-500">No colleges added yet</p>
                    <button className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Add colleges from database
                    </button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    {list.colleges.map((college, index) => (
                      <div key={college.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-slate-800">{college.name}</h4>
                          <p className="text-sm text-slate-600">{college.location}, {college.state}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-slate-800">{college.fees}</p>
                          <p className="text-xs text-slate-500">{college.quota}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Create Choice List Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-slate-800">Create Choice List</h3>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  <X className="w-5 h-5 text-slate-600" />
                </button>
              </div>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Please select a counselling to continue
                </label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search Counselling"
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                  />
                </div>
              </div>

              <div className="max-h-60 overflow-y-auto space-y-2 mb-6">
                {counsellingOptions.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedCounselling(option)}
                    className={`w-full text-left p-3 rounded-xl transition-all duration-200 flex items-center justify-between ${
                      selectedCounselling === option
                        ? "bg-blue-50 border border-blue-200 text-blue-700"
                        : "text-slate-700 hover:bg-slate-50 border border-transparent"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <Building2 className="w-4 h-4 text-slate-500" />
                      <span className="text-sm font-medium">{option}</span>
                    </div>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                ))}
              </div>

              {selectedCounselling && (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Choice List Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter list name..."
                    value={newListName}
                    onChange={(e) => setNewListName(e.target.value)}
                    className="w-full p-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                  />
                </div>
              )}

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition-colors font-medium"
                >
                  Cancel
                </button>
                <button
                  onClick={createChoiceList}
                  disabled={!selectedCounselling || !newListName.trim()}
                  className="flex-1 px-4 py-3 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Create List</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChoiceListsPage;