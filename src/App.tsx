import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LanguageSelection from "./pages/LanguageSelection/LanguageSelection";
import SignUp from "./pages/SignUp/SignUp";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import CattleList from "./pages/CattleList/CattleList";
import DevNavigation from "./components/DevNavigation";

const App: React.FC = () => {
  return (
    <Router>
      <DevNavigation />
      <Routes>
        <Route path="/" element={<Navigate to="/language" replace />} />
        <Route path="/language" element={<LanguageSelection />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cattle" element={<CattleList />} />
      </Routes>
    </Router>
  );
};

export default App;
