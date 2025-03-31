import styled from "styled-components";
import { TableContainerProps } from "./DataTable.d";

export const TableContainer = styled.div<TableContainerProps>`
  width: ${({ isMobile, sidebarOpen }) =>
    isMobile
      ? "100%"
      : sidebarOpen
      ? "calc(100% - 200px)"
      : "calc(100vw - 100px)"};
  padding: ${({ isMobile }) => (isMobile ? "1rem" : "0")};
  ${({ isMobile }) =>
    isMobile &&
    `
    position: fixed;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    overscroll-behavior: contain;
  `}
  transition: all 0.3s ease;
`;

export const TableScrollDiv = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const StyledTable = styled.table<{ isMobile: boolean }>`
  width: 100%;
  min-width: 600px;
  border-collapse: collapse;
  table-layout: fixed;

  ${({ isMobile }) =>
    isMobile &&
    `
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    white-space: nowrap;
    border-spacing: 0;

    tr{
      padding: 0.75rem;
      border: 1px solid #ddd;
      white-space: nowrap;
      min-width: 1000px;
    }
    th, td {
       width: 100px;
    }
  `}
`;

export const Th = styled.th`
  padding: 0.75rem;
  text-align: left;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
  position: sticky;
  top: 0;
`;

export const Td = styled.td`
  padding: 0.75rem;
  border: 1px solid #ddd;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  position: sticky;
  bottom: 0;
  background: white;
  padding: 0.5rem 0;
  border-top: 1px solid #ddd;
`;

export const TopPaginationContainer = styled(PaginationContainer)`
  top: 0;
  bottom: auto;
  border-top: none;
  border-bottom: 1px solid #ddd;
`;

export const PaginationButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const ItemsPerPageSelect = styled.select`
  padding: 0.5rem;
  margin-left: 0.5rem;
`;

export const PageIndicator = styled.span`
  margin: 0 1rem;
`;
