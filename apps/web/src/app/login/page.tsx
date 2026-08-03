'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Logging in with:', email, password);
    // Later, we will connect this to your database!
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        
        <div className="text-center mb-8">
          <div className="text-4xl mb-2 flex justify-center items-center gap-2">
            🐐 <span className="text-2xl font-black text-green-900 tracking-tight">GoatCare AI</span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-slate-500 mt-2">Log in to manage your herd</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
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

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
              <input type="checkbox" className="rounded text-green-600 focus:ring-green-600" />
              Remember me
            </label>
            <a href="#" className="text-green-700 hover:text-green-800 font-medium">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-lg shadow-md transition transform hover:-translate-y-0.5"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-slate-600 mt-6 text-sm">
          Don't have an account?{' '}
          <Link href="/register" className="text-orange-600 hover:text-orange-700 font-bold">
            Register here
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