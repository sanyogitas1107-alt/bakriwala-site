'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registering:', name, email, password);
    // Later, we will connect this to your Express backend!
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        
        <div className="text-center mb-8">
          <div className="mb-3 flex justify-center items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 shadow-md bg-slate-900 flex items-center justify-center">
              <img src="/chatbot-icon.png" alt="GoatCare AI Mascot" className="w-full h-full object-cover scale-110" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">BakriWala<span className="text-green-700">Official</span></span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Create an Account</h2>
          <p className="text-slate-500 mt-1 text-sm">Join India's leading goat farming platform</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input 
              type="text" 
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-slate-800"
              placeholder="Ramesh Kumar"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-slate-800"
              placeholder="farmer@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-slate-800"
              placeholder="••••••••"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
          >
            Register
          </button>
        </form>

        <p className="text-center text-slate-600 mt-6 text-sm">
          Already have an account?{' '}
          <Link href="/login" className="text-green-700 hover:text-green-800 font-bold">
            Log in here
          </Link>
        </p>
        
        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-slate-400 hover:text-slate-600 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}