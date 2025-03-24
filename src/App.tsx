import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { passengers } from "./data/titanic-passengers";
import styled from "styled-components";

const MainContent = styled.div<{ $sidebarOpen: boolean; $isMobile: boolean }>`
  margin-left: ${({ $isMobile, $sidebarOpen }) =>
    $isMobile ? "0" : $sidebarOpen ? "20%" : "60px"};
  padding: 1rem;
  transition: margin-left 0.3s ease;
`;

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return(
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar isMobile={isMobile} />

        <MainContent $sidebarOpen={true} $isMobile={isMobile}>
          <Routes>
            <Route path="/" element={<></>} />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
};

export default App;
