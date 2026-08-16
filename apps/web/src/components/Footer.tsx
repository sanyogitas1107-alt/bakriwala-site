'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="/2.jpeg" 
                alt="BakriWala Logo" 
                className="h-11 w-11 object-contain rounded-full bg-slate-800 p-0.5 border border-green-500/40" 
              />
              <span className="text-2xl font-black text-white tracking-tight">
                BakriWala<span className="text-green-500">Official</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              India's premier digital ecosystem for goat farmers and livestock entrepreneurs. Empowering farmers with scientific training, veterinary advisory, high-yield breed selection, and profitable business models.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://wa.me/+916392004098" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-green-600/20 text-green-400 hover:bg-green-600 hover:text-white rounded-lg text-xs font-bold border border-green-500/30 transition"
              >
                <span>💬 WhatsApp Support</span>
              </a>
              <a 
                href="https://youtube.com/@bakriwaalaofficial?si=CsdB5NQzltSHNG3X" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-red-600/20 text-red-400 hover:bg-red-600 hover:text-white rounded-lg text-xs font-bold border border-red-500/30 transition"
              >
                <span>📺 YouTube Channel</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-green-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-400 transition">About Us</Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-green-400 transition">Programs & Masterclasses</Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-green-400 transition">Farm & Event Gallery</Link>
              </li>
              <li>
                <Link href="/breeds" className="hover:text-green-400 transition">Goat Breeds Hub</Link>
              </li>
              <li>
                <Link href="/premium" className="hover:text-green-400 transition">VIP Membership</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition">Contact & Support</Link>
              </li>
            </ul>
          </div>

          {/* Core Programs */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/programs#scientific" className="hover:text-green-400 transition">Scientific Farm Setup</Link>
              </li>
              <li>
                <Link href="/programs#nutrition" className="hover:text-green-400 transition">Low-Cost Feed Formulation</Link>
              </li>
              <li>
                <Link href="/programs#diseases" className="hover:text-green-400 transition">Disease Prevention & Vaccines</Link>
              </li>
              <li>
                <Link href="/programs#kidcare" className="hover:text-green-400 transition">Kid Care & Zero Mortality</Link>
              </li>
              <li>
                <Link href="/programs#subsidies" className="hover:text-green-400 transition">Govt Loans & NABARD Schemes</Link>
              </li>
              <li>
                <Link href="/premium" className="hover:text-green-400 transition">1-on-1 Vet Mentorship</Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase">HQ Lucknow</h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <span className="text-green-400">📍</span>
                <span>14/96, Tripathi Niwas, Sector-14, Indira Nagar, Lucknow, UP 226016</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-400">📞</span>
                <span>+91 85288 20486 / +91 63920 04098</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-400">✉️</span>
                <span>bakriwaalaofficial@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span className="text-green-400">⏰</span>
                <span>Mon - Sat: 9:00 AM – 6:00 PM</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} BakriWalaOfficial. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-slate-400 transition">Privacy Policy</Link>
            <Link href="/contact" className="hover:text-slate-400 transition">Terms of Service</Link>
            <Link href="/contact" className="hover:text-slate-400 transition">Farmer Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
