"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '../components/Sidebar';


export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar/>
      <main className="flex-1 md:p-8 md:pl-72 p-6">
        <h1 className="text-2xl font-bold text-gray-900">Bienvenido</h1>
      </main>
    </div>
  );
}
