'use client';

import { useState } from 'react';

const DEFAULT_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY || 'changeme123';

export default function AdminLoginPage() {
  const [adminKey, setAdminKey] = useState(DEFAULT_KEY);
  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    document.cookie = `admin_key=${adminKey}; path=/admin; max-age=86400; sameSite=lax`;
    setStatus('Logged in successfully! Redirecting...');

    setTimeout(() => {
      window.location.href = '/admin/messages';
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Login</h1>
        <p className="mb-4 text-sm text-gray-600">Enter the admin key to access messages.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="adminKey" className="block text-sm font-medium text-gray-700">
              Admin Key
            </label>
            <input
              id="adminKey"
              type="password"
              value={adminKey}
              onChange={e => setAdminKey(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-indigo-600 text-white py-2 font-medium hover:bg-indigo-700"
          >
            Login
          </button>
        </form>
        {status && <p className="mt-3 text-sm text-green-600">{status}</p>}
      </div>
    </div>
  );
}
