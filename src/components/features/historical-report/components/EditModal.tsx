import React, { useState } from "react";
import { HistoricalRecord } from "@/types/historical";

export function EditModal({
  record,
  onClose,
  onSave,
}: {
  record: HistoricalRecord;
  onClose: () => void;
  onSave: (formData: HistoricalRecord) => void;
}) {
  const [formData, setFormData] = useState(record);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSave() {
    onSave(formData);
    onClose();
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg w-[400px] shadow-xl">
        <h2 className="text-lg font-semibold mb-4">Editar registro</h2>

        <label className="text-sm font-medium">Nombre</label>
        <input
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        <label className="text-sm font-medium">Correo</label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded mb-3"
        />

        {/* Agrega más campos si necesario */}

        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}
