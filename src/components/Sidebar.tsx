import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="hidden md:flex md:flex-col md:w-64 md:fixed md:inset-y-0 bg-gray-800">
      <div className="flex flex-col flex-grow pt-5 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4 text-white">
          <h1 className="text-lg font-bold">Mis contratos</h1>
        </div>
        <nav className="mt-5 flex-1 px-2 bg-gray-800 space-y-1">
          <Link href="/" className="block w-full text-white hover:bg-gray-700 group text-left px-2 py-2 text-sm font-medium rounded-md">
            Inicio
          </Link>
          <Link href="/contracts" className="block w-full text-white hover:bg-gray-700 group text-left px-2 py-2 text-sm font-medium rounded-md">
            Contratos
          </Link>
          <Link href="/counterparties" className="block w-full text-white hover:bg-gray-700 group text-left px-2 py-2 text-sm font-medium rounded-md">
            Counterparties
          </Link>
          <Link href="/login" className="block w-full text-white hover:bg-gray-700 group text-left px-2 py-2 text-sm font-medium rounded-md">
            Cerrar sesión
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
