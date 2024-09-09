// app/contracts/[id]/page.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';

interface Contract {
  id: string;
  code: string;
  trade_date: string;
  status: number;
  counterparty: number;
}

const ContractDetails = () => {
  const { id } = useParams();
  const [contract, setContract] = useState<Contract | null>(null);

  useEffect(() => {
    // Datos falsos para mostrar
    const fakeContracts: Contract[] = [
      {
        id: "1",
        code: "C-1001",
        trade_date: "2023-09-01T14:15:22Z",
        status: 1,
        counterparty: 1,
      },
      {
        id: "2",
        code: "C-1002",
        trade_date: "2023-08-24T14:15:22Z",
        status: 0,
        counterparty: 2,
      },
      {
        id: "3",
        code: "C-1003",
        trade_date: "2023-07-12T14:15:22Z",
        status: 1,
        counterparty: 3,
      },
    ];

    // Filtrar el contrato falso por ID
    const selectedContract = fakeContracts.find(contract => contract.id === id);
    setContract(selectedContract || null);

    // Llamada a la API para obtener contratos
    /*
    const fetchContract = async () => {
      try {
        const response = await fetch(`/api/deals/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Contract = await response.json();
        setContract(data);
      } catch (error) {
        console.error('Error fetching contract:', error);
      }
    };

    fetchContract();
    */
  }, [id]);

  if (!contract) return <p>Loading...</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 md:p-8 md:pl-72">
        <h1 className="text-xl font-bold">Contract Code: {contract.code}</h1>
        <p>Status: {contract.status === 1 ? 'Active' : 'Inactive'}</p>
        <p>Trade Date: {new Date(contract.trade_date).toLocaleDateString()}</p>
        <p>Counterparty: {contract.counterparty}</p>
      </main>
    </div>
  );
};

export default ContractDetails;
