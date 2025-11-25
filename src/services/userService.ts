import { supabase } from "@/lib/supabase";
import { User, Role } from "@/types";

interface UserData {
  id: number;
  email: string;

  usuario_rol: {
    rol: {
      id: number;
      nombre: string;
    };
  }[];

  profesor: {
    id: number;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
  }[];

  alumno: {
    id: number;
    nombre: string;
    apellido_paterno: string;
    apellido_materno: string;
  }[];
}

export async function getUsersWithRoles(): Promise<User[]> {
  const { data, error } = await supabase
    .from("usuario")
    .select(
      `
      id,
      email,
      usuario_rol (
        rol (
          id,
          nombre
        )
      ),
      profesor (
        id,
        nombre,
        apellido_paterno,
        apellido_materno
      ),
      alumno (
        id,
        nombre,
        apellido_paterno,
        apellido_materno
      )
    `
    )
    .returns<UserData[]>();

  if (error) throw error;
  console.log(JSON.stringify(data, null, 2));

  const usuarios = data.map((usuario) => {
    const rol = usuario.usuario_rol?.[0]?.rol?.nombre ?? "Sin rol";

    const profesor = usuario.profesor?.[0] ?? null;
    const alumno = usuario.alumno?.[0] ?? null;

    const userNombre = alumno
      ? `${alumno.nombre} ${alumno.apellido_paterno} ${alumno.apellido_materno}`
      : profesor
      ? `${profesor.nombre} ${profesor.apellido_paterno} ${profesor.apellido_materno}`
      : "Sin nombre";

    return {
      id: usuario.id,
      email: usuario.email,
      nombre: userNombre,
      rol,
    };
  });

  return usuarios;
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
  const { error: deleteError } = await supabase
    .from("usuario_rol")
    .delete()
    .eq("usuario_id", userId);

  if (deleteError) {
    console.error("Error al eliminar roles anteriores:", deleteError);
    throw deleteError;
  }

  const { error: insertError } = await supabase.from("usuario_rol").insert([
    {
      usuario_id: userId,
      rol_id: roleId,
    },
  ]);

  if (insertError) {
    console.error("Error al asignar nuevo rol:", insertError);
    throw insertError;
  }
}

export async function deleteUser(userId: number): Promise<void> {
  const { error: rolesError } = await supabase
    .from("usuario_rol")
    .delete()
    .eq("usuario_id", userId);

  if (rolesError) {
    console.error("Error al eliminar roles del usuario:", rolesError);
    throw rolesError;
  }

  await supabase.from("profesor").delete().eq("usuario_id", userId);

  await supabase.from("alumno").delete().eq("usuario_id", userId);

  const { error: userError } = await supabase
    .from("usuario")
    .delete()
    .eq("id", userId);

  if (userError) {
    console.error("Error al eliminar usuario:", userError);
    throw userError;
  }
}
