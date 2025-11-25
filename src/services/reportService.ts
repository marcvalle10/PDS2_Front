import { supabase } from "@/lib/supabase";
import { HistoricalRecord } from "@/types";

export async function getStudents(): Promise<HistoricalRecord[]> {
  const { data, error } = await supabase
    .from("alumno")
    .select(
      `
        *,
        plan:plan_estudio(
            id,
            nombre,
            version
        )
    `
    )
    .order("nombre");

  if (error) {
    console.error("Error al obtener alumnos:", error);
    throw error;
  }

  return data.map((alumno) => ({
    id: alumno.id,
    matricula: alumno.matricula,
    expediente: alumno.expediente,
    nombre: `${alumno.nombre} ${alumno.apellido_paterno} ${alumno.apellido_materno}`,
    email: alumno.correo,
    estadoAcademico: alumno.estado_academico,
    nivelIngles: alumno.nivel_ingles_actual,
    planEstudios: `${alumno.plan?.nombre} ${alumno.plan?.version}`,
    creditos: alumno.total_creditos,
    sexo: alumno.sexo,
    fechaNacimiento: alumno.fecha_nacimiento,
    tipoAlumno: alumno.tipo_alumno,
    promedioGeneral: alumno.promedio_general,
    horarioPerido: alumno.promedio_periodo,
    acciones: "",
  }));
}

export async function editStudent(
  id: number,
  updatedData: Partial<HistoricalRecord>
) {
  const { data, error } = await supabase
    .from("alumno")
    .update({
      matricula: updatedData.matricula,
      expediente: updatedData.expediente,
      correo: updatedData.email,
      estado_academico: updatedData.estadoAcademico,
      nivel_ingles_actual: updatedData.nivelIngles,
      total_creditos: updatedData.creditos,
      sexo: updatedData.sexo,
      fecha_nacimiento: updatedData.fechaNacimiento,
      tipo_alumno: updatedData.tipoAlumno,
      promedio_general: updatedData.promedioGeneral,
      promedio_periodo: updatedData.horarioPerido,
    })
    .eq("id", id)
    .select();

  if (error) throw error;

  return data[0];
}
