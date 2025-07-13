import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from '../../App';
import NeetUGPage from '../../pages/NeetUGPage';
import NeetPGPage from '../../pages/NeetPGPage';
import INICETPage from '../../pages/INICETPage';
import AllotmentsPage from '../../pages/AllotmentsPage';
import ClosingRanksPage from '../../pages/ClosingRanksPage';
import SeatMatrixPage from '../../pages/SeatMatrixPage';
import FeeStipendBondPage from '../../pages/FeeStipendBondPage';
import resultrankingPage from '../resultranking';
import CounselingPage from '../counsellingpage';

/**
 * NEW COMMIT: Enhanced Router Component with Additional Data Pages
 * Added routes for allotments, closing ranks, seat matrix, and fee/stipend/bond pages
 */
const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Main App Route */}
        <Route path="/" element={<App />} />
        
        {/* NEET Exam Routes */}
        <Route path="/neet-ug" element={<NeetUGPage />} />
        <Route path="/neet-pg" element={<NeetPGPage />} />
        <Route path="/inicet" element={<INICETPage />} />
        
        {/* Data Pages Routes */}
        <Route path="/allotments" element={<AllotmentsPage onBack={() => window.history.back()} />} />
        <Route path="/closing-ranks" element={<ClosingRanksPage onBack={() => window.history.back()} />} />
        <Route path="/seat-matrix" element={<SeatMatrixPage onBack={() => window.history.back()} />} />
        <Route path="/fee-stipend-bond" element={<FeeStipendBondPage onBack={() => window.history.back()} />} />
        
        {/* Results and Rankings Route */}
        <Route path="/results" element={<resultrankingPage onBack={() => window.history.back()} />} />
        <Route path="/results-rankings" element={<resultrankingPage onBack={() => window.history.back()} />} />
        
        {/* Counseling Route */}
        <Route path="/counseling" element={<CounselingPage onBack={() => window.history.back()} />} />
        <Route path="/counselling" element={<CounselingPage onBack={() => window.history.back()} />} />
        
        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;