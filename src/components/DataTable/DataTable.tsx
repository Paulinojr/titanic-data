import React, { useState } from "react";
import { Passenger } from "../../data/Passenger";
import { Table, TableContainer, Th, Td, PaginationContainer, PaginationButton } from "./DataTable.styles";


interface DataTableProps {
  data: Passenger[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <Th>Passenger Id</Th>
            <Th>Survived</Th>
            <Th>Pclass</Th>
            <Th>Name</Th>
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
              <Td>{passenger?.passengerId}</Td>
              <Td>{passenger?.survived}</Td>
              <Td>{passenger?.pclass}</Td>
              <Td>{passenger?.name}</Td>
              <Td>{passenger?.sex}</Td>
              <Td>{passenger?.age}</Td>
              <Td>{passenger?.sibSp}</Td>
              <Td>{passenger?.parch}</Td>
              <Td>{passenger?.ticket}</Td>
              <Td>{passenger?.fare}</Td>
              <Td>{passenger?.cabin}</Td>
              <Td>{passenger?.embarked}</Td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationContainer>
        <div>
          <span>Items per page: </span>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
        <div>
          <PaginationButton
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </PaginationButton>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <PaginationButton
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </PaginationButton>
        </div>
      </PaginationContainer>
    </TableContainer>
  );
};

export default DataTable;