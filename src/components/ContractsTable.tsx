"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Contract {
  id: string;
  code: string;
  trade_date: string;
  status: number;
  counterparty: number;
}

interface ContractsTableProps {
  searchTerm: string;
}

const ContractsTable: React.FC<ContractsTableProps> = ({ searchTerm }) => {
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [filteredContracts, setFilteredContracts] = useState<Contract[]>([]);
  const router = useRouter();

  useEffect(() => {
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

    setContracts(fakeContracts);
  }, []);

  useEffect(() => {
    const filtered = contracts.filter((contract) =>
      contract.code.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContracts(filtered);
  }, [searchTerm, contracts]);

  const handleViewContract = (id: string) => {
    router.push(`/contracts/${id}`);
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
              Código
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Estado
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Fecha
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Counterparty
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {filteredContracts.map((contract) => (
            <tr key={contract.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {contract.id}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {contract.code}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {contract.status}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(contract.trade_date).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {contract.counterparty}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button
                  className="px-2 py-2 text-white bg-gray-900 hover:bg-gray-700 font-medium rounded-md"
                  onClick={() => handleViewContract(contract.id)}
                >
                  Ver detalles
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContractsTable;
