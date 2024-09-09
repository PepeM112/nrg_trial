"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Counterparty {
  id: number;
  name: string;
  type: number;
}

interface CounterpartiesTableProps {
  searchTerm: string;
}

const CounterpartiesTable: React.FC<CounterpartiesTableProps> = ({ searchTerm }) => {
  const [counterparties, setCounterparties] = useState<Counterparty[]>([]);
  const [filteredCounterparties, setFilteredCounterparties] = useState<Counterparty[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fakeCounterparties: Counterparty[] = [
      {
        id: 1,
        name: "Company A",
        type: 1,
      },
      {
        id: 2,
        name: "Individual B",
        type: 0,
      },
      {
        id: 3,
        name: "Company C",
        type: 1,
      },
    ];

    setCounterparties(fakeCounterparties);
  }, []);

  useEffect(() => {
    const filtered = counterparties.filter((counterparty) =>
      counterparty.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCounterparties(filtered);
  }, [searchTerm, counterparties]);

  const handleViewCounterparty = (id: number) => {
    router.push(`/counterparties/${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredCounterparties.map((counterparty) => (
            <tr key={counterparty.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {counterparty.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {counterparty.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {counterparty.type === 1 ? "Company" : "Individual"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  className="px-2 py-2 text-white bg-gray-900 hover:bg-gray-700 font-medium rounded-md"
                  onClick={() => handleViewCounterparty(counterparty.id)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CounterpartiesTable;
