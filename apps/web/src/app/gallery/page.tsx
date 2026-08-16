'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialBar from '@/components/SocialBar';
import Chatbot from '@/components/Chatbot';
import PageHeader from '@/components/PageHeader';

interface GalleryItem {
  id: number;
  src: string;
  title: string;
  category: 'training' | 'farm' | 'breeds' | 'events';
  description: string;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: '/1.jpeg',
      title: 'Modern Stall-Fed Model Goat Unit',
      category: 'farm',
      description: 'High-density, well-ventilated elevated slatted wooden floor system ensuring dry, clean, and zero-odor conditions.'
    },
    {
      id: 2,
      src: '/4.jpeg',
      title: 'Farmer Training & Practical Diagnostics',
      category: 'training',
      description: 'Hands-on practical training on deworming, vaccination administration, and body weight estimation.'
    },
    {
      id: 3,
      src: '/5 (1).jpeg',
      title: 'High-Yield Breeding Stock Selection',
      category: 'breeds',
      description: 'Purebred foundation does and bucks selected for fast growth, twin-birth rate, and disease resistance.'
    },
    {
      id: 4,
      src: '/5 (2).jpeg',
      title: 'Field Visit & Shed Inspection Workshop',
      category: 'training',
      description: 'On-site technical evaluation of farm drainage, ventilation angles, and predator fencing.'
    },
    {
      id: 5,
      src: '/5 (3).jpeg',
      title: 'Commercial Stall-Fed Goat Farm Unit',
      category: 'farm',
      description: 'Organized feeding aisles allowing fast mechanical feeding of Total Mixed Ration (TMR) and chopped green fodder.'
    },
    {
      id: 6,
      src: '/5 (4).jpeg',
      title: 'Pedigree Buck & Herd Health Checkup',
      category: 'breeds',
      description: 'Regular reproductive soundness evaluation of breeding bucks to ensure optimal pregnancy rates.'
    },
    {
      id: 7,
      src: '/5 (5).jpeg',
      title: 'Kid Care & Nursery Management',
      category: 'farm',
      description: 'Dedicated warm nursery zone for neonatal kids with temperature regulation and clean bedding.'
    },
    {
      id: 8,
      src: '/5 (6).jpeg',
      title: 'Practical Veterinary Injection Demonstration',
      category: 'training',
      description: 'Teaching farmers the correct intramuscular, subcutaneous, and intravenous injection techniques.'
    },
    {
      id: 9,
      src: '/5 (7).jpeg',
      title: 'Hydroponic & Green Fodder Cultivation',
      category: 'farm',
      description: 'Super Napier and protein-rich green fodder harvesting for cost-effective daily nutrition.'
    },
    {
      id: 10,
      src: '/5 (8).jpeg',
      title: 'Feed Sizing & Silage Packing Masterclass',
      category: 'training',
      description: 'Silage making and storage techniques using anaerobic vacuum bags to store excess monsoon green grass.'
    },
    {
      id: 11,
      src: '/5 (9).jpeg',
      title: 'State Livestock Exhibition & Seminar',
      category: 'events',
      description: 'BakriWala delegation representing progressive goat farming at state agricultural and livestock expos.'
    },
    {
      id: 12,
      src: '/5 (10).jpeg',
      title: 'Farmer Group Certificate Award Ceremony',
      category: 'events',
      description: 'Graduating batch of certified commercial goat farm supervisors ready to lead modern farming ventures.'
    },
    {
      id: 13,
      src: '/5 (11).jpeg',
      title: 'Semi-Intensive Paddock Grazing System',
      category: 'farm',
      description: 'Combined grazing and stall feeding paddock allowing natural foraging and exercise.'
    },
    {
      id: 14,
      src: '/5 (12).jpeg',
      title: 'Champion Breed Conformation Showcase',
      category: 'breeds',
      description: 'Showcasing the distinct body characteristics, ear length, and roman nose of premier Indian meat breeds.'
    },
    {
      id: 15,
      src: '/5 (13).jpeg',
      title: 'Village Level Veterinary Health Camp',
      category: 'events',
      description: 'Free deworming and vaccination distribution drive conducted across rural districts.'
    },
    {
      id: 16,
      src: '/5 (14).jpeg',
      title: 'BakriWala Technical Consulting Team',
      category: 'events',
      description: 'Our team of veterinary doctors, agronomists, and digital specialists empowering farmers nationwide.'
    }
  ];

  const filteredItems =
    activeCategory === 'all'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 relative flex flex-col justify-between">
      <Navbar />
      <SocialBar />
      <Chatbot />

      <main className="flex-1">
        <PageHeader
          badge="Visual Showcase"
          title="Farm & Event Gallery"
          subtitle="Real glimpses into our training camps, state-of-the-art stall-fed goat sheds, champion breeds, and farmer graduation events."
          breadcrumb="Gallery"
        />

        {/* Filter Buttons */}
        <section className="pt-12 pb-6 px-6 max-w-7xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { label: 'All Photos (16)', val: 'all' },
              { label: 'Farm & Sheds', val: 'farm' },
              { label: 'Training & Workshops', val: 'training' },
              { label: 'Goat Breeds', val: 'breeds' },
              { label: 'Events & Expos', val: 'events' }
            ].map((cat) => (
              <button
                key={cat.val}
                onClick={() => setActiveCategory(cat.val)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition shadow-xs ${
                  activeCategory === cat.val
                    ? 'bg-green-700 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-10 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImage(item)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-bold flex items-center gap-1">
                      <span>🔍 Click to Zoom</span>
                    </span>
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-green-700 bg-green-50 px-2.5 py-0.5 rounded-md">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm mt-2 line-clamp-1 group-hover:text-green-700 transition">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Image Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl relative animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-black/60 hover:bg-black text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition z-10"
              >
                ✕
              </button>

              <div className="max-h-[60vh] bg-black flex items-center justify-center overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full max-h-[60vh] object-contain"
                />
              </div>

              <div className="p-6 sm:p-8 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full">
                  {selectedImage.category}
                </span>
                <h3 className="text-2xl font-black text-slate-900">{selectedImage.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
