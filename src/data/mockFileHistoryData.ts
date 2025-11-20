export interface FileHistoryRecord {
	date: string;
	filename: string;
	status: 'valid' | 'invalid';
}

export const mockFileHistoryData: FileHistoryRecord[] = [
	{ date: "14/09/25", filename: "Lista ISI", status: "valid" },
	{ date: "15/09/25", filename: "Inscripciones", status: "invalid" },
	{ date: "16/09/25", filename: "Activos", status: "valid" },
	{ date: "16/09/25", filename: "Alumnos 2018", status: "valid" },
	{ date: "16/09/25", filename: "Alumnos 2017", status: "invalid" },
	{ date: "16/09/25", filename: "Lista 01", status: "invalid" }
];