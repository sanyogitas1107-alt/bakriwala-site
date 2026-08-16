'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    const userData = { email, loggedInAt: new Date().toISOString(), tier: 'VIP Commercial Pro' };
    localStorage.setItem('bakriwala_auth', JSON.stringify(userData));
    router.push('/premium-content');
  };

  const handleQuickDemoLogin = () => {
    const demoUser = { email: 'vip.member@goatcare.ai', loggedInAt: new Date().toISOString(), tier: 'VIP Commercial Pro' };
    localStorage.setItem('bakriwala_auth', JSON.stringify(demoUser));
    router.push('/premium-content');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10">
        
        <div className="text-center mb-8">
          <div className="mb-3 flex justify-center items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-green-500 shadow-md bg-slate-900 flex items-center justify-center">
              <img src="/chatbot-icon.png" alt="GoatCare AI Mascot" className="w-full h-full object-cover scale-110" />
            </div>
            <span className="text-2xl font-black text-slate-900 tracking-tight">BakriWala<span className="text-green-700">Official</span></span>
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Welcome Back</h2>
          <p className="text-slate-500 mt-1 text-sm">Sign in to access VIP content & farm manager</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Email Address / Phone</label>
            <input 
              type="text" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm text-slate-800"
              placeholder="farmer@example.com"
            />
          </div>
          
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm text-slate-800"
              placeholder="••••••••"
            />
          </div>

          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
              <input type="checkbox" defaultChecked className="rounded text-green-600 focus:ring-green-600" />
              Remember me
            </label>
            <a href="#" className="text-green-700 hover:text-green-800 font-bold">Forgot password?</a>
          </div>

          <button 
            type="submit" 
            className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3.5 rounded-xl shadow-md transition transform hover:-translate-y-0.5 text-sm"
          >
            Sign In ➔
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-slate-100">
          <button
            onClick={handleQuickDemoLogin}
            type="button"
            className="w-full py-2.5 bg-yellow-400 hover:bg-yellow-300 text-slate-950 font-black rounded-xl text-xs transition shadow-sm"
          >
            ⚡ 1-Click VIP Member Demo Access
          </button>
        </div>

        <p className="text-center text-slate-600 mt-6 text-xs">
          Don't have an account?{' '}
          <Link href="/register" className="text-orange-600 hover:text-orange-700 font-bold">
            Register free here
          </Link>
        </p>
        
        <div className="mt-6 text-center">
          <Link href="/" className="text-xs font-semibold text-slate-400 hover:text-slate-600 transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}