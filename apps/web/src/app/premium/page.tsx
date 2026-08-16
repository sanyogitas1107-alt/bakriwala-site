'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SocialBar from '@/components/SocialBar';
import Chatbot from '@/components/Chatbot';
import PageHeader from '@/components/PageHeader';

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const tiers = [
    {
      name: 'Farmer Starter',
      badge: 'For 1 - 20 Goats',
      price: '₹1,499',
      period: '/ 6 Months',
      popular: false,
      description: 'Ideal for smallholders and beginners establishing their first scientific goat shed.',
      features: [
        'Complete Video Masterclasses (All 5 Modules)',
        'Standard 12-Month Vaccination & Deworming Chart',
        'Unlimited 24/7 GoatCare AI Assistant Access',
        '2 Scheduled Phone Consultations with Vet',
        'Community WhatsApp Group Access'
      ]
    },
    {
      name: 'Commercial Pro',
      badge: 'Most Popular',
      price: '₹3,999',
      period: '/ 1 Year',
      popular: true,
      description: 'Engineered for commercial farm setups (25 to 100 goats) seeking zero kid mortality and minimum feed costs.',
      features: [
        'Everything in Starter Plan',
        '1-on-1 Personalized Shed Blueprint Review',
        'Custom Low-Cost TMR Feed Formula (Using your local raw crops)',
        'Unlimited Priority Vet WhatsApp & Video Emergency Calls',
        'Bankable NABARD 50+2 DPR Project Report',
        'Certificate of Commercial Farm Management'
      ]
    },
    {
      name: 'Agri-Business VIP',
      badge: 'Breeder & Mega Farm',
      price: '₹9,999',
      period: '/ Lifetime Mentorship',
      popular: false,
      description: 'Complete end-to-end handholding for commercial mega-farms, breeding studs, and corporate investors.',
      features: [
        'Everything in Commercial Pro',
        'On-site Farm Audit & Doctor Inspection visit priority',
        'Pedigree Genetic Buck & Doe Procurement Support',
        'End-to-End NLM / NABARD 50% Subsidy Filing Assistance',
        'Direct Festive (Eid & Retail) Buyer Network Linkages',
        'Dedicated Senior Livestock Consultant Assigned'
      ]
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-slate-50 relative flex flex-col justify-between">
      <Navbar />
      <SocialBar />
      <Chatbot />

      <main className="flex-1">
        <PageHeader
          badge="VIP Membership & Advisory"
          title="BakriWala Premium Mentorship"
          subtitle="Direct veterinary handholding, custom low-cost feed calculators, bank-ready DPR project reports, and elite farmer masterclasses."
          breadcrumb="Premium"
        />

        {/* Member Access Quick Banner */}
        <section className="pt-8 px-6 max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 text-slate-950 p-4 sm:p-5 rounded-2xl shadow-md flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <span className="text-3xl">👑</span>
              <div>
                <h4 className="font-black text-base">Already enrolled in VIP Membership?</h4>
                <p className="text-xs font-semibold text-slate-900">Access your locked DPR project reports, CAD blueprints, and low-cost TMR calculators.</p>
              </div>
            </div>
            <Link
              href="/premium-content"
              className="px-6 py-2.5 bg-slate-950 hover:bg-slate-900 text-yellow-400 font-black text-xs sm:text-sm rounded-xl shadow-lg transition whitespace-nowrap flex items-center gap-2"
            >
              <span>Access Premium Content (Login)</span>
              <span>➔</span>
            </Link>
          </div>
        </section>

        {/* Pricing Matrix */}
        <section className="py-12 px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  tier.popular
                    ? 'bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white shadow-2xl border-2 border-yellow-400 transform md:-translate-y-4'
                    : 'bg-white text-slate-900 shadow-md border border-slate-200 hover:shadow-xl'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-950 font-black text-xs uppercase px-4 py-1 rounded-full shadow-md tracking-wider">
                    👑 Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span
                      className={`text-xs font-black uppercase px-3 py-1 rounded-full ${
                        tier.popular
                          ? 'bg-yellow-400/20 text-yellow-300 border border-yellow-400/30'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {tier.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black mb-2">{tier.name}</h3>
                  <p
                    className={`text-xs leading-relaxed mb-6 ${
                      tier.popular ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {tier.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-slate-200/20">
                    <span className="text-4xl sm:text-5xl font-black">{tier.price}</span>
                    <span
                      className={`text-xs font-bold ml-1.5 ${
                        tier.popular ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {tier.period}
                    </span>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mb-8">
                    <p
                      className={`text-xs font-black uppercase tracking-wider ${
                        tier.popular ? 'text-yellow-400' : 'text-green-700'
                      }`}
                    >
                      Included In Membership:
                    </p>
                    {tier.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium">
                        <span
                          className={`font-bold ${
                            tier.popular ? 'text-yellow-400' : 'text-green-600'
                          }`}
                        >
                          ✓
                        </span>
                        <span className={tier.popular ? 'text-slate-200' : 'text-slate-700'}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedPlan(tier.name)}
                  className={`w-full py-4 rounded-xl font-black text-sm transition shadow-lg flex items-center justify-center gap-2 ${
                    tier.popular
                      ? 'bg-yellow-400 hover:bg-yellow-300 text-slate-950 shadow-[0_0_20px_rgba(250,204,21,0.3)]'
                      : 'bg-slate-900 hover:bg-green-700 text-white'
                  }`}
                >
                  <span>Select {tier.name}</span>
                  <span>➔</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Comparison Highlights */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                What Makes BakriWala VIP The Best Investment?
              </h2>
              <p className="text-slate-600 text-base">
                Avoiding the death of even a single champion breeding buck or 3-4 newborn kids completely pays for your entire membership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="text-3xl mb-3">🩺</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Emergency Doctor Hotline</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Direct access to veterinary doctors who specialize specifically in small ruminants (goats & sheep), not generic cattle advice.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="text-3xl mb-3">🌾</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Custom TMR Feed Formulation</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We analyze the prices of raw grains in your district (maize, mustard cake, de-oiled rice bran) to calculate the cheapest high-protein recipe.
                </p>
              </div>

              <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="text-3xl mb-3">🏦</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">NABARD & Bankable DPR</h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  CA-verified financial projections, cash flow models, and shed engineering drawings ready for submission to nationalized banks.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Modal */}
        {selectedPlan && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative animate-fadeIn border border-slate-200">
              <button
                onClick={() => setSelectedPlan(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-xl font-bold p-2"
              >
                ✕
              </button>

              <div className="w-12 h-12 bg-yellow-100 text-yellow-700 rounded-2xl flex items-center justify-center text-2xl mb-4">
                👑
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-1">Join {selectedPlan}</h3>
              <p className="text-xs font-semibold text-green-700 mb-4">
                Our Senior Veterinary Advisor will activate your account and dispatch your starter kit.
              </p>

              <form
                className="space-y-3.5"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(`Thank you! Your registration for "${selectedPlan}" has been received. Our VIP support team will contact you via WhatsApp immediately.`);
                  setSelectedPlan(null);
                }}
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp Mobile Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Farm Location / District</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur, Rajasthan / Kanpur, UP"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-600"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan(null)}
                    className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-sm transition"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3 bg-green-700 hover:bg-green-800 text-white font-bold rounded-xl text-sm shadow-md transition"
                  >
                    Confirm Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
