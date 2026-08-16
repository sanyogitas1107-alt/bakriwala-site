'use client';

import React from 'react';

export default function SocialBar() {
  return (
    <div className="fixed left-0 top-1/3 z-50 flex flex-col gap-1.5 shadow-xl">
      <a 
        href="https://www.facebook.com/bakriwalaofficial" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Facebook"
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 w-11 hover:w-16 transition-all duration-200 rounded-r-xl flex items-center justify-center font-bold text-sm shadow-md"
      >
        <span>f</span>
      </a>
      <a 
        href="https://www.instagram.com/bakriwalaofficial?igsh=ZDltZ2Fzbmo4bmE3&utm_source=qr" 
        target="_blank" 
        rel="noreferrer"
        aria-label="Instagram"
        className="bg-gradient-to-tr from-yellow-500 via-pink-600 to-purple-600 text-white p-3 w-11 hover:w-16 transition-all duration-200 rounded-r-xl flex items-center justify-center font-bold text-sm shadow-md"
      >
        <span>ig</span>
      </a>
      <a 
        href="https://youtube.com/@bakriwaalaofficial?si=CsdB5NQzltSHNG3X" 
        target="_blank" 
        rel="noreferrer"
        aria-label="YouTube"
        className="bg-red-600 hover:bg-red-700 text-white p-3 w-11 hover:w-16 transition-all duration-200 rounded-r-xl flex items-center justify-center font-bold text-sm shadow-md"
      >
        <span>yt</span>
      </a>
      <a 
        href="https://wa.me/+916392004098" 
        target="_blank" 
        rel="noreferrer"
        aria-label="WhatsApp"
        className="bg-green-600 hover:bg-green-700 text-white p-3 w-11 hover:w-16 transition-all duration-200 rounded-r-xl flex items-center justify-center font-bold text-sm shadow-md"
      >
        <span>wa</span>
      </a>
    </div>
  );
}
