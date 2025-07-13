import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import StateTabs from "./components/StateTabs";
import MainContent from "./components/MainContent";
import ChoiceLists from "./components/ChoiceLists";
import MobileBottomNav from "./components/MobileBottomNav";
import LoadingScreen from "./components/LoadingScreen";
import PlaceholderContent from "./components/PlaceholderContent";
import ProfilePage from "./components/ProfilePage";
import SupportPage from "./components/SupportPage";
import FAQPage from "./components/FAQPage";
import UniversitiesPage from "./components/UniversitiesPage";
import AIAssistant from "./components/AIAssistant";
import WhatsAppSupport from "./components/WhatsAppSupport";

/**
 * App: Root component for the dashboard application.
 * Handles navigation, layout, and conditional rendering of pages.
 */
function App() {
  // -------------------------------
  // State Management
  // -------------------------------
  const [activeSection, setActiveSection] = useState("home"); // Current dashboard section/page
  const [activeTab, setActiveTab] = useState("all-india"); // StateTabs (if used)
  const [searchValue, setSearchValue] = useState(""); // Search input value
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobile sidebar
  // const [isLoading, setIsLoading] = useState(true); // Initial loading screen
  const [showPlaceholder, setShowPlaceholder] = useState(false); // Placeholder for unknown sections
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false); // Sidebar collapse

  // Demo user (login system disabled)
  const [isLoggedIn] = useState(true);
  const [user] = useState({
    name: "Demo Student",
    email: "demo@gmail.com",
    phone: "+91 9876543210",
    neetRank: "12,345",
    category: "General",
    state: "Maharashtra",
    avatar: "DS",
  });

  // -------------------------------
  // Handlers
  // -------------------------------

  // Search input change
  const handleSearchChange = (value: string) => setSearchValue(value);

  // Section navigation (dashboard, profile, support, etc.)
  const handleSectionChange = (section: string) => {
    // Show placeholder for unknown sections
    if (
      section === "profile" ||
      section === "support" ||
      section === "faq" ||
      section === "universities" ||
      section === "home"
    ) {
      setShowPlaceholder(false);
    } else {
      setShowPlaceholder(true);
    }
    setActiveSection(section);
    setIsMobileMenuOpen(false);
  };

  // Loading screen completion
  // const handleLoadingComplete = () => setIsLoading(false);

  // Back to dashboard/home
  const handleBackToDashboard = () => {
    setShowPlaceholder(false);
    setActiveSection("home");
  };

  // Sidebar collapse toggle
  const toggleSidebar = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  // -------------------------------
  // Conditional Rendering
  // -------------------------------

  // Show loading screen first
  // if (isLoading) {
  //   return <LoadingScreen onComplete={handleLoadingComplete} />;
  // }

  /**
   * Renders the main content area based on the active section.
   * Handles dashboard, profile, support, FAQ, universities, and placeholder pages.
   */
  const renderPageContent = () => {
    // Profile page
    if (activeSection === "profile") {
      return (
        <ProfilePage
          user={user}
          onBack={handleBackToDashboard}
          onLogout={() => {}}
        />
      );
    }

    // Support page
    if (activeSection === "support") {
      return <SupportPage onBack={handleBackToDashboard} />;
    }

    // FAQ page
    if (activeSection === "faq") {
      return <FAQPage onBack={handleBackToDashboard} />;
    }

    // Universities page
    if (activeSection === "universities") {
      return <UniversitiesPage onBack={handleBackToDashboard} />;
    }

    // Placeholder for unknown sections
    if (showPlaceholder) {
      return (
        <PlaceholderContent
          title={`${
            activeSection.charAt(0).toUpperCase() + activeSection.slice(1)
          } Section`}
          onBack={handleBackToDashboard}
        />
      );
    }

    // Main dashboard content
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50">
        {/* Header */}
        <Header
          onSearchChange={handleSearchChange}
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
          user={user}
          onSectionChange={handleSectionChange}
        />

        {/* Main layout with sidebar and content */}
        <div className="flex relative">
          {/* Mobile Sidebar Overlay */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <Sidebar
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                className="relative z-10 transform transition-transform duration-300 ease-in-out"
                isCollapsed={false}
                onToggleCollapse={() => {}}
              />
            </div>
          )}

          {/* Main Content Area */}
          <div
            className="flex-1 flex flex-col min-h-screen"
            style={{
              marginLeft: isSidebarCollapsed ? "64px" : "256px",
              marginRight: "320px",
            }}
          >
            <MainContent activeTab={activeTab} />
          </div>
        </div>

        {/* Fixed Sidebar (Desktop) */}
        <Sidebar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          className="hidden lg:block"
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={toggleSidebar}
        />

        {/* Choice Lists (Right sidebar or floating) */}
        <ChoiceLists />

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />

        {/* AI Assistant Widget */}
        <AIAssistant />

        {/* WhatsApp Support Widget */}
        <WhatsAppSupport />

        {/* Padding for mobile bottom nav */}
        <div className="lg:hidden h-20"></div>
      </div>
    );
  };

  // -------------------------------
  // Main Render
  // -------------------------------

  // For profile, support, FAQ, universities, or placeholder pages,
  // render with dashboard navigation (header/sidebar)
  if (
    activeSection === "profile" ||
    activeSection === "support" ||
    activeSection === "faq" ||
    activeSection === "universities" ||
    showPlaceholder
  ) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-rose-50 via-blue-50 to-indigo-50">
        {/* Header */}
        <Header
          onSearchChange={handleSearchChange}
          onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          isMobileMenuOpen={isMobileMenuOpen}
          user={user}
          onSectionChange={handleSectionChange}
        />

        {/* Main layout with sidebar and content */}
        <div className="flex relative">
          {/* Mobile Sidebar Overlay */}
          {isMobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div
                className="fixed inset-0 bg-black/50"
                onClick={() => setIsMobileMenuOpen(false)}
              />
              <Sidebar
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
                className="relative z-10 transform transition-transform duration-300 ease-in-out"
                isCollapsed={false}
                onToggleCollapse={() => {}}
              />
            </div>
          )}

          {/* Page Content */}
          <div
            className="flex-1"
            style={{ marginLeft: isSidebarCollapsed ? "64px" : "256px" }}
          >
            {renderPageContent()}
          </div>
        </div>

        {/* Fixed Sidebar (Desktop) */}
        <Sidebar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          className="hidden lg:block"
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={toggleSidebar}
        />

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />

        {/* AI Assistant Widget */}
        <AIAssistant />

        {/* WhatsApp Support Widget */}
        <WhatsAppSupport />

        {/* Padding for mobile bottom nav */}
        <div className="lg:hidden h-20"></div>
      </div>
    );
  }

  // Default: render main dashboard content
  return renderPageContent();
}

export default App;
