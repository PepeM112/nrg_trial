"use client";

import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ContractsTable from '../../components/ContractsTable';

const ContractsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 md:p-8 md:pl-72">
        <h1 className="text-2xl font-bold mb-4">Contratos</h1>
        <input
          type="text"
          placeholder="Buscar contratos..."
          value={searchTerm}
          onChange={handleSearch}
          className="mb-4 p-2 border rounded-md text-gray-900"
        />
        <ContractsTable searchTerm={searchTerm} />
      </main>
    </div>
  );
};

export default ContractsPage;
