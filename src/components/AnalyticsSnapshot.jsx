import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, PieChart as RePieChart, Pie, Cell } from 'recharts';
import { BarChart3, TrendingUp, Users, DollarSign, Sparkles } from 'lucide-react';

const monthlyData = [
  { month: 'Jan', revenue: 42000, customers: 1200, retention: 78 },
  { month: 'Feb', revenue: 48000, customers: 1450, retention: 81 },
  { month: 'Mar', revenue: 55000, customers: 1800, retention: 84 },
  { month: 'Apr', revenue: 51000, customers: 1650, retention: 82 },
  { month: 'May', revenue: 63000, customers: 2100, retention: 87 },
  { month: 'Jun', revenue: 72000, customers: 2450, retention: 89 },
  { month: 'Jul', revenue: 84000, customers: 2900, retention: 91 },
  { month: 'Aug', revenue: 91000, customers: 3200, retention: 92 },
];

const categoryData = [
  { name: 'Electronics', value: 38, color: '#8B5CF6' },
  { name: 'Apparel', value: 27, color: '#3B82F6' },
  { name: 'Home Goods', value: 20, color: '#06B6D4' },
  { name: 'Accessories', value: 15, color: '#10B981' },
];

export default function AnalyticsSnapshot() {
  const [activeMetric, setActiveMetric] = useState('revenue');

  return (
    <section className="py-20 bg-[#080D1C] relative border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 glass-panel rounded-3xl border border-purple-500/30 relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                <span>INTERACTIVE DEMO</span>
              </div>
              <h3 className="text-2xl font-bold text-white">Analytics Snapshot</h3>
              <p className="text-xs text-slate-400">Sample interactive visualization demonstrating dashboard storytelling capability.</p>
            </div>

            {/* Metric Toggle Controls */}
            <div className="flex items-center gap-2 p-1 bg-slate-900/90 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveMetric('revenue')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeMetric === 'revenue'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>Monthly Revenue</span>
              </button>

              <button
                onClick={() => setActiveMetric('customers')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeMetric === 'customers'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Users className="w-3.5 h-3.5" />
                <span>Customer Growth</span>
              </button>

              <button
                onClick={() => setActiveMetric('categories')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  activeMetric === 'categories'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Category Breakdown</span>
              </button>
            </div>
          </div>

          {/* Chart Display Area */}
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              {activeMetric === 'revenue' ? (
                <AreaChart data={monthlyData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                  <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} />
                  <YAxis stroke="#94A3B8" fontSize={12} tickFormatter={(v) => `$${v / 1000}k`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0B1224', borderColor: '#8B5CF6', borderRadius: '12px' }}
                    formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              ) : activeMetric === 'customers' ? (
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" />
                  <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} />
                  <YAxis stroke="#94A3B8" fontSize={12} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0B1224', borderColor: '#3B82F6', borderRadius: '12px' }}
                    formatter={(value) => [value, 'Active Customers']}
                  />
                  <Bar dataKey="customers" fill="#3B82F6" radius={[6, 6, 0, 0]} />
                </BarChart>
              ) : (
                <RePieChart>
                  <Tooltip contentStyle={{ backgroundColor: '#0B1224', borderColor: '#06B6D4', borderRadius: '12px' }} />
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </RePieChart>
              )}
            </ResponsiveContainer>
          </div>

          {/* Footer Note */}
          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono">
            <span>Note: Chart rendered dynamically with Recharts</span>
            <span className="text-purple-300">Sample Dataset: E-Commerce Store Performance 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}
