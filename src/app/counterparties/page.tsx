"use client";

import React, { useState } from 'react';
import CounterpartiesTable from '../../components/CounterpartiesTable';
import Sidebar from '../../components/Sidebar';

const CounterpartiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 md:p-8 md:pl-72">
        <h1 className="text-2xl font-bold mb-4">Counterparties</h1>
        <input
          type="text"
          placeholder="Search counterparties..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded-md"
        />
        <CounterpartiesTable searchTerm={searchTerm} />
      </main>
    </div>
  );
};

export default CounterpartiesPage;
