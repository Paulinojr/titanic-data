import React, { useState } from "react";
import {
  StyledTable,
  TableContainer,
  Th,
  Td,
  PaginationContainer,
  PaginationButton,
  TopPaginationContainer,
  ItemsPerPageSelect,
  PageIndicator,
  TableScrollDiv,
} from "./DataTable.styles";
import { PageTitle, PlotDiv } from "../Common/Common.styles";
import { usePassengerData } from "../../context/PassengerDataContext";
import { DataTableProps } from "./DataTable.d";

const DataTable: React.FC<DataTableProps> = ({ isMobile, sidebarOpen }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const { passengers, loading } = usePassengerData();

  const data = passengers;

  // Data formatting functions
  const formatSurvived = (value: number) => (value ? "✅" : "❌");
  const formatPclass = (value: number) => `Class ${value}`;

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <PlotDiv>
      <TableContainer isMobile={isMobile} sidebarOpen={sidebarOpen}>
        <PageTitle>Titanic Data Table</PageTitle>
        {loading && <div>Loading...</div>}
        {!loading && data.length === 0 && <div>No data available</div>}
        {!loading && data.length > 0 && (
          <>
            <TopPaginationContainer>
              <div>
                <span>Items per page: </span>
                <ItemsPerPageSelect
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  {[5, 10, 20, 50].map((size) => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </ItemsPerPageSelect>
              </div>
              <PageIndicator>
                Page {currentPage} of {totalPages}
              </PageIndicator>
            </TopPaginationContainer>

            <TableScrollDiv>
              <StyledTable isMobile={isMobile}>
                <thead>
                  <tr>
                    <Th>Passenger ID</Th>
                    <Th>Survived</Th>
                    <Th>Class</Th>
                    <Th style={{ width: isMobile ? "" : "200px" }}>Name</Th>
                    <Th>Sex</Th>
                    <Th>Age</Th>
                    <Th>SibSp</Th>
                    <Th>Parch</Th>
                    <Th>Ticket</Th>
                    <Th>Fare</Th>
                    <Th>Cabin</Th>
                    <Th>Embarked</Th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((passenger, index) => (
                    <tr key={index}>
                      <Td>{passenger.passengerId}</Td>
                      <Td>{formatSurvived(passenger.survived)}</Td>
                      <Td>{formatPclass(passenger.pclass)}</Td>
                      <Td style={{ width: "200px" }}>{passenger.name}</Td>
                      <Td>{passenger.sex}</Td>
                      <Td>{passenger.age || "Unknown"}</Td>
                      <Td>{passenger.sibSP}</Td>
                      <Td>{passenger.parch}</Td>
                      <Td>{passenger.ticket}</Td>
                      <Td>{passenger.fare}</Td>
                      <Td>{passenger.cabin}</Td>
                      <Td>{passenger.embarked}</Td>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            </TableScrollDiv>

            <PaginationContainer>
              <div>
                <PaginationButton
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </PaginationButton>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  const page =
                    currentPage <= 3
                      ? i + 1
                      : currentPage >= totalPages - 2
                      ? totalPages - 4 + i
                      : currentPage - 2 + i;
                  return (
                    <PaginationButton
                      key={page}
                      onClick={() => handlePageChange(page)}
                      disabled={currentPage === page}
                      style={{
                        backgroundColor: currentPage === page ? "#0056b3" : "",
                      }}
                    >
                      {page}
                    </PaginationButton>
                  );
                })}
                <PaginationButton
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next
                </PaginationButton>
              </div>
            </PaginationContainer>
          </>
        )}
      </TableContainer>
    </PlotDiv>
  );
};

export default DataTable;
