"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import LoginForm from '../../components/LoginForm';

const LoginPage = () => {
  const router = useRouter();

  const handleLogin = (token: string) => {
    localStorage.setItem('token', token);
    router.push('/contracts');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-center text-3xl font-extrabold text-gray-900">Bienvenido</h1>
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;
