import React, { useEffect, useState } from 'react';
import { ITINERARY } from '../constants';
import { Calendar, MapPin, ThermometerSnowflake, Plane, Ticket } from 'lucide-react';

interface Props {
  onChangeTab: (tab: 'home' | 'itinerary' | 'finance' | 'booking') => void;
}

const HomeView: React.FC<Props> = ({ onChangeTab }) => {
  const [timeLeft, setTimeLeft] = useState<{days: number, hours: number}>({ days: 0, hours: 0 });
  const tripStartDate = new Date('2025-12-24T10:25:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = tripStartDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [tripStartDate]);

  const todayStr = new Date().toISOString().split('T')[0];
  const activeDay = ITINERARY.find(d => d.date === todayStr) || ITINERARY[0];

  return (
    <div className="p-0">
      {/* Hero Section */}
      <div className="relative h-96 w-full overflow-hidden rounded-b-[40px] shadow-lg">
        <img 
          src="https://picsum.photos/id/1036/800/800" 
          alt="Hokkaido Winter" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-blue-900/80" />
        
        <div className="absolute bottom-8 left-6 text-white">
          <h1 className="text-3xl font-bold mb-1 tracking-tight">Hokkaido Trip</h1>
          <p className="text-blue-100 text-sm font-medium tracking-wider">Dec 24, 2025 - Jan 1, 2026</p>
        </div>

        <div className="absolute top-12 right-6 glass-panel px-4 py-2 rounded-2xl flex flex-col items-center">
          <span className="text-xs text-slate-500 font-bold uppercase">Starts In</span>
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-bold text-blue-600">{timeLeft.days}</span>
            <span className="text-xs text-slate-500">days</span>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-10 relative z-20">
        {/* Quick Weather Card */}
        <div className="bg-white rounded-3xl p-5 shadow-xl mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">Today's Forecast</p>
            <h2 className="text-2xl font-bold text-slate-700">{activeDay.displayDate}</h2>
            <div className="flex items-center mt-1 space-x-2 text-blue-500">
              <MapPin size={16} />
              <span className="font-medium">{activeDay.location}</span>
            </div>
          </div>
          <div className="flex flex-col items-center bg-blue-50 p-3 rounded-2xl">
            <ThermometerSnowflake size={32} className="text-blue-400 mb-1" />
            <span className="text-lg font-bold text-slate-700">{activeDay.weather.temp}</span>
          </div>
        </div>

        {/* Action Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button 
            onClick={() => onChangeTab('itinerary')}
            className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:bg-blue-50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-500 mb-3">
              <Calendar size={20} />
            </div>
            <span className="font-bold text-slate-700">Full Plan</span>
            <span className="text-xs text-slate-400 mt-1">9 Days Schedule</span>
          </button>

          <button 
            onClick={() => onChangeTab('finance')}
            className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:bg-blue-50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-500 mb-3">
              <span className="font-bold text-sm">¥</span>
            </div>
            <span className="font-bold text-slate-700">Budget</span>
            <span className="text-xs text-slate-400 mt-1">Cost & Rates</span>
          </button>

          <button 
            onClick={() => onChangeTab('booking')}
            className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:bg-blue-50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 mb-3">
              <Ticket size={20} />
            </div>
            <span className="font-bold text-slate-700">Bookings</span>
            <span className="text-xs text-slate-400 mt-1">QR & Refs</span>
          </button>

          <a 
            href="https://www.jrhokkaido.co.jp/global/chinese/index.html"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-4 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start hover:bg-blue-50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-rose-500 mb-3">
              <Plane size={20} />
            </div>
            <span className="font-bold text-slate-700">JR Info</span>
            <span className="text-xs text-slate-400 mt-1">Timetables</span>
          </a>
        </div>

        {/* Cute Decoration */}
        <div className="flex justify-center opacity-80 mt-4">
           <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
             <circle cx="12" cy="12" r="10" strokeOpacity="0.2"/>
             <path d="M8 14s1.5 2 4 2 4-2 4-2" />
             <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="2"/>
             <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="2"/>
           </svg>
        </div>
        <p className="text-center text-xs text-slate-400 mb-8">Enjoy the snow!</p>
      </div>
    </div>
  );
};

export default HomeView;