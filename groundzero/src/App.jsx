import { Routes, Route } from "react-router-dom";
import styles from "./style";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NavigationBar, NotificationBar, SponsorsPage, HomePage, StakeholdersPage } from "./components";
import './fonts.css';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1));
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <NotificationBar />
      <div className="bg-purple w-full">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stakeholders" element={<StakeholdersPage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;