import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col p-4 bg-white h-full">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard</h1>
      <p className="text-lg mb-2">Consultas Agendadas: 3</p>
      <p className="text-lg">Exames Pendentes: 2</p>
    </div>
  );
};

export default Dashboard;