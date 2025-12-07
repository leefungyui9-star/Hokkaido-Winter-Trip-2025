import React, { useState } from 'react';
import { Home, Calendar, CreditCard, Ticket, Map } from 'lucide-react';
import HomeView from './views/HomeView';
import ItineraryView from './views/ItineraryView';
import FinanceView from './views/FinanceView';
import ReservationView from './views/ReservationView';
import Snowfall from './components/Snowfall';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'itinerary' | 'finance' | 'booking'>('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home': return <HomeView onChangeTab={setActiveTab} />;
      case 'itinerary': return <ItineraryView />;
      case 'finance': return <FinanceView />;
      case 'booking': return <ReservationView />;
      default: return <HomeView onChangeTab={setActiveTab} />;
    }
  };

  return (
    <div className="min-h-screen pb-24 relative text-slate-700">
      <Snowfall />
      
      {/* Main Content Area */}
      <main className="relative z-10 max-w-lg mx-auto min-h-screen bg-slate-50/80 shadow-2xl">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-slate-200 safe-area-pb">
        <div className="max-w-lg mx-auto flex justify-around items-center h-16">
          <button 
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${activeTab === 'home' ? 'text-blue-500' : 'text-slate-400'}`}
          >
            <Home size={22} />
            <span className="text-[10px] font-medium">Home</span>
          </button>
          <button 
            onClick={() => setActiveTab('itinerary')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${activeTab === 'itinerary' ? 'text-blue-500' : 'text-slate-400'}`}
          >
            <Calendar size={22} />
            <span className="text-[10px] font-medium">Itinerary</span>
          </button>
          <button 
            onClick={() => setActiveTab('finance')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${activeTab === 'finance' ? 'text-blue-500' : 'text-slate-400'}`}
          >
            <CreditCard size={22} />
            <span className="text-[10px] font-medium">Budget</span>
          </button>
          <button 
            onClick={() => setActiveTab('booking')}
            className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${activeTab === 'booking' ? 'text-blue-500' : 'text-slate-400'}`}
          >
            <Ticket size={22} />
            <span className="text-[10px] font-medium">Bookings</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default App;