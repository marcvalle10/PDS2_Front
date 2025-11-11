import { useState, useMemo } from "react";
import { User, mockUsers, UseUserDirectoryReturn } from "@/types";

export function useUserDirectory(): UseUserDirectoryReturn {
  const [users, setUsers] = useState(mockUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Filtrar usuarios usando useMemo para evitar re-renders innecesarios
  const filteredUsers = useMemo(() => {
    let result = users;

    if (searchTerm) {
      result = result.filter((user) =>
        user.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (roleFilter && roleFilter !== "") {
      result = result.filter((user) => user.rol === roleFilter);
    }

    return result;
  }, [users, searchTerm, roleFilter]);

  // Paginación
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleRoleFilter = (role: string) => {
    setRoleFilter(role);
    setShowRoleDropdown(false);
    setCurrentPage(1);
  };

  const handleModifyUserRole = (user: User, role: string) => {
    const newUsers = users.map((u) => {
      if (u.id === user.id) return { ...u, rol: role };
      return u;
    });
    setUsers(newUsers);
  };

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (userToDelete) {
      setUsers((prev) => prev.filter((u) => u.id !== userToDelete.id));
      setShowDeleteModal(false);
      setUserToDelete(null);
    }
  };

  const paginate = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return {
    // State
    searchTerm,
    roleFilter,
    showRoleDropdown,
    userToDelete,
    showDeleteModal,
    currentPage,
    currentUsers,
    totalPages,

    // Handlers
    handleSearch,
    handleRoleFilter,
    handleModifyUserRole,
    handleDeleteUser,
    confirmDelete,
    paginate,
    setShowRoleDropdown,
    setShowDeleteModal,
  };
}
