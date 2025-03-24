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

const Sidebar: React.FC<SidebarProps> = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(!isMobile);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
    setIsOpen(!isOpen)
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

              <SidebarTitle visible={!isCollapsed || isMobile}>
                {isMobile ? "Choose your desired view" : "Titanic Data"}
              </SidebarTitle>

              <SidebarLink
                to="/"
                onClick={handleLinkClick}
                visible={!isCollapsed || isMobile}
              >
                {(!isCollapsed || isMobile) && "Data Table"}
              </SidebarLink>

              <SidebarLink
                to="/line-graph"
                onClick={handleLinkClick}
                visible={!isCollapsed || isMobile}
              >
                {(!isCollapsed || isMobile) && "Line Graph"}
              </SidebarLink>

              <SidebarLink
                to="/histogram"
                onClick={handleLinkClick}
                visible={!isCollapsed || isMobile}
              >
                {(!isCollapsed || isMobile) && "Histogram"}
              </SidebarLink>
            </>
          )}
        </SidebarContent>
        {!isMobile && (
          <CollapseButton onClick={toggleCollapse}>
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </CollapseButton>
        )}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
