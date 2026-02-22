import React from 'react';

const agentData: Record<string, any> = {
  jassar: { name: 'Astra (جَسّار)', role: 'Head of Operations', image: '/agents/jassar-hologram.png', stats: { total: 412, done: 385, pending: 18, rate: '98%' } },
  marketing: { name: 'Babel (التسويق)', role: 'Social Media Expert', image: '/agents/marketing-hologram.png', stats: { total: 89, done: 72, pending: 5, rate: '94%' } },
  sales: { name: 'Cipher (المبيعات)', role: 'Lead Generation Specialist', image: '/agents/sales-hologram.png', stats: { total: 210, done: 195, pending: 8, rate: '99%' } },
};

const AgentDetailsPage = ({ params }: { params: { id: string } }) => {
  const agent = agentData[params.id] || agentData.jassar;

  return (
    <div className="p-10 bg-[#0a0f1e] min-h-screen">
      <header className="mb-12 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-32 h-32 relative bg-[#111a2e] rounded-[40px] border border-gray-800 overflow-hidden shadow-2xl mr-10 group">
             <img src={agent.image} alt={agent.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
          </div>
          <div>
            <h2 className="text-5xl font-black italic tracking-tighter mb-2">{agent.name}</h2>
            <p className="text-[#00ff9d] font-bold uppercase tracking-widest text-sm">{agent.role}</p>
          </div>
        </div>
        <div className="bg-[#111a2e] p-6 rounded-[30px] border border-gray-800 text-center">
           <p className="text-[10px] text-gray-500 uppercase mb-1">Status</p>
           <span className="text-[#00ff9d] font-black tracking-widest">● ONLINE</span>
        </div>
      </header>

      {/* Stats Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        {[
          { label: 'Total Tasks', value: agent.stats.total, color: 'text-blue-500' },
          { label: 'Completed', value: agent.stats.done, color: 'text-[#00ff9d]' },
          { label: 'Pending', value: agent.stats.pending, color: 'text-yellow-500' },
          { label: 'Success Rate', value: agent.stats.rate, color: 'text-purple-500' },
        ].map((stat, i) => (
          <div key={i} className="bg-[#111a2e] p-8 rounded-[35px] border border-gray-800 shadow-xl">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-2 font-bold">{stat.label}</p>
            <p className={`text-3xl font-black ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </section>

      {/* Real-time Progress Tracker */}
      <section className="bg-[#111a2e] p-12 rounded-[50px] border border-gray-800 mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
           <span className="text-[10px] bg-[#00ff9d]/10 text-[#00ff9d] px-4 py-2 rounded-full font-bold">MONITORING LIVE</span>
        </div>
        <h3 className="text-2xl font-black italic mb-10 flex items-center">
           <span className="mr-4">⚡</span> Real-time Progress Tracker
        </h3>
        <div className="w-full bg-[#0a0f1e] h-6 rounded-full overflow-hidden mb-8 border border-gray-800 shadow-inner">
          <div className="bg-gradient-to-r from-blue-500 to-[#00ff9d] h-full w-[82%] animate-pulse shadow-[0_0_30px_rgba(0,255,157,0.4)]"></div>
        </div>
        <div className="flex justify-between items-end">
           <div>
              <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Current Task</p>
              <p className="text-xl font-bold">Large Scale Market Intelligence Gathering</p>
           </div>
           <div className="text-right">
              <p className="text-4xl font-black text-[#00ff9d]">82%</p>
              <p className="text-[10px] text-gray-500 uppercase font-bold">Optimization in progress</p>
           </div>
        </div>
      </section>
    </div>
  );
};

export default AgentDetailsPage;
