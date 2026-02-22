"use client";
import React from 'react';

const DashboardPage = () => {
  return (
    <div className="p-10 min-h-screen">
      {/* Header Section */}
      <header className="mb-12 flex justify-between items-start">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter text-[var(--foreground)]">COMMAND CENTER</h2>
          <p className="text-gray-500 text-sm mt-1">Welcome back, Waleed. System integrity is optimal.</p>
        </div>
        <div className="flex space-x-4">
          <div className="bg-[var(--card)] px-6 py-3 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center shadow-sm">
            <span className="w-2 h-2 bg-[#00ff9d] rounded-full mr-3 animate-pulse"></span>
            <span className="text-xs font-bold text-gray-500 dark:text-gray-300">WhatsApp: CONNECTED</span>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-10">
        {[
          { label: 'Active Agents', value: '3/3', color: 'text-[#00ff9d]' },
          { label: 'Tasks Today', value: '24', color: 'text-blue-500' },
          { label: 'Efficiency', value: '98.2%', color: 'text-purple-500' },
          { label: 'Unread Msgs', value: '12', color: 'text-yellow-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-[var(--card)] p-6 rounded-[30px] border border-gray-200 dark:border-gray-800 shadow-sm transition-all hover:shadow-md">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">{stat.label}</p>
            <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Intelligence Feed */}
        <div className="lg:col-span-2 bg-[var(--card)] rounded-[40px] p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-xl font-bold italic flex items-center text-[var(--foreground)]">
              <span className="mr-3 text-2xl">🌍</span> Intelligence Feed
            </h3>
            <span className="text-[10px] bg-red-500/10 text-red-500 px-3 py-1 rounded-full font-bold">LIVE UPDATES</span>
          </div>
          <div className="space-y-6">
            <div className="p-5 bg-slate-50 dark:bg-[#1a253d] rounded-2xl border-l-4 border-red-500">
              <p className="text-xs text-gray-500 mb-1">Geopolitical • 10m ago</p>
              <p className="text-sm font-bold text-[var(--foreground)] opacity-90">Tensions in the Red Sea affecting global shipping costs. Jassar monitoring...</p>
            </div>
            <div className="p-5 bg-slate-50 dark:bg-[#1a253d] rounded-2xl border-l-4 border-blue-500">
              <p className="text-xs text-gray-500 mb-1">Economic • 45m ago</p>
              <p className="text-sm font-bold text-[var(--foreground)] opacity-90">BTC holding $78K. Institutional buyers observed at current levels.</p>
            </div>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-[var(--card)] rounded-[40px] p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
          <h3 className="text-xl font-bold italic mb-8 flex items-center text-[var(--foreground)]">
             <span className="mr-3 text-2xl">⚡</span> System Health
          </h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs mb-2">
                <span className="text-gray-500">API Latency</span>
                <span className="text-[#00ff9d] font-bold">24ms</span>
              </div>
              <div className="w-full bg-slate-100 dark:bg-[#1a253d] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#00ff9d] h-full w-[90%]"></div>
              </div>
            </div>
            <div className="pt-4 text-center">
              <div className="bg-slate-50 dark:bg-[#1a253d] p-4 rounded-2xl">
                <p className="text-[10px] text-gray-400 mb-1">Status Report</p>
                <p className="text-xs font-bold text-[#00ff9d]">All Systems Operational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
