import React from 'react';

const Exames = () => {
  const exames = [
    { id: '1', tipo: 'Hemograma', status: 'Pronto' },
    { id: '2', tipo: 'Raio-X', status: 'Aguardando' },
  ];

  return (
    <div className="flex flex-col p-4 bg-white h-full">
      <h1 className="text-2xl font-bold mb-4">Meus Exames</h1>
      {exames.map((exame) => (
        <div key={exame.id} className="border border-gray-300 p-4 mb-3 rounded">
          <p>Tipo: {exame.tipo}</p>
          <p>Status: {exame.status}</p>
        </div>
      ))}
    </div>
  );
};

export default Exames;