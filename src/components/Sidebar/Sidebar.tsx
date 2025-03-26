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

import { FaTimes, FaBars, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Sidebar: React.FC<SidebarProps> = ({ isMobile, setSidebarOpen }) => {
  const [isOpen, setIsOpen] = useState(isMobile ? false : true);

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
              >
                Data Table
              </SidebarLink>

              <SidebarLink
                to="/line-graph"
                onClick={handleLinkClick}
                visible={ isMobile}
              >
                Line Graph
              </SidebarLink>

              <SidebarLink
                to="/histogram"
                onClick={handleLinkClick}
                visible={ isMobile}
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
