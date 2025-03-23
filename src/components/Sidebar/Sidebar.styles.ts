import styled from "styled-components";
import { Link } from "react-router-dom";



export const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f4f4f4;
  padding: 1rem;
  height: 100vh;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

export const SidebarLink = styled(Link)`
  display: block;
  padding: 0.75rem;
  margin: 0.5rem 0;
  color: #333;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #ddd;
  }
`;