import { supabase } from "@/lib/supabase";
import { HistoricalRecord } from "@/types";
import { act } from "react";

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
    promedioPeriodo: alumno.promedio_periodo,
    materiasAprobadas: alumno.materias_aprobadas,
    materiasReprobadas: alumno.materias_reprobadas,
    periodoInicio: alumno.periodo_inicio,
    actaExamenProfesional: alumno.acta_examen_profesional,
    constanciaExencion: alumno.constancia_exencion,
    fechaTitulacion: alumno.fecha_titulacion,
    creditosCulturest: alumno.creditos_culturest,
    creditosDeportes: alumno.creditos_deportes,
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
      promedio_periodo: updatedData.promedioPeriodo,
      materias_aprobadas: updatedData.materiasAprobadas,
      materias_reprobadas: updatedData.materiasReprobadas,
      periodo_inicio: updatedData.periodoInicio,
      acta_examen_profesional: updatedData.actaExamenProfesional,
      constancia_exencion: updatedData.constanciaExencion,
      fecha_titulacion: updatedData.fechaTitulacion,
      creditos_culturest: updatedData.creditosCulturest,
      creditos_deportes: updatedData.creditosDeportes,
    })
    .eq("id", id)
    .select();

  if (error) throw error;

  return data[0];
}

export async function deleteStudent(id: number) {
  const { error } = await supabase.from("alumno").delete().eq("id", id);
  if (error) {
    console.error("Error al eliminar usuario:", error);
    throw error;
  }
}
