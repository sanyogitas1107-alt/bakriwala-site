'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface User {
  id: number;
  name: string;
  phone: string;
  preferred_lang: string;
  goats?: Array<any>;
}

export default function AdminDashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
      return;
    }
    fetchUsers();
  }, [router]);

  const fetchUsers = async () => {
    try {
      const res = await fetch('http://localhost:8000/api/users');
      const data = await res.json();
      if (data.success) {
        setUsers(data.data || []);
      }
    } catch (err) {
      console.error('Failed to fetch users:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id: number) => {
    if (!confirm('Are you sure you want to delete this user?')) return;

    const token = localStorage.getItem('adminToken');
    try {
      const res = await fetch(`http://localhost:8000/api/admin/users/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (data.success) {
        setUsers(users.filter((u) => u.id !== id));
      } else {
        alert(data.error || 'Delete failed');
      }
    } catch (err) {
      alert('Error deleting user');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-3xl font-extrabold text-white flex items-center gap-2">
              🐐 GoatCare Admin Panel
            </h1>
            <p className="text-slate-400 text-sm mt-1">Manage registered farmers, goats, and system configuration</p>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-sm transition"
          >
            Logout
          </button>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-slate-400 text-sm font-medium">Total Registered Farmers</h3>
            <p className="text-3xl font-bold text-white mt-2">{users.length}</p>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-slate-400 text-sm font-medium">Total Registered Goats</h3>
            <p className="text-3xl font-bold text-green-400 mt-2">
              {users.reduce((acc, u) => acc + (u.goats?.length || 0), 0)}
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl">
            <h3 className="text-slate-400 text-sm font-medium">System Status</h3>
            <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-400 font-semibold rounded-full text-xs">
              All Systems Operational
            </span>
          </div>
        </div>

        {/* Registered Users Table */}
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 shadow-xl">
          <h2 className="text-xl font-bold text-white mb-4">Registered Farmers List</h2>

          {loading ? (
            <p className="text-slate-400">Loading registered farmers...</p>
          ) : users.length === 0 ? (
            <p className="text-slate-500">No farmers registered yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-slate-300">
                <thead className="text-xs uppercase bg-slate-900/50 text-slate-400 border-b border-slate-700">
                  <tr>
                    <th className="py-3 px-4">ID</th>
                    <th className="py-3 px-4">Name</th>
                    <th className="py-3 px-4">Phone</th>
                    <th className="py-3 px-4">Language</th>
                    <th className="py-3 px-4">Goats Owned</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-700/30">
                      <td className="py-3 px-4 font-mono text-slate-400">#{user.id}</td>
                      <td className="py-3 px-4 font-semibold text-white">{user.name}</td>
                      <td className="py-3 px-4">{user.phone}</td>
                      <td className="py-3 px-4 uppercase text-xs font-bold text-orange-400">
                        {user.preferred_lang}
                      </td>
                      <td className="py-3 px-4">{user.goats?.length || 0}</td>
                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={() => handleDeleteUser(user.id)}
                          className="text-xs bg-red-600/20 hover:bg-red-600 text-red-300 hover:text-white px-3 py-1.5 rounded transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}