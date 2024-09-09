"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Sidebar from '../../../components/Sidebar';

interface Counterparty {
  id: number;
  name: string;
  type: number;
}

const CounterpartyDetails = () => {
  const { id } = useParams();
  const [counterparty, setCounterparty] = useState<Counterparty | null>(null);

  useEffect(() => {
    // Datos falsos para mostrar
    const fakeCounterparties: Counterparty[] = [
      {
        id: 1,
        name: "Company A",
        type: 1,
      },
      {
        id: 2,
        name: "Company B",
        type: 2,
      },
      {
        id: 3,
        name: "Individual X",
        type: 1,
      },
    ];

    const selectedCounterparty = fakeCounterparties.find(
      (counterparty) => counterparty.id.toString() === id
    );
    setCounterparty(selectedCounterparty || null);

    // Llamada a la API para obtener detalles del counterparty
    /*
    const fetchCounterparty = async () => {
      try {
        const response = await fetch(`/api/deals/counterparties/${id}`);
        const data = await response.json();
        setCounterparty(data);
      } catch (error) {
        console.error("Error fetching counterparty:", error);
      }
    };

    fetchCounterparty();
    */
  }, [id]);

  if (!counterparty) return <p>Loading...</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 md:p-8 md:pl-72">
        <h1 className="text-2xl font-bold">{counterparty.name}</h1>
        <p>Type: {counterparty.type === 1 ? "Company" : "Individual"}</p>
      </main>
    </div>
  );
};

export default CounterpartyDetails;
