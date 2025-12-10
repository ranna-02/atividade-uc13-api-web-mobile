import React from 'react';

const Agendar = () => {
  return (
    <div className="flex flex-col p-4 bg-white h-full">
      <h1 className="text-2xl font-bold mb-4">Agendar Consulta</h1>
      <input className="border border-gray-300 p-2 mb-3" placeholder="Selecione o médico" />
      <input className="border border-gray-300 p-2 mb-3" placeholder="Escolha a data" />
      <input className="border border-gray-300 p-2 mb-3" placeholder="Escolha o horário" />
      <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={() => alert('Consulta agendada!')}>
        Confirmar Agendamento
      </button>
    </div>
  );
};

export default Agendar;