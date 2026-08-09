'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  // Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    { role: 'ai', text: 'Hello! I am your BakriWala Assistant. How can I help you and your farm today?' }
  ]);

  // Handle sending a message in the chat
  const handleSendMessage = async () => {
    if (!message.trim()) return;
    
    const newHistory = [...chatHistory, { role: 'user', text: message }];
    setChatHistory(newHistory);
    const userMessage = message; 
    setMessage('');

    try {
      const response = await fetch('http://localhost:8000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage })
      });
      
      const data = await response.json();
      
      if (data.success) {
        setChatHistory([...newHistory, { role: 'ai', text: data.reply }]);
      } else {
        setChatHistory([...newHistory, { role: 'ai', text: "Sorry, I had trouble thinking of an answer." }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setChatHistory([...newHistory, { role: 'ai', text: "Could not connect to the AI server. Make sure Express and Python are running!" }]);
    }
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 relative scroll-smooth">

      {/* ======================================================= */}
      {/* 0. FIXED BLURRED BACKGROUND (Less Blur)                 */}
      {/* ======================================================= */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        {/* Changed blur-md to blur-sm as requested */}
        <img 
          src="/bg.jpg" 
          alt="Background" 
          className="w-full h-full object-cover blur-sm scale-105"
        />
        <div className="absolute inset-0 bg-slate-50/70"></div>
      </div>

      {/* ======================================================= */}
      {/* 0.5 STICKY SOCIAL MEDIA BAR                             */}
      {/* ======================================================= */}
      <div className="fixed left-0 top-1/3 z-50 flex flex-col gap-1">
        <a href="https://www.facebook.com/bakriwalaofficial" className="bg-blue-600 text-white p-3 w-12 hover:w-16 transition-all rounded-r-lg shadow-lg flex items-center justify-center font-bold">f</a>
        <a href="https://www.instagram.com/bakriwalaofficial?igsh=ZDltZ2Fzbmo4bmE3&utm_source=qr" className="bg-pink-600 text-white p-3 w-12 hover:w-16 transition-all rounded-r-lg shadow-lg flex items-center justify-center font-bold">ig</a>
        <a href="https://youtube.com/@bakriwaalaofficial?si=CsdB5NQzltSHNG3X" className="bg-red-600 text-white p-3 w-12 hover:w-16 transition-all rounded-r-lg shadow-lg flex items-center justify-center font-bold">yt</a>
        <a href="https://wa.me/+916392004098" className="bg-green-600 text-white p-3 w-12 hover:w-16 transition-all rounded-r-lg shadow-lg flex items-center justify-center font-bold">wa</a>
      </div>

      {/* ======================================================= */}
      {/* 1. NAVIGATION BAR                                       */}
      {/* ======================================================= */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-40 border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/2.jpeg" alt="BakriWala Logo" className="h-10 w-10 object-contain bg-slate-100 rounded-full" />
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">BakriWala<span className="text-green-700">Official</span></span>
          </div>

          <div className="hidden md:flex gap-8 font-semibold text-sm text-slate-800 uppercase tracking-wide">
            <a href="#home" className="hover:text-green-700 transition">Home</a>
            <a href="#about" className="hover:text-green-700 transition">About</a>
            <a href="#learn" className="hover:text-green-700 transition">Programs</a>
            <a href="#gallery" className="hover:text-green-700 transition">Gallery</a>
            <a href="#contact" className="hover:text-green-700 transition">Contact</a>
          </div>

          <div className="flex gap-4 items-center">
            {/* Language Selector */}
            {/* The Real Google Translate Widget */}
            <div id="google_translate_element" className="hidden md:flex items-center justify-center"></div>

            <Link href="/login" className="text-sm font-bold text-slate-800 hover:text-green-800 transition hidden sm:block">
              Log In
            </Link>
            <Link href="/register" className="px-5 py-2.5 bg-green-700 hover:bg-green-800 text-white text-sm font-bold rounded-md shadow-md transition">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* ======================================================= */}
      {/* 2. HERO SECTION (With Circular Image)                   */}
      {/* ======================================================= */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 min-h-[80vh]">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-4 py-1.5 bg-green-100/90 text-green-800 font-bold text-sm rounded-full mb-2 backdrop-blur-sm border border-green-200">
            India's Trusted Goat Farming Platform
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight drop-shadow-sm">
            Learn Better. <br/>
            Farm Smarter. <br/>
            <span className="text-green-700">Earn More.</span>
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-xl font-medium">
            Empowering goat farmers with scientific, practical, and easy-to-understand knowledge that increases productivity, reduces disease losses, and improves farm profitability.
          </p>
          <div className="pt-4 flex gap-4">
            <a href="#about" className="px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-bold rounded-lg shadow-lg transition transform hover:-translate-y-1">
              Discover Our Platform
            </a>
          </div>
        </div>
        
        {/* CIRCULAR IMAGE CONTAINER */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="w-full max-w-[450px] aspect-square rounded-full overflow-hidden shadow-2xl border-8 border-white/60 backdrop-blur-md relative">
            <img src="/1.jpeg" alt="Modern Goat Farming" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 2.5 ACHIEVEMENTS SECTION                                */}
      {/* ======================================================= */}
      <section className="py-12 bg-white/40 backdrop-blur-md border-y border-white/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-black text-green-700 drop-shadow-sm">5K+</h3>
              <p className="text-slate-800 font-bold mt-2">Farmers Trained</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-green-700 drop-shadow-sm">120+</h3>
              <p className="text-slate-800 font-bold mt-2">Expert Vets</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-green-700 drop-shadow-sm">50+</h3>
              <p className="text-slate-800 font-bold mt-2">Video Masterclasses</p>
            </div>
            <div>
              <h3 className="text-4xl font-black text-green-700 drop-shadow-sm">24/7</h3>
              <p className="text-slate-800 font-bold mt-2">AI Chatbot</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 3. ABOUT US SECTION                                     */}
      {/* ======================================================= */}
      <section id="about" className="bg-white/60 backdrop-blur-lg py-24 border-t border-slate-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-xl border-4 border-white/50">
             <img src="/4.jpeg" alt="BakriWala Education" className="w-full h-full object-cover" />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 drop-shadow-sm">About BakriWalaOfficial</h2>
            <p className="text-slate-800 leading-relaxed text-lg font-medium">
              BakriWalaOfficial is one of India's leading digital platforms dedicated to goat farming, goat health management, and livestock entrepreneurship.
            </p>
            <p className="text-slate-800 leading-relaxed text-lg font-medium">
              We create high-quality educational content covering every aspect of modern goat farming, including goat breeding, goat nutrition, vaccination schedules, deworming, disease diagnosis, treatment protocols, goat shed management, kid rearing, feed formulation, dairy and meat goat production, and profitable goat farming business models.
            </p>
            <div className="p-6 bg-white/70 backdrop-blur-md border-l-4 border-green-700 rounded-r-lg mt-6 shadow-sm">
              <p className="text-slate-900 font-bold italic">
                Beyond educational videos, BakriWalaOfficial is building a complete digital ecosystem for goat farmers by integrating AI-powered advisory services, expert consultations, training programs, farm management resources, and practical tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 3.5 PREMIUM LOGIN SECTION                               */}
      {/* ======================================================= */}
      <section className="py-20 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <span className="text-yellow-400 text-5xl mb-4 block">👑</span>
          <h2 className="text-3xl md:text-5xl font-black mb-6">Unlock Premium Goat Farming Content</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-8 font-medium">
            Get exclusive access to advanced veterinary consultations, downloadable business plans, low-cost feed formulation calculators, and 1-on-1 mentorship.
          </p>
          <Link href="/login" className="inline-block px-10 py-4 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-black text-lg rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] transition transform hover:-translate-y-1">
            Log In to Access Premium 
          </Link>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 4. WHAT YOU'LL LEARN                                    */}
      {/* ======================================================= */}
      <section id="learn" className="py-24 bg-white/50 backdrop-blur-lg border-y border-white/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 drop-shadow-md text-slate-900">What You'll Learn With Us</h2>
            <p className="text-slate-700 text-lg max-w-2xl mx-auto font-bold">Comprehensive, research-based curriculum designed for both beginners and commercial farmers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Scientific Goat Farming", "Goat Disease Identification & Treatment", "Vaccination & Deworming Schedules",
              "Goat Feeding & Low-Cost Feed", "Goat Breeding & Genetics", "Goat Shed Design",
              "Kid Care & Mortality Reduction", "Ethno-Veterinary Practices", "Goat Farming Business Planning",
              "Government Schemes", "Market Linkages", "Success Stories of Farmers"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-5 bg-white/70 backdrop-blur-md rounded-xl border border-white shadow-sm hover:shadow-md transition">
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-green-100 text-green-700 rounded-full font-bold">✓</span>
                <span className="font-bold text-slate-800">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 4.5 PICTURE GALLERY                                     */}
      {/* ======================================================= */}
      <section id="gallery" className="py-24 bg-slate-900/90 backdrop-blur-lg border-t border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Farm Gallery & Events</h2>
            <p className="text-slate-400 font-medium">Glimpses of our successful farmers and training programs across India.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* Add images named gal-1.jpg, gal-2.jpg etc. to your public folder */}
            <div className="bg-slate-800 aspect-square rounded-xl overflow-hidden border-2 border-slate-700">
               <img src="/5 (2).jpeg" alt="Gallery 1" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>
            <div className="bg-slate-800 aspect-square rounded-xl overflow-hidden border-2 border-slate-700">
               <img src="/5 (3).jpeg" alt="Gallery 2" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>
            <div className="bg-slate-800 aspect-square rounded-xl overflow-hidden border-2 border-slate-700 hidden md:block">
               <img src="/5 (5).jpeg" alt="Gallery 3" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>
            <div className="bg-slate-800 aspect-[2/1] md:col-span-2 rounded-xl overflow-hidden border-2 border-slate-700">
               <img src="/5 (4).jpeg" alt="Gallery 4" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>
            <div className="bg-slate-800 aspect-square rounded-xl overflow-hidden border-2 border-slate-700">
               <img src="/5 (12).jpeg" alt="Gallery 5" className="w-full h-full object-cover hover:scale-110 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 5. MISSION & VISION                                     */}
      {/* ======================================================= */}
      <section id="vision" className="py-24 bg-white/60 backdrop-blur-lg border-y border-white/60 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-green-50/80 backdrop-blur-md p-12 rounded-3xl border border-green-200 shadow-sm text-left">
              <div className="w-16 h-16 bg-green-700 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg">🎯</div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-800 text-lg leading-relaxed font-medium">
                To transform goat farming into a profitable, sustainable, and technology-driven livelihood by providing reliable, research-based education and practical solutions to every goat farmer.
              </p>
            </div>

            <div className="bg-orange-50/80 backdrop-blur-md p-12 rounded-3xl border border-orange-200 shadow-sm text-left">
              <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg">👁️</div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-800 text-lg leading-relaxed font-medium">
                To become India's most trusted goat farming knowledge platform, helping millions of livestock farmers improve productivity, animal welfare, and income through education, innovation, and digital technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 6. CONTACT & QUERY SECTION                              */}
      {/* ======================================================= */}
      <section id="contact" className="py-24 bg-slate-100/70 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-xl border border-white">
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-black text-slate-900 mb-2">Get in Touch</h2>
                <p className="text-slate-600 font-medium">Have questions about our programs or need veterinary support? Reach out to us directly.</p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl">📍</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Head Office</h4>
                    <p className="text-slate-600 text-sm">14/96, Tripathi Niwas, Sector-14, Indira Nagar, Lucknow, Uttar Pradesh, India, 226016</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl">📞</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone Support</h4>
                    <p className="text-slate-600 text-sm">+91 85288 20486 , +91 63920 04098 (Mon - Sat, 9 AM - 6 PM)</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-xl">✉️</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email Us</h4>
                    <p className="text-slate-600 text-sm">bakriwaalaofficial@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Query Form */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Send us a Query</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Your Name</label>
                  <input type="text" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="Ramesh Kumar" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="+91" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Your Question / Message</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-600" placeholder="How can I start a commercial farm?"></textarea>
                </div>
                <button type="submit" className="w-full bg-slate-900 text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">
                  Submit Query
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* ======================================================= */}
      {/* 7. FOOTER                                               */}
      {/* ======================================================= */}
      <footer className="bg-slate-950/90 backdrop-blur-lg text-slate-400 py-8 text-center border-t border-slate-800">
        <p className="font-semibold text-slate-300">© 2026 BakriWalaOfficial – Learn Better. Farm Smarter. Earn More.</p>
      </footer>

      {/* ======================================================= */}
      {/* 8. THE FLOATING CHATBOT                                 */}
      {/* ======================================================= */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 z-50 flex flex-col overflow-hidden">
          
          <div className="bg-slate-900/95 backdrop-blur-md text-white p-4 flex justify-between items-center shadow-md z-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center text-sm">🐐</div>
              <div>
                <h3 className="font-bold text-md leading-tight">BakriWala AI</h3>
                <p className="text-xs text-slate-300">Expert Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-slate-400 hover:text-white font-bold text-xl transition">
              ✕
            </button>
          </div>

          <div className="h-[350px] p-4 overflow-y-auto bg-slate-50/50 space-y-4">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 text-sm shadow-sm font-medium ${
                  msg.role === 'user' 
                    ? 'bg-green-700 text-white rounded-2xl rounded-tr-sm' 
                    : 'bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-sm'
                  }`}>
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-3 bg-white/90 backdrop-blur-md border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask a farming question..."
              className="flex-1 border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-600 text-sm text-black bg-white"
            />
            <button
              onClick={handleSendMessage}
              className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-green-700 transition shadow-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center text-3xl hover:bg-green-800 transition transform hover:scale-110 z-50 border-4 border-white/50 backdrop-blur-sm"
      >
        {isChatOpen ? '✕' : '💬'}
      </button>

    </div>
  );
}