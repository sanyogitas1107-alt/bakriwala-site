'use client';

import React, { useState, useRef, useEffect } from 'react';

export default function Chatbot() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      role: 'ai',
      text: 'Namaste! 🙏 I am your BakriWala AI Veterinary Assistant. How can I assist with your goats, feed formula, disease prevention, or farm setup today?'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isChatOpen) {
      scrollToBottom();
    }
  }, [chatHistory, isChatOpen]);

  const quickPrompts = [
    '💉 Goat Vaccination Schedule',
    '🌾 Low-Cost Feed Formula',
    '🐐 Best Breeds for Meat & Milk',
    '🤒 How to treat PPR & Diarrhea?'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || message).trim();
    if (!text || isLoading) return;

    const newHistory = [...chatHistory, { role: 'user', text }];
    setChatHistory(newHistory);
    if (!textToSend) setMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();

      if (data.success && data.reply) {
        setChatHistory([...newHistory, { role: 'ai', text: data.reply }]);
      } else {
        setChatHistory([
          ...newHistory,
          {
            role: 'ai',
            text: 'I am temporarily experiencing connectivity issues with the AI microservice. For urgent veterinary support, please WhatsApp our doctor team directly at +91 63920 04098.'
          }
        ]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setChatHistory([
        ...newHistory,
        {
          role: 'ai',
          text: 'Unable to reach the server. Please check your internet connection or reach us on WhatsApp at +91 63920 04098.'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 w-[92vw] sm:w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/80 z-50 flex flex-col overflow-hidden animate-fadeIn max-h-[80vh]">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-4 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-green-600 rounded-full flex items-center justify-center text-lg shadow-inner">
                🐐
              </div>
              <div>
                <h3 className="font-bold text-sm sm:text-base leading-tight flex items-center gap-1.5">
                  BakriWala AI <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                </h3>
                <p className="text-[11px] text-slate-300">24/7 Expert Vet & Farming Advisor</p>
              </div>
            </div>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-slate-400 hover:text-white font-bold text-lg p-1 transition"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="h-[320px] sm:h-[360px] p-4 overflow-y-auto bg-slate-50/60 space-y-3">
            {chatHistory.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] p-3 text-xs sm:text-sm shadow-xs font-medium leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-green-700 text-white rounded-2xl rounded-tr-xs'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-2xl rounded-tl-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-xs p-3 text-xs text-slate-500 flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-2 h-2 bg-green-600 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  <span>GoatCare AI is thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Chips */}
          <div className="px-3 py-2 bg-slate-100/70 border-t border-slate-200/60 flex gap-1.5 overflow-x-auto text-[11px] no-scrollbar">
            {quickPrompts.map((prompt, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap px-2.5 py-1 bg-white hover:bg-green-50 hover:text-green-800 text-slate-700 font-semibold rounded-full border border-slate-200 shadow-xs transition"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <div className="p-3 bg-white border-t border-slate-200 flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask anything about goat farming..."
              className="flex-1 border border-slate-300 rounded-xl px-3.5 py-2 focus:outline-none focus:ring-2 focus:ring-green-600 text-xs sm:text-sm text-slate-900 bg-white"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={isLoading || !message.trim()}
              className="bg-green-700 hover:bg-green-800 disabled:opacity-50 text-white px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition shadow-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label="Open AI Assistant"
        className="fixed bottom-6 right-4 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 bg-green-700 hover:bg-green-800 text-white rounded-full shadow-2xl flex items-center justify-center text-2xl sm:text-3xl transition transform hover:scale-105 active:scale-95 z-50 border-4 border-white/70 backdrop-blur-sm"
      >
        {isChatOpen ? '✕' : '💬'}
      </button>
    </>
  );
}
