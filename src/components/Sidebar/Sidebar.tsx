import React, { useState } from "react";
import {
  SidebarContainer,
  SidebarLink,
  ToggleButton,
  SidebarContent,
  CloseButton,
  SidebarTitle,
  CollapseButton,
} from "./Sidebar.styles";
import { SidebarProps } from "./Sidebar.d";
import { useLocation } from "react-router-dom";

import { FaTimes, FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar: React.FC<SidebarProps> = ({ isMobile, setSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);

  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    if(setSidebarOpen) setSidebarOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };
  return (
    <>
      {isMobile && !isOpen && (
        <ToggleButton onClick={toggleSidebar}>
          <FaBars />
        </ToggleButton>
      )}

      <SidebarContainer isOpen={isOpen} isMobile={isMobile}>
        <SidebarContent>
          {isOpen && (
            <>
              {isMobile && (
                <CloseButton onClick={toggleSidebar}>
                  <FaTimes />
                </CloseButton>
              )}

              <SidebarTitle visible={isMobile}>
                {isMobile ? "Choose your desired view" : "Titanic Data"}
              </SidebarTitle>

              <SidebarLink
                to="/"
                onClick={handleLinkClick}
                visible={isMobile}
                active={location.pathname === "/data-table"}
              >
                Data Table
              </SidebarLink>

              <SidebarLink
                to="/line-graph"
                onClick={handleLinkClick}
                visible={ isMobile}
                active={location.pathname === "/line-graph"}
              >
                Line Graph
              </SidebarLink>

              <SidebarLink
                to="/histogram"
                onClick={handleLinkClick}
                visible={ isMobile}
                active={location.pathname === "/histogram"}
              >
                Histogram
              </SidebarLink>
            </>
          )}
        </SidebarContent>
        {!isMobile && (
          <CollapseButton onClick={toggleSidebar}>
            {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
          </CollapseButton>
        )}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
