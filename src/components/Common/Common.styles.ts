import styled from "styled-components";

export const PageTitle = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const MainContent = styled.div<{
  sidebarOpen: boolean;
  isMobile: boolean;
}>`
  margin-left: ${({ isMobile, sidebarOpen }) =>
    isMobile ? "0" : sidebarOpen ? "20%" : "60px"};
  padding: 1rem;
  transition: margin-left 0.3s ease;
`;

export const FlexDiv = styled.div`
  display: flex;
`;

export const PlotDiv = styled.div<{
  isMobile?: boolean;
}>`
  width: ${({ isMobile }) => (isMobile ? "100vw" : "80vw")};
  height: 100%;
  padding: ${({ isMobile }) => (isMobile ? "1rem 0" : "1rem")};
`;
