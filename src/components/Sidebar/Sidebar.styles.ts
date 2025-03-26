import styled from "styled-components";
import { Link } from "react-router-dom";
import {SidebarProps, SidebarLinkProps} from "./Sidebar.d";

export const SidebarContainer = styled.div<SidebarProps>`
  background-color: #f4f4f4;
  height: 100vh;
  position: fixed;
  transition: all 0.3s ease;
  z-index: 1000;

  ${({ isMobile, isOpen }) =>
    isMobile
      ? `
        width: ${isOpen ? "100%" : "0"};
        left: ${isOpen ? "0" : "-100%"};
      `
      : `
        width: ${isOpen ? "20%" : "40px"};
        left: 0;
      `}
`;

export const SidebarContent = styled.div`
  padding: 1rem;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
`;

export const CollapseButton = styled.button`
  position: absolute;
  bottom: 0;
  right: -15px;
  transform: translateY(-50%);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ddd;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarTitle = styled.h2<SidebarLinkProps>`
  margin-bottom: 2rem;
  display: block;
`;

export const SidebarLink = styled(Link)<SidebarLinkProps>`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  margin: 0.5rem 0;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  gap: 0.5rem;

  background-color: ${({ active }) => (active ? "#ddd" : "transparent")};

  &:hover {
    background-color: #ddd;
  }
`;
