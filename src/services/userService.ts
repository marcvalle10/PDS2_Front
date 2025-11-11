import { supabase } from "@/lib/supabase";
import { User, Role } from "@/types";

export async function getUsersWithRoles(): Promise<User[]> {
  const { data, error } = await supabase
    .from("profesor")
    .select(
      `
        *,
        roles:rol(
            id,
            nombre
        )
    `
    )
    .order("nombre");

  if (error) {
    console.error("Error al obtener usuarios:", error);
    throw error;
  }

  return data.map((profesor) => ({
    id: profesor.id,
    nombre: `${profesor.nombre} ${profesor.apellido_paterno} ${profesor.apellido_materno}`,
    email: profesor.correo,
    role_id: profesor.rol_id,
    rol: profesor.roles?.nombre,
  }));
}

export async function getRoles(): Promise<Role[]> {
  const { data, error } = await supabase.from("rol").select("*").order("id");

  if (error) {
    console.error("Error al obtener roles:", error);
    throw error;
  }

  return data;
}

export async function updateUserRole(
  userId: number,
  roleId: number
): Promise<void> {
  const { error } = await supabase
    .from("profesor")
    .update({ rol_id: roleId })
    .eq("id", userId);

  if (error) {
    console.error("Error al modificar rol:", error);
    throw error;
  }
}

export async function deleteUser(userId: number): Promise<void> {
  const { error } = await supabase.from("profesor").delete().eq("id", userId);

  if (error) {
    console.error("Error al eliminar usuario:", error);
    throw error;
  }
}
