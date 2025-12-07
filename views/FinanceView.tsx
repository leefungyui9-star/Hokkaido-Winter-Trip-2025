import React, { useMemo } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { ITINERARY, EXCHANGE_RATE_JPY_TO_HKD } from '../constants';
import { ActivityType } from '../types';

const COLORS = ['#60A5FA', '#F472B6', '#34D399', '#FBBF24', '#A78BFA'];

const FinanceView: React.FC = () => {
  const expenses = useMemo(() => {
    const data: { [key: string]: number } = {};
    
    ITINERARY.forEach(day => {
      day.schedule.forEach(item => {
        if (item.expense) {
          const category = item.expense.category;
          data[category] = (data[category] || 0) + item.expense.estimatedCostJPY;
        }
      });
    });

    return Object.entries(data).map(([name, value]) => ({ name, value }));
  }, []);

  const totalJPY = expenses.reduce((sum, item) => sum + item.value, 0);
  const totalHKD = Math.round(totalJPY * EXCHANGE_RATE_JPY_TO_HKD);

  return (
    <div className="pt-8 px-4 pb-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 pl-2">Trip Budget</h1>

      {/* Summary Card */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-6 text-white shadow-lg mb-8">
        <p className="text-blue-100 text-sm font-medium mb-1">Total Estimated Cost (Transport Only)</p>
        <div className="flex items-baseline space-x-2">
          <span className="text-3xl font-bold">¥{totalJPY.toLocaleString()}</span>
          <span className="text-lg opacity-80">JPY</span>
        </div>
        <div className="mt-4 pt-4 border-t border-white/20 flex justify-between items-center">
          <span className="text-sm opacity-90">Approx. HKD</span>
          <span className="text-xl font-bold">${totalHKD.toLocaleString()}</span>
        </div>
        <p className="text-[10px] mt-2 opacity-60">Rate: 1 JPY = {EXCHANGE_RATE_JPY_TO_HKD} HKD. Based on itinerary inputs.</p>
      </div>

      {/* Chart */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 mb-8">
        <h3 className="font-bold text-slate-700 mb-4">Cost Breakdown</h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={expenses}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {expenses.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value: number) => `¥${value.toLocaleString()}`} />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick Calculator */}
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100">
        <h3 className="font-bold text-slate-700 mb-4">Quick Converter</h3>
        <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
          <div className="flex-1">
            <label className="text-xs font-bold text-slate-400 block mb-1">JPY</label>
            <input 
              type="number" 
              placeholder="1000" 
              className="w-full bg-transparent font-bold text-xl text-slate-700 outline-none"
              onChange={(e) => {
                const val = parseFloat(e.target.value);
                const hkdEl = document.getElementById('hkd-val');
                if (hkdEl) hkdEl.innerText = val ? (val * EXCHANGE_RATE_JPY_TO_HKD).toFixed(1) : '0';
              }}
            />
          </div>
          <div className="text-slate-300 text-2xl">→</div>
          <div className="flex-1 text-right">
            <label className="text-xs font-bold text-slate-400 block mb-1">HKD</label>
            <span id="hkd-val" className="font-bold text-xl text-blue-600">0.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinanceView;