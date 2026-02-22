"use client";
import React, { useState, useEffect } from "react";
import "./globals.css";
import Link from 'next/link';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <html lang="en">
      <body className="antialiased transition-colors duration-500">
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className={`w-72 border-r transition-all duration-500 flex flex-col p-8 sticky top-0 h-screen ${theme === 'light' ? 'bg-white border-gray-200 text-slate-900' : 'bg-[#111a2e] border-gray-800 text-white'}`}>
            <div className="mb-12">
              <h1 className="text-3xl font-black tracking-tighter text-[#00ff9d]">NX Solutions</h1>
              <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1 italic">Virtual Intelligence Hub</p>
            </div>
            
            <nav className="flex-1 space-y-2">
              <Link href="/dashboard" className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-[#00ff9d]/10 transition group">
                <span className="text-xl">🏠</span>
                <span className="font-bold">Dashboard</span>
              </Link>
              <Link href="/agents" className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-[#00ff9d]/10 transition">
                <span className="text-xl">👥</span>
                <span className="font-bold">Agents</span>
              </Link>
              <Link href="/tasks" className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-[#00ff9d]/10 transition">
                <span className="text-xl">📋</span>
                <span className="font-bold">Tasks</span>
              </Link>
              <Link href="/settings" className="flex items-center space-x-4 p-4 rounded-2xl hover:bg-[#00ff9d]/10 transition">
                <span className="text-xl">⚙️</span>
                <span className="font-bold">Settings</span>
              </Link>
            </nav>

            {/* THEME TOGGLE BUTTON */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800 mt-auto">
               <button 
                 onClick={toggleTheme}
                 className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 transition hover:scale-105 active:scale-95"
               >
                 <span className="font-bold text-xs uppercase tracking-widest">{theme === 'light' ? 'Night Mode' : 'Day Mode'}</span>
                 <span className="text-xl">{theme === 'light' ? '🌙' : '☀️'}</span>
               </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className={`flex-1 transition-colors duration-500 ${theme === 'light' ? 'bg-[#f8fafc]' : 'bg-[#0a0f1e]'}`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
