'use client';

import React from 'react';
import Link from 'next/link';

interface PageHeaderProps {
  badge?: string;
  title: string;
  subtitle: string;
  breadcrumb?: string;
}

export default function PageHeader({ badge, title, subtitle, breadcrumb }: PageHeaderProps) {
  return (
    <div className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-gradient-to-b from-green-950 via-slate-900 to-slate-900 text-white">
      {/* Subtle Background Pattern & Glow */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Breadcrumb */}
        {breadcrumb && (
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-400 mb-4 tracking-wide uppercase">
            <Link href="/" className="hover:text-green-400 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-green-400">{breadcrumb}</span>
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-green-500/20 text-green-300 font-bold text-xs sm:text-sm rounded-full mb-4 border border-green-500/30 backdrop-blur-sm">
            <span>✨</span>
            <span>{badge}</span>
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-4 drop-shadow-sm">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
