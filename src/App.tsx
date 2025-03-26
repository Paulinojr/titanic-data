import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import { passengerData as passengers } from "./data/titanic-passengers";
import styled from "styled-components";

// components
import LineGraph from "./components/LineGraph/LineGraph";
import DataTable from "./components/DataTable/DataTable";
import Histogram from "./components/Histogram/Histogram";



const MainContent = styled.div<{ $sidebarOpen: boolean; $isMobile: boolean }>`
  margin-left: ${({ $isMobile, $sidebarOpen }) =>
    $isMobile ? "0" : $sidebarOpen ? "20%" : "60px"};
  padding: 1rem;
  transition: margin-left 0.3s ease;
`;

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar isMobile={isMobile} setSidebarOpen={setSidebarOpen} />

        <MainContent $sidebarOpen={sidebarOpen} $isMobile={isMobile}>
          <Routes>
            <Route
              path="/"
              element={
                <DataTable
                  data={passengers}
                  isMobile={isMobile}
                  sidebarOpen={sidebarOpen}
                ></DataTable>
              }
            />

            <Route
              path="/line-graph"
              element={<LineGraph passengers={passengers} />}
            />

            <Route
              path="/histogram"
              element={<Histogram passengers={passengers} />}
            />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
};

export default App;
