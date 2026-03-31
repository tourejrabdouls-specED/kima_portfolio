'use client';

import { useEffect, useState } from 'react';

type Message = {
  id: number;
  name: string;
  email: string;
  message: string;
  read: boolean;
  createdAt: string;
};

const ADMIN_KEY = process.env.NEXT_PUBLIC_ADMIN_KEY || 'changeme123';

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMessages() {
      try {
        const res = await fetch('/api/contact', {
          headers: { 'x-admin-key': ADMIN_KEY },
        });
        if (!res.ok) throw new Error('Could not load messages');

        const data = await res.json();
        if (!data.success) throw new Error(data.error || 'Unknown error');

        setMessages(data.messages || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    loadMessages();
  }, []);

  const handleLogout = () => {
    document.cookie = 'admin_key=; Max-Age=0; path=/admin';
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Admin: Contact Messages</h1>
          <button
            onClick={handleLogout}
            className="rounded-md bg-gray-200 text-gray-800 px-3 py-1 text-sm hover:bg-gray-300"
          >
            Logout
          </button>
        </div>

        {loading && <p className="text-gray-600">Loading messages...</p>}
        {error && <p className="text-red-600">{error}</p>}

        {!loading && !error && messages.length === 0 && (
          <p className="text-gray-700">No messages have been received yet.</p>
        )}

        {!loading && !error && messages.length > 0 && (
          <div className="space-y-4">
            {messages.map(m => (
              <div key={m.id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex flex-wrap justify-between gap-2 text-sm text-gray-500">
                  <span className="font-semibold text-gray-700">{m.name}</span>
                  <span>{new Date(m.createdAt).toLocaleString()}</span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{m.email}</p>
                <p className="mt-3 text-gray-800 whitespace-pre-wrap">{m.message}</p>
                <div className="mt-3 text-xs">
                  <span className={m.read ? 'text-green-600' : 'text-yellow-600'}>
                    {m.read ? 'Read' : 'Unread'}
                  </span>
                </div>
                <div className="mt-4 flex gap-2">
                  <button
                    onClick={async () => {
                      try {
                        const res = await fetch('/api/contact', {
                          method: 'PATCH',
                          headers: {
                            'Content-Type': 'application/json',
                            'x-admin-key': ADMIN_KEY,
                          },
                          body: JSON.stringify({ id: m.id, read: !m.read }),
                        });
                        if (!res.ok) throw new Error('Failed to update read status');

                        setMessages(prev =>
                          prev.map(item => (item.id === m.id ? { ...item, read: !item.read } : item)),
                        );
                      } catch (err) {
                        setError(err instanceof Error ? err.message : 'Could not update status');
                      }
                    }}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
                    Mark as {m.read ? 'Unread' : 'Read'}
                  </button>
                  <button
                    onClick={async () => {
                      if (!confirm('Delete this message?')) return;
                      try {
                        const res = await fetch(`/api/contact?id=${m.id}`, {
                          method: 'DELETE',
                          headers: { 'x-admin-key': ADMIN_KEY },
                        });
                        if (!res.ok) throw new Error('Failed to delete');
                        setMessages(prev => prev.filter(item => item.id !== m.id));
                      } catch (err) {
                        setError(err instanceof Error ? err.message : 'Could not delete message');
                      }
                    }}
                    className="rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
