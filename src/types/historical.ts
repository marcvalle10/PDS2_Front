// Tipos específicos para los datos históricos
export interface HistoricalRecord {
  id: number;
  matricula: string;
  expediente: string;
  nombre: string;
  email: string;
  estadoAcademico: "ACTIVO" | "INACTIVO";
  nivelIngles: string;
  planEstudios: string;
  creditos: string;
  sexo: string;
  fechaNacimiento: string;
  tipoAlumno: string;
  promedioGeneral: string;
  horarioPerido: string;
  acciones: string;
}

export interface FileHistoryRecord {
  id: number;
  date: string;
  filename: string;
  status: "ERROR" | "CANCELADO" | "COMPLETADO" | "PENDIENTE";
}
