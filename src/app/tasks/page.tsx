"use client";
import React, { useState } from 'react';

const tasks = [
  { id: 1, title: 'Real Estate Market Analysis - Riyadh North', agent: 'Jassar', priority: 'High', status: 'In Progress', date: '2026-02-21' },
  { id: 2, title: 'WhatsApp Webhook Setup & Security Audit', agent: 'System', priority: 'Critical', status: 'Done', date: '2026-02-20' },
  { id: 3, title: 'Social Media Post Schedule - Ramadan Campaign', agent: 'Marketing', priority: 'Medium', status: 'To Do', date: '2026-02-22' },
  { id: 4, title: 'Sales Lead Generation - Corporate Clients', agent: 'Sales', priority: 'High', status: 'To Do', date: '2026-02-23' },
  // Simulation of more tasks
];

const TaskBoardPage = () => {
  const [activeTab, setActiveTab] = useState('To Do');
  const [currentPage, setCurrentPage] = useState(1);

  const tabs = [
    { name: 'To Do', count: 5 },
    { name: 'In Progress', count: 2 },
    { name: 'Done', count: 142 },
  ];

  const filteredTasks = tasks.filter(t => t.status === activeTab);

  return (
    <div className="p-10 min-h-screen">
      <header className="mb-10 flex justify-between items-center">
        <div>
          <h2 className="text-4xl font-black italic text-[var(--foreground)] tracking-tighter uppercase">Task Board</h2>
          <p className="text-gray-500 text-sm mt-1">Operational control with multi-tab management.</p>
        </div>
        <button className="bg-[#00ff9d] text-black font-black py-3 px-8 rounded-2xl hover:scale-105 transition shadow-lg">+ NEW TASK</button>
      </header>

      {/* TABS SECTION */}
      <div className="flex space-x-8 border-b border-gray-200 dark:border-gray-800 mb-10">
        {tabs.map((tab) => (
          <button 
            key={tab.name}
            onClick={() => {setActiveTab(tab.name); setCurrentPage(1);}}
            className={`pb-4 px-2 text-sm font-black uppercase tracking-widest transition-all relative ${activeTab === tab.name ? 'text-[#00ff9d]' : 'text-gray-400 hover:text-[var(--foreground)]'}`}
          >
            {tab.name}
            <span className="ml-2 bg-slate-100 dark:bg-[#1a253d] px-2 py-0.5 rounded-md text-[10px]">{tab.count}</span>
            {activeTab === tab.name && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#00ff9d] rounded-t-full shadow-[0_-2px_10px_#00ff9d]"></div>}
          </button>
        ))}
      </div>

      {/* TASK LIST (RECTANGULAR CARDS) */}
      <div className="space-y-4 mb-12">
        {filteredTasks.map((task) => (
          <div key={task.id} className="bg-[var(--card)] p-6 rounded-[25px] border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all flex items-center justify-between group">
            <div className="flex items-center space-x-6">
              <div className={`w-3 h-3 rounded-full ${task.status === 'In Progress' ? 'bg-yellow-500 animate-pulse' : task.status === 'Done' ? 'bg-[#00ff9d]' : 'bg-gray-300'}`}></div>
              <div>
                <h4 className="font-bold text-[var(--foreground)] group-hover:text-[#00ff9d] transition-colors">{task.title}</h4>
                <p className="text-[10px] text-gray-400 uppercase mt-1">Responsible Agent: <span className="text-[#00ff9d]">{task.agent}</span> • Created on {task.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest ${task.priority === 'High' ? 'bg-red-500/10 text-red-500' : 'bg-blue-500/10 text-blue-500'}`}>
                {task.priority}
              </span>
              <button className="text-gray-400 hover:text-[var(--foreground)]">•••</button>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION */}
      <div className="flex justify-between items-center bg-[var(--card)] p-4 rounded-2xl border border-gray-100 dark:border-gray-800">
        <p className="text-[10px] text-gray-500 font-bold uppercase">Showing 1-50 of {tabs.find(t => t.name === activeTab)?.count} tasks</p>
        <div className="flex space-x-2">
           <button className="px-4 py-2 bg-slate-100 dark:bg-[#1a253d] rounded-xl text-[10px] font-bold disabled:opacity-30" disabled>Previous</button>
           <button className="px-4 py-2 bg-slate-100 dark:bg-[#1a253d] rounded-xl text-[10px] font-bold">Next</button>
        </div>
      </div>
    </div>
  );
};

export default TaskBoardPage;
