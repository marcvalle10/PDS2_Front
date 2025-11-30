import React from "react";
import { HistoricalRecord } from "@/types";
interface HistoricalTableProps {
  records: HistoricalRecord[];
  onEdit: (record: HistoricalRecord) => void;
  onRemove: (record: HistoricalRecord) => void;
}

export function HistoricalTable({
  records,
  onEdit,
  onRemove,
}: HistoricalTableProps) {
  return (
    <div className="w-full overflow-x-auto">
      {/* Aumento del min-w para acomodar las nuevas columnas */}
      <table className="w-full table-fixed min-w-[3400px]">
        <thead className="bg-[#4A5568]">
          <tr className="flex w-full">
            {/* Columna de Checkbox (sin encabezado de texto) */}
            <th className="w-[60px] px-2 py-3 text-left flex items-center text-xs font-normal text-white flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span></span>
              </div>
            </th>

            {/* Columnas existentes */}
            <th className="w-[80px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>ID</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[120px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Matrícula</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[120px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Expediente</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[180px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Nombre completo</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[200px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Correo institucional</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[140px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Estado académico</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            
            {/* NUEVA COLUMNA: estadoAcreditacion */}
            <th className="w-[140px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Estado Acreditación</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            
            {/* NUEVA COLUMNA: kpi */}
            <th className="w-[80px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>KPI</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>

            {/* Columnas existentes (nivelIngles duplicado, se deja solo uno, el 80px) */}
            <th className="w-[80px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Nivel ING</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[120px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Plan Estudios</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[100px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Créditos</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[80px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Sexo</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>

            {/* NUEVA COLUMNA: nip */}
            <th className="w-[80px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>NIP</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            
            <th className="w-[140px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Fecha nacimiento</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[120px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Tipo alumno</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[140px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Promedio general</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[140px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Promedio periodo</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            
            {/* NUEVAS COLUMNAS: materiasAprobadas, materiasReprobadas, periodoInicio */}
            <th className="w-[140px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Materias Aprobadas</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[140px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Materias Reprobadas</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[120px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Período Inicio</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            
            {/* NUEVAS COLUMNAS: actaExamenProfesional, constanciaExencion, fechaTitulacion */}
            <th className="w-[160px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Acta Examen Prof.</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[160px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Constancia Exención</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[140px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Fecha Titulación</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            
            {/* NUEVAS COLUMNAS: creditosCulturest, creditosDeportes */}
            <th className="w-[140px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Créditos Culturest</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            <th className="w-[140px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Créditos Deportes</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
            
            {/* Columna de Acciones (existente) */}
            <th className="w-[100px] px-2 py-3 text-left text-xs font-normal text-white flex items-center flex-shrink-0">
              <div className="flex items-center justify-between w-full">
                <span>Acciones</span>
                <svg className="w-3 h-4 cursor-pointer" viewBox="0 0 12 16" fill="none">
                  <path d="M6 1L11.1962 5.5H0.803848L6 1Z" fill="white" />
                  <path d="M6 15L0.803848 10.5H11.1962L6 15Z" fill="white" />
                </svg>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {records.map((record, index) => (
            <tr
              key={record.id}
              className={`flex w-full ${
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              } hover:bg-gray-100 border-b border-gray-200`}
            >
              {/* Celda de Checkbox */}
              <td className="w-[60px] px-2 py-3 flex items-center flex-shrink-0">
                <input
                  type="checkbox"
                  className="w-3 h-3 bg-white rounded-sm border border-gray-300"
                />
              </td>
              
              {/* Celdas existentes */}
              <td className="w-[80px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.id}
                </div>
              </td>
              <td className="w-[120px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.matricula}
                </div>
              </td>
              <td className="w-[120px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.expediente}
                </div>
              </td>
              <td className="w-[180px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.nombre}
                </div>
              </td>
              <td className="w-[200px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.email}
                </div>
              </td>
              <td className="w-[140px] px-2 py-3 flex items-center flex-shrink-0">
                <span
                  className={`px-2 py-1 rounded-2xl text-xs font-light ${
                    record.estadoAcademico === "ACTIVO"
                      ? "bg-[#28A745] text-white"
                      : "bg-[#8B969F] text-white" // INACTIVO y otros
                  }`}
                >
                  {record.estadoAcademico}
                </span>
              </td>
              
              {/* NUEVA CELDA: estadoAcreditacion */}
              <td className="w-[140px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.estadoAcreditacion ?? "N/D"}
                </div>
              </td>
              
              {/* NUEVA CELDA: kpi */}
              <td className="w-[80px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.kpi ?? "N/D"}
                </div>
              </td>
              
              <td className="w-[80px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.nivelIngles}
                </div>
              </td>
              <td className="w-[120px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.planEstudios}
                </div>
              </td>
              <td className="w-[100px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.creditos}
                </div>
              </td>
              <td className="w-[80px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.sexo}
                </div>
              </td>
              
              {/* NUEVA CELDA: nip */}
              <td className="w-[80px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.nip ?? "N/D"}
                </div>
              </td>
              
              <td className="w-[140px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.fechaNacimiento}
                </div>
              </td>
              <td className="w-[120px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.tipoAlumno}
                </div>
              </td>
              <td className="w-[140px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.promedioGeneral}
                </div>
              </td>
              <td className="w-[140px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.promedioPeriodo}
                </div>
              </td>
              
              {/* NUEVAS CELDAS: materiasAprobadas, materiasReprobadas, periodoInicio */}
              <td className="w-[140px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.materiasAprobadas}
                </div>
              </td>
              <td className="w-[140px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.materiasReprobadas}
                </div>
              </td>
              <td className="w-[120px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.periodoInicio}
                </div>
              </td>
              
              {/* NUEVAS CELDAS: actaExamenProfesional, constanciaExencion, fechaTitulacion */}
              <td className="w-[160px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.actaExamenProfesional ?? "N/D"}
                </div>
              </td>
              <td className="w-[160px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.constanciaExencion ?? "N/D"}
                </div>
              </td>
              <td className="w-[140px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.fechaTitulacion}
                </div>
              </td>
              
              {/* NUEVAS CELDAS: creditosCulturest, creditosDeportes */}
              <td className="w-[140px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.creditosCulturest}
                </div>
              </td>
              <td className="w-[140px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="text-xs text-[#3B5571] truncate">
                  {record.creditosDeportes}
                </div>
              </td>

              {/* Celda de Acciones */}
              <td className="w-[100px] px-2 py-3 flex items-center flex-shrink-0">
                <div className="flex space-x-1">
                  <button
                    onClick={() => onEdit(record)}
                    className="text-[#3B5571] hover:text-blue-700 p-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => onRemove(record)}
                    className="text-red-600 hover:text-red-800 p-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}