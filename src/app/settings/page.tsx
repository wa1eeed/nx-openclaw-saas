"use client";
import React from 'react';

const SettingsPage = () => {
  return (
    <div className="p-10 min-h-screen">
        <main className="max-w-4xl mx-auto">
          <header className="mb-12">
            <h2 className="text-4xl font-black italic text-[var(--foreground)] tracking-tighter uppercase">System Configuration</h2>
            <p className="text-gray-500 text-sm mt-1">Manage your API keys and service integrations.</p>
          </header>

          <div className="space-y-8">
            {/* Google AI Studio Section */}
            <div className="bg-[var(--card)] p-10 rounded-[40px] border border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center mr-5 text-2xl">
                  🤖
                </div>
                <div>
                  <h3 className="text-xl font-black text-[var(--foreground)]">Google AI Studio (Gemini)</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Powering your agents' intelligence</p>
                </div>
              </div>
              <div className="space-y-4 text-left">
                <label className="block text-[10px] text-gray-400 uppercase font-black tracking-widest ml-1">GEMINI_API_KEY</label>
                <div className="relative">
                  <input 
                    type="password" 
                    placeholder="••••••••••••••••••••••••••••" 
                    className="w-full bg-slate-50 dark:bg-[#1a253d] border border-gray-200 dark:border-gray-700 rounded-2xl py-4 px-6 text-sm focus:border-[#00ff9d] outline-none text-[var(--foreground)]"
                  />
                  <button className="absolute right-6 top-4 text-gray-400 hover:text-[#00ff9d]">👁️</button>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration Section */}
            <div className="bg-[var(--card)] p-10 rounded-[40px] border border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center mr-5 text-2xl">
                  💬
                </div>
                <div>
                  <h3 className="text-xl font-black text-[var(--foreground)]">WhatsApp (Evolution API)</h3>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Automated messaging bridge</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="space-y-2">
                  <label className="block text-[10px] text-gray-400 uppercase font-black tracking-widest ml-1">Server URL</label>
                  <input type="text" placeholder="https://api.nx7.online" className="w-full bg-slate-50 dark:bg-[#1a253d] border border-gray-200 dark:border-gray-700 rounded-2xl py-4 px-6 text-sm outline-none focus:border-[#00ff9d] text-[var(--foreground)]" />
                </div>
                <div className="space-y-2">
                  <label className="block text-[10px] text-gray-400 uppercase font-black tracking-widest ml-1">Global API Key</label>
                  <input type="password" placeholder="Key..." className="w-full bg-slate-50 dark:bg-[#1a253d] border border-gray-200 dark:border-gray-700 rounded-2xl py-4 px-6 text-sm outline-none focus:border-[#00ff9d] text-[var(--foreground)]" />
                </div>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end pt-4">
              <button className="bg-[#00ff9d] text-black font-black py-5 px-16 rounded-3xl hover:scale-105 transition shadow-[0_0_30px_rgba(0,255,157,0.3)] uppercase tracking-tighter">
                Save & Synchronize
              </button>
            </div>
          </div>
        </main>
    </div>
  );
};

export default SettingsPage;
