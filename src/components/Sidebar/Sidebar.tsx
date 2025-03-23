import React from 'react';
import { SidebarContainer, SidebarLink } from './Sidebar.styles';

const Sidebar: React.FC = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/"> Data Table </SidebarLink>
    </SidebarContainer>
  )
}


export default Sidebar;