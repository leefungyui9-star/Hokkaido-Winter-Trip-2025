import React, { useState } from 'react';
import { ITINERARY } from '../constants';
import { Map, Clock, ArrowRight, Utensils, Train, Camera, ShoppingBag, BedDouble, Navigation } from 'lucide-react';
import { ActivityType, ScheduleItem } from '../types';

const ItineraryView: React.FC = () => {
  const [expandedDay, setExpandedDay] = useState<string>(ITINERARY[0].date);

  const getTypeIcon = (type: ActivityType) => {
    switch (type) {
      case ActivityType.Food: return <Utensils size={14} />;
      case ActivityType.Transport: return <Train size={14} />;
      case ActivityType.Activity: return <Camera size={14} />;
      case ActivityType.Shopping: return <ShoppingBag size={14} />;
      case ActivityType.Hotel: return <BedDouble size={14} />;
      default: return <Map size={14} />;
    }
  };

  const getTypeColor = (type: ActivityType) => {
    switch (type) {
      case ActivityType.Food: return 'bg-orange-100 text-orange-600';
      case ActivityType.Transport: return 'bg-blue-100 text-blue-600';
      case ActivityType.Activity: return 'bg-purple-100 text-purple-600';
      case ActivityType.Shopping: return 'bg-pink-100 text-pink-600';
      case ActivityType.Hotel: return 'bg-indigo-100 text-indigo-600';
      default: return 'bg-slate-100 text-slate-600';
    }
  };

  return (
    <div className="pt-8 px-4">
      <h1 className="text-2xl font-bold text-slate-800 mb-6 pl-2">Daily Itinerary</h1>
      
      <div className="space-y-4">
        {ITINERARY.map((day) => (
          <div 
            key={day.date} 
            className={`bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden transition-all duration-300 ${expandedDay === day.date ? 'ring-2 ring-blue-100' : ''}`}
          >
            {/* Header */}
            <div 
              onClick={() => setExpandedDay(expandedDay === day.date ? '' : day.date)}
              className="p-5 flex items-center justify-between cursor-pointer active:bg-slate-50"
            >
              <div>
                <h3 className="font-bold text-lg text-slate-800">{day.displayDate}</h3>
                <div className="flex items-center space-x-2 text-sm text-slate-500 mt-1">
                  <span>{day.location}</span>
                  <span>•</span>
                  <div className="flex items-center space-x-1">
                    <span>{day.weather.icon === 'Snow' || 'Snowflake' ? '❄️' : '☀️'}</span>
                    <span>{day.weather.temp}</span>
                  </div>
                </div>
              </div>
              <div className={`transform transition-transform ${expandedDay === day.date ? 'rotate-90' : ''}`}>
                <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedDay === day.date && (
              <div className="border-t border-slate-100 bg-slate-50/50 pb-4">
                
                {/* Weather Advice */}
                <div className="px-5 py-3 bg-blue-50/50 flex items-start space-x-2 text-xs text-blue-700">
                  <span className="mt-0.5">👕</span>
                  <span>{day.weather.clothing}</span>
                </div>

                {/* Timeline */}
                <div className="px-5 py-4 space-y-6">
                  {day.schedule.map((item, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-slate-200 last:border-0">
                      <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-white ${getTypeColor(item.type)} flex items-center justify-center`}>
                        {/* Dot */}
                      </div>
                      
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-bold text-slate-400 bg-white px-2 py-0.5 rounded-full border border-slate-100">{item.time}</span>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full ${getTypeColor(item.type)} flex items-center gap-1`}>
                            {getTypeIcon(item.type)}
                            {item.type}
                          </span>
                        </div>
                      </div>

                      <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100/50">
                        <div className="flex justify-between items-start gap-3">
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-700 text-sm">{item.title}</h4>
                            {item.description && (
                              <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.description}</p>
                            )}
                            {item.bookingReference && (
                              <div className="mt-2 text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded inline-block">
                                Ref: {item.bookingReference}
                              </div>
                            )}
                            {item.expense && (
                              <div className="mt-2 text-xs text-emerald-600 font-medium">
                                Est. ¥{item.expense.estimatedCostJPY.toLocaleString()}
                              </div>
                            )}
                          </div>
                          
                          {/* Image Thumbnail */}
                          {item.image && (
                            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100">
                              <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                            </div>
                          )}
                        </div>

                        {/* Actions */}
                        {(item.location?.mapUrl || item.link) && (
                          <div className="flex gap-2 mt-3 pt-3 border-t border-slate-50">
                            {item.location?.mapUrl && (
                              <a 
                                href={item.location.mapUrl} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-1.5 bg-blue-50 hover:bg-blue-100 text-blue-600 py-2 rounded-xl text-xs font-bold transition-colors"
                              >
                                <Navigation size={12} />
                                <span>GPS Map</span>
                              </a>
                            )}
                            {item.link && (
                              <a 
                                href={item.link} 
                                target="_blank" 
                                rel="noreferrer"
                                className="flex-1 flex items-center justify-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 py-2 rounded-xl text-xs font-bold transition-colors"
                              >
                                <span>Info</span>
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Hotel Footer for Day */}
                {day.accommodation && (
                  <div className="mx-5 mt-2 bg-indigo-50 p-4 rounded-2xl flex items-center justify-between border border-indigo-100">
                    <div>
                      <p className="text-[10px] uppercase text-indigo-400 font-bold mb-1">Tonight's Stay</p>
                      <p className="text-sm font-bold text-indigo-900">{day.accommodation.name}</p>
                    </div>
                    <a 
                      href={day.accommodation.mapUrl}
                      target="_blank" 
                      rel="noreferrer"
                      className="bg-white p-2 rounded-full shadow-sm text-indigo-500"
                    >
                      <Navigation size={16} />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItineraryView;