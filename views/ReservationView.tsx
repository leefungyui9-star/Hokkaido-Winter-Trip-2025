import React from 'react';
import { RESERVATIONS } from '../constants';
import { ExternalLink, CheckCircle } from 'lucide-react';

const ReservationView: React.FC = () => {
  return (
    <div className="pt-8 px-4 pb-8">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 pl-2">Reservations</h1>

      <div className="grid gap-4">
        {RESERVATIONS.map((res) => (
          <div key={res.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className={`absolute top-0 left-0 w-1.5 h-full ${
              res.type === 'Hotel' ? 'bg-indigo-400' : 
              res.type === 'Restaurant' ? 'bg-orange-400' : 'bg-blue-400'
            }`} />
            
            <div className="flex justify-between items-start mb-2 pl-3">
              <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-slate-50 text-slate-500`}>
                {res.type}
              </span>
              <div className="flex items-center text-emerald-500 text-xs font-medium bg-emerald-50 px-2 py-1 rounded-full">
                <CheckCircle size={12} className="mr-1" />
                {res.status}
              </div>
            </div>

            <div className="pl-3 mt-2">
              <h3 className="font-bold text-slate-800 text-lg leading-tight mb-1">{res.name}</h3>
              <p className="text-sm text-slate-500 mb-4">{res.date}</p>
              
              <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 flex justify-between items-center">
                <div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold">Booking No.</p>
                  <p className="font-mono text-slate-700 font-bold select-all">{res.number}</p>
                </div>
                {res.link && (
                  <a 
                    href={res.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-sm text-blue-500 hover:text-blue-600"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReservationView;