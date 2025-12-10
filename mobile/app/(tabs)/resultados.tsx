import React from 'react';

const Resultados = () => {
  const resultados = [
    { id: '1', tipo: 'Hemograma', data: '2025-12-01', arquivo: 'hemograma.pdf' },
    { id: '2', tipo: 'Raio-X', data: '2025-12-05', arquivo: 'raio-x.pdf' },
  ];

  const baixarResultado = (arquivo: string) => {
    alert(`Baixando ${arquivo}`);
  };

  return (
    <div className="flex flex-col p-4 bg-white h-full">
      <h1 className="text-2xl font-bold mb-4">Resultados de Exames</h1>
      {resultados.map((resultado) => (
        <div key={resultado.id} className="border border-gray-300 p-4 mb-3 rounded">
          <p>Tipo: {resultado.tipo}</p>
          <p>Data: {resultado.data}</p>
          <button
            className="bg-blue-500 text-white py-1 px-3 rounded mt-2"
            onClick={() => baixarResultado(resultado.arquivo)}
          >
            Baixar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Resultados;