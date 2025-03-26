import { SetStateAction } from "react";

export interface SidebarProps {
  isMobile?: boolean;
  isOpen?: boolean;
  setSidebarOpen?: (isOpen: boolean) => Dispatch<SetStateAction<boolean>>;
}

export interface SidebarLinkProps {
  visible?: boolean;
  active?: boolean;
}
