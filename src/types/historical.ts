  export interface HistoricalRecord {
  id: number;
  matricula: string;
  expediente: string;
  nombre: string;
  email: string;
  estadoAcademico: "ACTIVO" | "INACTIVO";
  
  estadoAcreditacion?: "Acreditado" | "Pendiente" | "En proceso" | "Revisión" | "N/A";
  kpi?: string; 

  nivelIngles: string;
  planEstudios: string;
  creditos: string;
  sexo: string;
  nip?: string;
  fechaNacimiento: string;
  tipoAlumno: string;
  promedioGeneral: string;
  promedioPeriodo: string;
  materiasAprobadas: string;
  materiasReprobadas: string;
  periodoInicio: string;
  actaExamenProfesional?: string;
  constanciaExencion?: string;
  fechaTitulacion: string;
  creditosCulturest: string;
  creditosDeportes: string;
  acciones: string;
}

export interface FileHistoryRecord {
  id: number;
  date: string;
  filename: string;
  status: "ERROR" | "CANCELADO" | "COMPLETADO" | "PENDIENTE";
}
