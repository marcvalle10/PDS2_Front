import { FileHistoryRecord } from "@/types/historical";
import { deleteFile, getFiles } from "@/services/fileService";
import { getStudents, editStudent } from "@/services/reportService";
import { HistoricalRecord } from "@/types";
import { useState, useEffect } from "react";

export function useReports() {
  const [students, setStudents] = useState<HistoricalRecord[]>([]);
  const [files, setFiles] = useState<FileHistoryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadStudents = async () => {
    try {
      setLoading(true);
      const reportData = await getStudents();
      setStudents(reportData);
      setError(null);
    } catch (err) {
      setError("Error al cargar los usuarios");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const loadFiles = async () => {
    try {
      setLoading(true);
      const fileData = await getFiles();
      setFiles(fileData);
      setError(null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStudent = async (id: number, data: Partial<HistoricalRecord>) => {
    try {
      const updated = await editStudent(id, data);

      setStudents((prev) =>
        prev.map((s) => (s.id === id ? { ...s, ...data } : s))
      );

      return updated;
    } catch (err) {
      console.error("Error al editar estudiante:", err);
      setError("No se pudo editar el estudiante");
      throw err;
    }
  };

  const removeFile = async (file: FileHistoryRecord) => {
    try {
      await deleteFile(file.id);

      setFiles((prevFiles) => prevFiles.filter((f) => f.id !== file.id));
    } catch (err) {
      setError("Error al eliminar el archivo");
      throw err;
    }
  };

  useEffect(() => {
    loadStudents();
    loadFiles();
  }, []);

  return {
    files,
    students,
    loading,
    error,
    removeFile,
    refreshFiles: loadFiles,
    refreshStudents: loadStudents,
    editStudent,
  };
}
