import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header";

// Dummy components for the routes
const Home = () => <div>Home Page</div>;
const Profile = () => <div>Profile Page</div>;
const Support = () => <div>Support Page</div>;
const ChoiceLists = () => <div>My Choice Lists</div>;
const NeetUG = () => <div>NEET UG Page</div>;
const NeetPG = () => <div>NEET PG Page</div>;
const INICET = () => <div>INICET Page</div>;
const AllInstitutes = () => <div>All Institutes</div>;
const TopInstitutes = () => <div>Top Institutes</div>;
const GovernmentInstitutes = () => <div>Government Institutes</div>;
const faq = () => <div>FAQ Page</div>; // Dummy FAQ component

const AppRouter: React.FC = () => {
  // Dummy handlers for Header props
  const handleSearchChange = (value: string) => {};
  const handleMobileMenuToggle = () => {};
  const handleSectionChange = (section: string) => {};

  return (
    <Router>
      <Header
        onSearchChange={handleSearchChange}
        onMobileMenuToggle={handleMobileMenuToggle}
        isMobileMenuOpen={false}
        user={{ avatar: "U" }}
        onSectionChange={handleSectionChange}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/support" element={<Support />} />
        <Route path="/my-choice-lists" element={<ChoiceLists />} />
        <Route path="/neet-ug" element={<NeetUG />} />
        <Route path="/neet-pg" element={<NeetPG />} />
        <Route path="/inicet" element={<INICET />} />
        <Route path="/institutes/all" element={<AllInstitutes />} />
        <Route path="/institutes/top" element={<TopInstitutes />} />
        <Route
          path="/institutes/government"
          element={<GovernmentInstitutes />}
        />
        <Route path="/resultranking" element={<div>Result Ranking Page</div>} />
        {/* Add a route for the FAQ page */}
        <Route
          path="/src/components/FAQPage.tsx"
          element={<div>FAQ Page</div>}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
