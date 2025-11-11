import { useState, useMemo } from "react";
import { User, UseUserDirectoryReturn } from "@/types";
import { useUsers } from "./useUsers";

export function useUserDirectory(): UseUserDirectoryReturn {
  const { users, loading, error, modifyUserRole, removeUser } = useUsers();
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

  const handleModifyUserRole = async (user: User, roleId: number) => {
    try {
      await modifyUserRole(user, roleId);
    } catch (error) {
      console.error("Error al modificar rol:", error);
    }
  };

  const handleDeleteUser = (user: User) => {
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (userToDelete) {
      try {
        await removeUser(userToDelete);
        setShowDeleteModal(false);
        setUserToDelete(null);
      } catch (error) {
        console.error("Error al eliminar usuario", error);
      }
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
    loading,
    error,

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
