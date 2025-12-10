import React from 'react';

const Consultas = () => {
  const consultas = [
    { id: '1', medico: 'Dr. João', data: '2025-12-15', horario: '14:00' },
    { id: '2', medico: 'Dra. Maria', data: '2025-12-20', horario: '10:00' },
  ];

  const cancelarConsulta = (id: string) => {
    alert(`Consulta ${id} cancelada!`);
  };

  return (
    <div className="flex flex-col p-4 bg-white h-full">
      <h1 className="text-2xl font-bold mb-4">Minhas Consultas</h1>
      {consultas.map((consulta) => (
        <div key={consulta.id} className="border border-gray-300 p-4 mb-3 rounded">
          <p>Médico: {consulta.medico}</p>
          <p>Data: {consulta.data}</p>
          <p>Horário: {consulta.horario}</p>
          <button
            className="bg-red-500 text-white py-1 px-3 rounded mt-2"
            onClick={() => cancelarConsulta(consulta.id)}
          >
            Cancelar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Consultas;