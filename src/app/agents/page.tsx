"use client";
import React, { useState } from 'react';

const agents = [
  { id: 'jassar', name: 'Astra (جَسّار)', role: 'Head of Operations', status: 'Active', tasks: 412, stats: '87.5K', success: '100%', image: '/agents/jassar-hologram.png' },
  { id: 'marketing', name: 'Babel (التسويق)', role: 'Social Media Expert', status: 'Busy', tasks: 89, stats: '15.2K', success: '98%', image: '/agents/marketing-hologram.png' },
  { id: 'sales', name: 'Cipher (المبيعات)', role: 'Lead Generation Specialist', status: 'Idle', tasks: 210, stats: '6.3K', success: '100%', image: '/agents/sales-hologram.png' },
];

const AgentsPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-10 min-h-screen">
      <header className="mb-12 flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter text-[var(--foreground)]">AGENT DIRECTORY</h2>
          <p className="text-gray-500 text-sm mt-1">Manage and monitor your specialized AI workforce.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-[#00ff9d] text-black font-black py-3 px-8 rounded-2xl hover:scale-105 transition shadow-lg flex items-center"
        >
          <span className="text-xl mr-2">+</span> CREATE AGENT
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {agents.map((agent) => (
          <div key={agent.id} className="bg-[var(--card)] rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{agent.name}</div>
              <div className={`w-2 h-2 rounded-full ${agent.status === 'Active' ? 'bg-[#00ff9d] shadow-[0_0_10px_#00ff9d]' : 'bg-yellow-500'}`}></div>
            </div>
            <div className="aspect-square relative mb-8 rounded-[25px] overflow-hidden bg-slate-50 dark:bg-[#0a0f1e] border border-gray-100 dark:border-gray-800">
              <img src={agent.image} alt={agent.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div><p className="text-[9px] text-gray-400 uppercase font-bold">📊 Stats</p><p className="text-sm font-black text-[var(--foreground)] opacity-80">{agent.stats}</p></div>
              <div><p className="text-[9px] text-gray-400 uppercase font-bold">🎯 Success</p><p className="text-sm font-black text-[var(--foreground)] opacity-80">{agent.success}</p></div>
            </div>
            <button className="w-full py-3 bg-slate-100 dark:bg-[#1a253d] hover:bg-[#00ff9d] hover:text-black rounded-xl text-xs font-bold transition-all uppercase tracking-tighter">View Detail Log</button>
          </div>
        ))}
      </div>

      {/* NEW AGENT MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-[var(--card)] w-full max-w-lg rounded-[40px] border border-gray-200 dark:border-gray-800 p-10 shadow-2xl">
            <h3 className="text-2xl font-black mb-8 text-[var(--foreground)] italic">Deploy New Intelligence</h3>
            <div className="space-y-6 text-left">
              <div>
                <label className="block text-[10px] text-gray-400 uppercase mb-2 font-black tracking-widest">Agent Identity</label>
                <input type="text" placeholder="e.g. Phoenix" className="w-full bg-slate-50 dark:bg-[#1a253d] border border-gray-200 dark:border-gray-700 rounded-2xl py-4 px-5 text-sm outline-none focus:border-[#00ff9d] text-[var(--foreground)]" />
              </div>
              <div className="flex space-x-4 pt-4">
                <button onClick={() => setShowModal(false)} className="flex-1 py-4 text-gray-500 font-bold hover:text-red-500 transition uppercase text-xs">Abort</button>
                <button className="flex-1 bg-black dark:bg-[#00ff9d] text-white dark:text-black font-black py-4 rounded-2xl shadow-xl uppercase text-xs tracking-widest">Initialize</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentsPage;
