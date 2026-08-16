'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialBar from '@/components/SocialBar';
import Chatbot from '@/components/Chatbot';
import PageHeader from '@/components/PageHeader';

interface Breed {
  id: string;
  name: string;
  hindiName: string;
  origin: string;
  purpose: 'Meat' | 'Milk' | 'Dual Purpose (Meat & Milk)';
  climate: string;
  weightMale: string;
  weightFemale: string;
  milkYield: string;
  twinningRate: string;
  image: string;
  badge?: string;
  description: string;
  highlights: string[];
}

export default function BreedsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [purposeFilter, setPurposeFilter] = useState('all');

  const breeds: Breed[] = [
    {
      id: 'barbari',
      name: 'Barbari Goat',
      hindiName: 'बरबरी बकरी',
      origin: 'Agra, Mathura, Aligarh (UP) & Bharatpur (Rajasthan)',
      purpose: 'Dual Purpose (Meat & Milk)',
      climate: 'Highly adaptable to stall-fed / intensive zero-grazing system',
      weightMale: '35 - 45 kg',
      weightFemale: '25 - 35 kg',
      milkYield: '1.0 - 1.5 Litres / day',
      twinningRate: 'High (70%+ Twin / Triplet births)',
      image: '/5 (1).jpeg',
      badge: 'Best for Stall-Fed Farming',
      description: 'The premier breed for commercial stall-fed farming in India. Medium compact body, upright erect alert ears, rapid sexual maturity (early kid-bearing), and high prolificacy.',
      highlights: [
        'Can be raised in compact enclosed spaces with zero grazing',
        'Gives birth twice in 14-15 months with frequent twins',
        'Docile temperament and excellent feed conversion efficiency'
      ]
    },
    {
      id: 'sirohi',
      name: 'Sirohi Goat',
      hindiName: 'सिरोही बकरी',
      origin: 'Sirohi, Ajmer, Nagaur, Jaipur (Rajasthan) & North Gujarat',
      purpose: 'Dual Purpose (Meat & Milk)',
      climate: 'Hot, arid, and semi-arid dry climates',
      weightMale: '50 - 65 kg',
      weightFemale: '35 - 45 kg',
      milkYield: '1.2 - 2.0 Litres / day',
      twinningRate: 'Moderate (50% - 60%)',
      image: '/5 (4).jpeg',
      badge: 'Hardiest Meat Breed',
      description: 'Extremely popular brown/spotted coat with compact cylindrical body and medium pendulous leaf-like ears. Known for outstanding heat tolerance and disease resistance.',
      highlights: [
        'Thrives even on harsh drylands and coarse tree foliage',
        'Strong immunity against respiratory ailments in dry regions',
        'High consumer demand during Eid festive sales'
      ]
    },
    {
      id: 'jamunapari',
      name: 'Jamunapari Goat',
      hindiName: 'जमुनापारी बकरी',
      origin: 'Etawah district (between Yamuna and Chambal rivers), UP',
      purpose: 'Dual Purpose (Meat & Milk)',
      climate: 'Semi-arid, subtropical fertile plains',
      weightMale: '65 - 85 kg',
      weightFemale: '45 - 60 kg',
      milkYield: '2.0 - 3.5 Litres / day',
      twinningRate: 'Moderate (45% - 55%)',
      image: '/5 (12).jpeg',
      badge: 'King of Indian Dairy Goats',
      description: 'The largest and most majestic Indian indigenous breed. Characterized by prominent convex Roman nose, very long flat drooping ears, and high milk yield with 5% fat.',
      highlights: [
        'Top tier daily milk yield among all native Indian goat breeds',
        'Impressive height and bone structure suitable for buck crossing',
        'Requires open browsing space or spacious elevated sheds'
      ]
    },
    {
      id: 'black-bengal',
      name: 'Black Bengal Goat',
      hindiName: 'ब्लैक बंगाल बकरी',
      origin: 'West Bengal, Bihar, Assam, Odisha & Jharkhand',
      purpose: 'Meat',
      climate: 'Humid, heavy rainfall, and coastal agro-climatic zones',
      weightMale: '20 - 30 kg',
      weightFemale: '15 - 22 kg',
      milkYield: '0.4 - 0.7 Litres / day',
      twinningRate: 'Very High (80%+ Multiples - Triplets/Quadruplets common)',
      image: '/5 (5).jpeg',
      badge: 'Tender Meat & High Twinning',
      description: 'World-famous for supreme meat tenderness and premium quality leather. Small stature, black glossy coat, short erect ears, and early puberty.',
      highlights: [
        'Highest reproductive prolificacy in India (up to 4 kids/litter)',
        'Unmatched resistance against tick-borne and foot-rot infections',
        'Commanding top retail price per kg for mutton'
      ]
    },
    {
      id: 'beetal',
      name: 'Beetal Goat',
      hindiName: 'बीतल बकरी',
      origin: 'Gurdaspur, Amritsar, Ferozepur (Punjab) & Haryana',
      purpose: 'Dual Purpose (Meat & Milk)',
      climate: 'Subtropical plains, stall-fed adaptable',
      weightMale: '60 - 80 kg',
      weightFemale: '40 - 55 kg',
      milkYield: '2.0 - 3.0 Litres / day',
      twinningRate: 'High (60% - 70%)',
      image: '/5 (3).jpeg',
      badge: 'High-Yield Heavy Breed',
      description: 'Often called the "Punjab Jamunapari". Possesses long drooping ears and a convex Roman face, but shorter legs than Jamunapari, making it far superior for stall feeding.',
      highlights: [
        'Exceptional feed conversion into both tender meat and milk',
        'Performs exceptionally well in stall-fed intensive housing',
        'Widely chosen as breeding sire for upgrading non-descript herds'
      ]
    },
    {
      id: 'boer',
      name: 'Boer Goat (Exotic / Crossbred)',
      hindiName: 'बोर बकरी',
      origin: 'South Africa (Widely crossbred in India)',
      purpose: 'Meat',
      climate: 'Adaptable to controlled temperature stall-fed farms',
      weightMale: '90 - 125 kg',
      weightFemale: '70 - 90 kg',
      milkYield: '1.5 - 2.5 Litres / day',
      twinningRate: 'High (70%+)',
      image: '/5 (2).jpeg',
      badge: 'Fastest Muscle & Weight Gain',
      description: 'The global standard for heavy commercial mutton production. White body with distinctive reddish-brown head, heavy muscular hindquarters, and 200-250g daily weight gain.',
      highlights: [
        'Fastest average daily gain (ADG) reaching 35kg in 5 months',
        'High dressing carcass percentage (55% - 60%)',
        'Boer crossbreeding on Sirohi/Beetal produces rapid vigor'
      ]
    },
    {
      id: 'osmanabadi',
      name: 'Osmanabadi Goat',
      hindiName: 'उस्मानाबादी बकरी',
      origin: 'Osmanabad, Latur, Solapur, Ahmednagar (Maharashtra)',
      purpose: 'Dual Purpose (Meat & Milk)',
      climate: 'Drought-prone, semi-arid Deccan plateau',
      weightMale: '40 - 55 kg',
      weightFemale: '30 - 40 kg',
      milkYield: '1.0 - 1.8 Litres / day',
      twinningRate: 'High (60% - 70%)',
      image: '/5 (11).jpeg',
      badge: 'Drought Resilient',
      description: 'Predominantly shiny black or brownish-black coat with hardy hooves and strong stamina. Thrives in harsh drought conditions with minimal green fodder.',
      highlights: [
        'Resistant to drought stress and internal parasitic load',
        'High fertility with regular kidding every 7-8 months',
        'Ideal foundation choice for central and southern India'
      ]
    },
    {
      id: 'sojat',
      name: 'Sojat Goat',
      hindiName: 'सोजत बकरी',
      origin: 'Sojat, Pali, Jodhpur (Rajasthan)',
      purpose: 'Meat',
      climate: 'Hot, dry, and low humidity zones',
      weightMale: '60 - 75 kg',
      weightFemale: '40 - 50 kg',
      milkYield: '1.0 - 1.5 Litres / day',
      twinningRate: 'Low to Moderate (35% - 45%)',
      image: '/5 (14).jpeg',
      badge: 'Festive Premium Breed',
      description: 'Distinguished by pure milky-white coat, flat drooping ears, and heavy body structure. Highly sought after in urban markets for premium sacrificial livestock.',
      highlights: [
        'Attracts highest per-animal price during festive seasons',
        'Clean white aesthetic and tall stature',
        'Best managed under sheltered, hygienic stall housing'
      ]
    }
  ];

  const filteredBreeds = breeds.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.hindiName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      b.origin.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesPurpose =
      purposeFilter === 'all' ||
      (purposeFilter === 'meat' && b.purpose.includes('Meat')) ||
      (purposeFilter === 'milk' && b.purpose.includes('Milk')) ||
      (purposeFilter === 'dual' && b.purpose.includes('Dual'));

    return matchesSearch && matchesPurpose;
  });

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 relative flex flex-col justify-between">
      <Navbar />
      <SocialBar />
      <Chatbot />

      <main className="flex-1">
        <PageHeader
          badge="Knowledge Hub"
          title="Indian & Exotic Goat Breeds"
          subtitle="Comprehensive genetic guide to selecting the right breed for your state, climate, stall-fed system, and target market profitability."
          breadcrumb="Breeds"
        />

        {/* Search & Filter Bar */}
        <section className="pt-10 pb-6 px-6 max-w-7xl mx-auto">
          <div className="bg-white p-4 sm:p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search breed by name, state, or Hindi..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
              />
              <span className="absolute left-3.5 top-2.5 text-slate-400 text-base">🔍</span>
            </div>

            {/* Purpose Filter Pills */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto">
              {[
                { label: 'All Breeds', val: 'all' },
                { label: 'Meat Breeds', val: 'meat' },
                { label: 'Milk Breeds', val: 'milk' },
                { label: 'Dual Purpose', val: 'dual' }
              ].map((filter) => (
                <button
                  key={filter.val}
                  onClick={() => setPurposeFilter(filter.val)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    purposeFilter === filter.val
                      ? 'bg-green-700 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Breeds Grid */}
        <section className="py-8 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredBreeds.map((breed) => (
              <div
                key={breed.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top Image + Banner */}
                  <div className="relative h-64 overflow-hidden bg-slate-100">
                    <img
                      src={breed.image}
                      alt={breed.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                    {breed.badge && (
                      <div className="absolute top-4 left-4 bg-green-700 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                        {breed.badge}
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4 bg-black/75 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-lg">
                      {breed.purpose}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 sm:p-8 space-y-5">
                    <div>
                      <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black text-slate-900">{breed.name}</h2>
                        <span className="text-sm font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-lg">
                          {breed.hindiName}
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 font-semibold mt-1">
                        📍 Origin: {breed.origin}
                      </p>
                    </div>

                    <p className="text-sm text-slate-700 leading-relaxed font-normal">
                      {breed.description}
                    </p>

                    {/* Stats Matrix */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-[11px] font-bold text-slate-400 uppercase">Buck Weight</div>
                        <div className="text-sm font-extrabold text-slate-800">{breed.weightMale}</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="text-[11px] font-bold text-slate-400 uppercase">Doe Weight</div>
                        <div className="text-sm font-extrabold text-slate-800">{breed.weightFemale}</div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 col-span-2 sm:col-span-1">
                        <div className="text-[11px] font-bold text-slate-400 uppercase">Daily Milk</div>
                        <div className="text-sm font-extrabold text-green-700">{breed.milkYield}</div>
                      </div>
                    </div>

                    <div className="p-3 bg-green-50/70 rounded-xl border border-green-200 text-xs font-medium text-slate-700">
                      <span className="font-bold text-green-800">🌡️ Climate & Housing: </span>
                      {breed.climate}
                    </div>

                    {/* Bullet Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {breed.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <span className="text-green-600 font-bold">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href="https://wa.me/+916392004098?text=Hello%20BakriWala,%20I%20want%20information%20on%20buying/training%20for%20the%20breed"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3 bg-slate-900 hover:bg-green-700 text-white font-bold text-xs sm:text-sm rounded-xl transition flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Inquire About {breed.name} Seed Stock</span>
                    <span>➔</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
