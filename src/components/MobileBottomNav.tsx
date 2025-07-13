import React, { useState } from "react";
import { Home, Play, Database, User, Compass, Menu } from "lucide-react";

interface MobileBottomNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const choiceList = ["Option 1", "Option 2", "Option 3"];

const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeSection,
  onSectionChange,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "home", icon: Home },
    { id: "explore", icon: Compass },
    { id: "videos", icon: Play },
    { id: "repo", icon: Database },
    { id: "profile", icon: User },
  ];

  return (
    <>
      {/* Fixed Bottom Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-xl border-t border-slate-200/50 px-2 py-2 z-40 shadow-lg pointer-events-auto">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex flex-col items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
                activeSection === item.id
                  ? "text-blue-600 bg-blue-50 shadow-sm"
                  : "text-slate-600 hover:text-slate-800 hover:bg-slate-50"
              }`}
            >
              <item.icon className="w-6 h-6" />
            </button>
          ))}
          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen((open) => !open)}
            className="flex flex-col items-center justify-center w-12 h-12 rounded-xl text-slate-600 hover:text-slate-800 hover:bg-slate-50 transition-all duration-200"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Right Side Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 flex justify-end"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-white w-64 h-full shadow-lg p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="mb-4 text-right w-full text-slate-500"
              onClick={() => setMenuOpen(false)}
            >
              Close
            </button>
            <ul>
              {choiceList.map((choice) => (
                <li key={choice} className="py-2 border-b">
                  {choice}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileBottomNav;
