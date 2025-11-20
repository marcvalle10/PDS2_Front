// Tipos específicos para los datos históricos
export interface HistoricalRecord {
	id: string;
	matricula: string;
	expediente: string;
	nombre: string;
	email: string;
	estadoAcademico: 'Activo' | 'Inactivo';
	nivelIngles: string;
	estadoAcreditacion: string;
	kpi: string;
	planEstudios: string;
	creditos: string;
	sexo: string;
	nip: string;
	fechaNacimiento: string;
	tipoAlumno: string;
	promedioGeneral: string;
	horarioPerido: string;
	acciones: string;
}