"use client";
import React from 'react';
import { Lock, Mail, ArrowRight } from 'lucide-react';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center p-6 font-sans">
      <div className="w-full max-w-md bg-white rounded-[40px] shadow-2xl border border-gray-100 p-12 text-center">
        {/* LOGO AREA */}
        <div className="mb-10">
          <div className="w-20 h-20 bg-[#00ff9d] rounded-3xl mx-auto flex items-center justify-center shadow-[0_10px_30px_rgba(0,255,157,0.4)] mb-6">
            <span className="text-4xl font-black text-black italic">NX</span>
          </div>
          <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic">Virtual HQ</h2>
          <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mt-1">Authorized Access Only</p>
        </div>

        {/* LOGIN FORM */}
        <div className="space-y-6 text-left">
          <div className="space-y-2">
            <label className="text-[10px] text-gray-400 uppercase font-black tracking-widest ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-4 text-gray-300 w-5 h-5" />
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="w-full bg-slate-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-6 text-sm outline-none focus:border-[#00ff9d] transition-all"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] text-gray-400 uppercase font-black tracking-widest ml-1">Secret Key</label>
            <div className="relative">
              <Lock className="absolute left-4 top-4 text-gray-300 w-5 h-5" />
              <input 
                type="password" 
                placeholder="••••••••••••" 
                className="w-full bg-slate-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-6 text-sm outline-none focus:border-[#00ff9d] transition-all"
              />
            </div>
          </div>

          <button className="w-full bg-black text-white font-black py-5 rounded-2xl flex items-center justify-center space-x-3 hover:scale-105 transition shadow-xl group mt-8">
            <span className="uppercase tracking-widest text-xs">Enter Command Center</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <p className="mt-12 text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
          Powered by NX Solutions Intelligence Layer
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
