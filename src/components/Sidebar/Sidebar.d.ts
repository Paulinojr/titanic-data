export interface SidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  onCollapseToggle: (collapsed: boolean) => void;
}

export interface SidebarLinkProps {
  visible?: boolean;
}
