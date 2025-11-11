import React from "react";
import { User } from "./user";

/**
 * Props para el componente SearchFilters
 */
export interface SearchFiltersProps {
  searchTerm: string;
  roleFilter: string;
  showRoleDropdown: boolean;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onRoleFilterChange: (role: string) => void;
  onToggleRoleDropdown: () => void;
}

/**
 * Props para el componente UserTable
 */
export interface UserTableProps {
  currentUsers: User[];
  onModifyUserRole: (user: User, role: string) => void;
  onDeleteUser: (user: User) => void;
}

/**
 * Props para el componente UserAvatar
 */
export interface UserAvatarProps {
  user: User;
}

/**
 * Props para el componente Pagination
 */
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

/**
 * Valor de retorno del hook useUserDirectory
 */
export interface UseUserDirectoryReturn {
  // State
  searchTerm: string;
  roleFilter: string;
  showRoleDropdown: boolean;
  userToDelete: User | null;
  showDeleteModal: boolean;
  currentPage: number;
  currentUsers: User[];
  totalPages: number;

  // Handlers
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRoleFilter: (role: string) => void;
  handleDeleteUser: (user: User) => void;
  handleModifyUserRole: (user: User, role: string) => void;
  confirmDelete: () => void;
  paginate: (pageNumber: number) => void;
  setShowRoleDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>;
}
