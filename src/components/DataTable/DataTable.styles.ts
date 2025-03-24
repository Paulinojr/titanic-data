import styled from "styled-components"

export const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const Th = styled.th`
  padding: 0.75rem;
  text-align: left;
  background-color: #f4f4f4;
  border: 1px solid #ddd;
`;

export const Td = styled.td`
  padding: 0.75rem;
  border: 1px solid #ddd;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
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
