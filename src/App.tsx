import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import styled from "styled-components";
import { PassengerDataProvider } from "./context/PassengerDataContext";

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
  const [sidebarOpen, setSidebarOpen] = useState(isMobile ? false : true);

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
            <Route path="/" element={<Navigate to="/data-table" />} />

            <Route
              path="/data-table"
              element={
                <PassengerDataProvider>
                  <DataTable
                    isMobile={isMobile}
                    sidebarOpen={sidebarOpen}
                  ></DataTable>
                </PassengerDataProvider>
              }
            />

            <Route
              path="/line-graph"
              element={
                <PassengerDataProvider>
                  <LineGraph/>
                </PassengerDataProvider>
              }
            />

            <Route
              path="/histogram"
              element={
                <PassengerDataProvider>
                  <Histogram />
                </PassengerDataProvider>
              }
            />
          </Routes>
        </MainContent>
      </div>
    </Router>
  );
};

export default App;
