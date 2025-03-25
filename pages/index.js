import { useState } from "react";

const regions = [
  "R0", "R1", "R2", "R3", "R4", "R5", "R6",
  "R7", "R8", "R9", "R10", "R11", "R12"
];

export default function Home() {
  const [data, setData] = useState({});

  const handleChange = (region, field, value) => {
    setData((prev) => ({
      ...prev,
      [region]: {
        ...prev[region],
        [field]: value,
      },
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Checklist Intraoperatorio PCI</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {regions.map((region) => (
          <div key={region} className="border rounded p-4 shadow">
            <h2 className="text-lg font-semibold mb-2">Región {region}</h2>
            <div className="mb-2">
              <label className="block mb-1">¿Lesión presente?</label>
              <select onChange={(e) => handleChange(region, "lesion", e.target.value)} className="w-full border rounded p-1">
                <option value="">--Seleccionar--</option>
                <option value="Sí">Sí</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block mb-1">Tamaño</label>
              <select onChange={(e) => handleChange(region, "tamano", e.target.value)} className="w-full border rounded p-1">
                <option value="">--Seleccionar--</option>
                <option value="<0.5 cm">&lt;0.5 cm</option>
                <option value="0.5-5 cm">0.5-5 cm</option>
                <option value=">5 cm">&gt;5 cm</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block mb-1">Apariencia</label>
              <select onChange={(e) => handleChange(region, "apariencia", e.target.value)} className="w-full border rounded p-1">
                <option value="">--Seleccionar--</option>
                <option value="Blanda tumoral">Blanda tumoral</option>
                <option value="Firme/nodular">Firme/nodular</option>
                <option value="Fibrosis/cicatriz">Fibrosis/cicatriz</option>
                <option value="Mucinosa">Mucinosa</option>
                <option value="Otra">Otra</option>
              </select>
            </div>
            <div className="mb-2">
              <label className="block mb-1">Foto quirúrgica</label>
              <input type="file" accept="image/*" onChange={(e) => handleChange(region, "foto", e.target.files[0])} />
            </div>
            <div>
              <label className="block mb-1">Notas</label>
              <textarea onChange={(e) => handleChange(region, "notas", e.target.value)} placeholder="Detalles opcionales" className="w-full border rounded p-1" />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <button onClick={() => console.log(data)} className="bg-blue-600 text-white px-4 py-2 rounded shadow">
          Exportar datos
        </button>
      </div>
    </div>
  );
}
