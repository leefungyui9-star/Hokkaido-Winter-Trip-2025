import { DayItinerary, ActivityType, Reservation, Currency } from './types';

// Approximate Exchange Rate
export const EXCHANGE_RATE_JPY_TO_HKD = 0.053; 

export const RESERVATIONS: Reservation[] = [
  {
    id: 'h1',
    type: 'Hotel',
    name: 'Keio Prelia Hotel Sapporo',
    number: 'Check Email',
    date: '24-27 Dec',
    status: 'Confirmed',
    link: 'https://maps.apple.com/?q=Keio+Prelia+Hotel+Sapporo'
  },
  {
    id: 'r1',
    type: 'Restaurant',
    name: 'Guenpin Fugu (Dinner)',
    number: '#25488',
    date: '24 Dec 19:45',
    status: 'Confirmed',
    link: 'https://guenpin-susukino.com/zh_hk/'
  },
  {
    id: 'r2',
    type: 'Restaurant',
    name: 'Kani Shogun (Crab)',
    number: 'Check Email',
    date: '25 Dec 18:00',
    status: 'Confirmed',
    link: 'https://www.kani-ya.co.jp/shogun/sapporo/'
  },
  {
    id: 'h2',
    type: 'Hotel',
    name: 'La\'gent Stay Hakodate Ekimae',
    number: 'Check Email',
    date: '27-29 Dec',
    status: 'Confirmed',
    link: 'https://maps.apple.com/?q=La+gent+Stay+Hakodate+Ekimae'
  },
  {
    id: 'h3',
    type: 'Hotel',
    name: 'Royal Park Canvas Sapporo',
    number: 'Check Email',
    date: '29 Dec - 1 Jan',
    status: 'Confirmed',
    link: 'https://maps.apple.com/?q=The+Royal+Park+Canvas+Sapporo+Odori+Park'
  },
  {
    id: 'r3',
    type: 'Restaurant',
    name: 'Sapporo Beer Garden (Genghis Khan)',
    number: 'ID: ZDU4TD',
    date: '29 Dec 18:30',
    status: 'Confirmed',
    link: 'https://sapporobiergarten-kaitakushikan.com/'
  },
  {
    id: 't1',
    type: 'Tour',
    name: 'Furano/Biei Tour (Klook)',
    number: '5403804107 / KLK0129156423',
    date: '30 Dec 09:30',
    status: 'Confirmed',
    link: 'https://www.klook.com/'
  },
  {
    id: 'i1',
    type: 'Insurance',
    name: 'Allianz Travel Insurance',
    number: 'SCBHKA300015936',
    date: 'Coverage Period',
    status: 'Confirmed'
  }
];

export const ITINERARY: DayItinerary[] = [
  {
    date: '2025-12-24',
    displayDate: '24 Dec (Wed)',
    location: 'Sapporo',
    weather: {
      temp: '-2°C',
      condition: 'Snow',
      icon: 'Snowflake',
      clothing: 'Heavy coat, thermal layers, waterproof boots'
    },
    accommodation: {
      name: 'Keio Prelia Hotel Sapporo',
      address: 'JR Sapporo Station North Exit',
      mapUrl: 'https://maps.apple.com/?q=Keio+Prelia+Hotel+Sapporo',
      image: 'https://picsum.photos/id/1040/800/400'
    },
    schedule: [
      {
        time: '10:25',
        title: 'Depart HKG (CX584)',
        type: ActivityType.Transport,
        description: 'Arrive CTS at 15:55',
        image: 'https://picsum.photos/id/366/200/200'
      },
      {
        time: '16:30',
        title: 'New Chitose Airport -> Sapporo Station',
        type: ActivityType.Transport,
        expense: { estimatedCostJPY: 1230, category: ActivityType.Transport },
        description: 'JR Chitose Line. Can use IC Card.',
        image: 'https://picsum.photos/id/1067/200/200'
      },
      {
        time: '18:00',
        title: 'Check-in: Keio Prelia Hotel',
        type: ActivityType.Hotel,
        location: { name: 'Keio Prelia Hotel', mapUrl: 'https://maps.apple.com/?q=Keio+Prelia+Hotel+Sapporo' },
        description: 'Rest and freshen up.'
      },
      {
        time: '19:00',
        title: 'Sapporo Christmas Market',
        type: ActivityType.Activity,
        location: { name: 'Odori Park', mapUrl: 'https://maps.apple.com/?q=Odori+Park+Sapporo' },
        link: 'https://boxiutravel.com/sapporo-christmas-market-lights/',
        image: 'https://picsum.photos/id/260/200/200'
      },
      {
        time: '19:45',
        title: 'Dinner: Guenpin Fugu',
        type: ActivityType.Food,
        bookingReference: '#25488',
        location: { name: 'Guenpin Fugu', mapUrl: 'https://maps.apple.com/?q=Guenpin+Fugu+Susukino' },
        link: 'https://guenpin-susukino.com/zh_hk/',
        image: 'https://picsum.photos/id/493/200/200'
      }
    ]
  },
  {
    date: '2025-12-25',
    displayDate: '25 Dec (Thu)',
    location: 'Sapporo',
    weather: {
      temp: '-3°C',
      condition: 'Snow Showers',
      icon: 'CloudSnow',
      clothing: 'Scarf, gloves, warm hat'
    },
    schedule: [
      {
        time: 'Morning',
        title: 'Breakfast & Shopping',
        type: ActivityType.Shopping,
        description: 'Daimaru (Pokemon Center), Tokyu (Uniqlo/GU), APIA Underground',
        image: 'https://picsum.photos/id/1060/200/200'
      },
      {
        time: 'Lunch',
        title: 'Soup Curry / 3 COINS',
        type: ActivityType.Food,
        location: { name: 'Rojiura Curry SAMURAI', mapUrl: 'https://maps.apple.com/?q=Rojiura+Curry+SAMURAI' }
      },
      {
        time: '16:00',
        title: 'Sapporo TV Tower',
        type: ActivityType.Activity,
        location: { name: 'Sapporo TV Tower', mapUrl: 'https://maps.apple.com/?q=Sapporo+TV+Tower' },
        link: 'https://carolblog.tw/sapporo-tv-tower/',
        image: 'https://picsum.photos/id/342/200/200'
      },
      {
        time: '18:00',
        title: 'Dinner: Kani Shogun',
        type: ActivityType.Food,
        bookingReference: 'Confirmed',
        location: { name: 'Kani Shogun Sapporo', mapUrl: 'https://maps.apple.com/?q=Kani+Shogun+Sapporo' },
        image: 'https://picsum.photos/id/292/200/200'
      },
      {
        time: 'Night',
        title: 'Susukino & Nikka Sign',
        type: ActivityType.Activity,
        location: { name: 'Susukino', mapUrl: 'https://maps.apple.com/?q=Susukino+Crossing' }
      }
    ]
  },
  {
    date: '2025-12-26',
    displayDate: '26 Dec (Fri)',
    location: 'Otaru',
    weather: {
      temp: '-4°C',
      condition: 'Heavy Snow',
      icon: 'Snowflake',
      clothing: 'Waterproof outer layer essential'
    },
    schedule: [
      {
        time: 'Morning',
        title: 'Train to Otaru',
        type: ActivityType.Transport,
        expense: { estimatedCostJPY: 800, category: ActivityType.Transport },
        description: 'JR Hakodate Line (45 mins)',
        image: 'https://picsum.photos/id/1036/200/200'
      },
      {
        time: '11:00',
        title: 'Sakaimachi Street',
        type: ActivityType.Activity,
        description: 'LeTAO, Music Box Museum, Kitaichi Glass',
        location: { name: 'Sakaimachi Street', mapUrl: 'https://maps.apple.com/?q=Otaru+Music+Box+Museum' },
        image: 'https://picsum.photos/id/355/200/200'
      },
      {
        time: 'Afternoon',
        title: 'Otaru Canal',
        type: ActivityType.Activity,
        location: { name: 'Otaru Canal', mapUrl: 'https://maps.apple.com/?q=Otaru+Canal' },
        image: 'https://picsum.photos/id/400/200/200'
      },
      {
        time: 'Sunset',
        title: 'Mt. Tengu Night View',
        type: ActivityType.Activity,
        description: 'Cable car to observatory',
        location: { name: 'Mt. Tengu Ropeway', mapUrl: 'https://maps.apple.com/?q=Otaru+Tenguyama+Ropeway' },
        image: 'https://picsum.photos/id/837/200/200'
      },
      {
        time: 'Dinner',
        title: 'Sushi Street / Canal Night View',
        type: ActivityType.Food
      },
      {
        time: 'Night',
        title: 'Return to Sapporo',
        type: ActivityType.Transport,
        expense: { estimatedCostJPY: 800, category: ActivityType.Transport }
      }
    ]
  },
  {
    date: '2025-12-27',
    displayDate: '27 Dec (Sat)',
    location: 'Hakodate',
    weather: {
      temp: '-1°C',
      condition: 'Cloudy',
      icon: 'Cloud',
      clothing: 'Standard winter gear'
    },
    accommodation: {
      name: 'La\'gent Stay Hakodate Ekimae',
      address: 'Next to Hakodate Station',
      mapUrl: 'https://maps.apple.com/?q=La+gent+Stay+Hakodate+Ekimae',
      image: 'https://picsum.photos/id/1050/800/400'
    },
    schedule: [
      {
        time: '09:45',
        title: 'JR Sapporo -> Hakodate',
        type: ActivityType.Transport,
        expense: { estimatedCostJPY: 9770, category: ActivityType.Transport },
        description: 'Hokuto Express (approx 4 hours)',
        image: 'https://picsum.photos/id/600/200/200'
      },
      {
        time: '14:00',
        title: 'Check-in: La\'gent Stay',
        type: ActivityType.Hotel
      },
      {
        time: '15:00',
        title: 'Goryokaku Tower & Park',
        type: ActivityType.Activity,
        location: { name: 'Goryokaku Tower', mapUrl: 'https://maps.apple.com/?q=Goryokaku+Tower' },
        image: 'https://picsum.photos/id/724/200/200'
      },
      {
        time: 'Dinner',
        title: 'Hakodate HAKOVIVA',
        type: ActivityType.Food,
        link: 'https://hakoviva.com/shop/'
      }
    ]
  },
  {
    date: '2025-12-28',
    displayDate: '28 Dec (Sun)',
    location: 'Hakodate',
    weather: {
      temp: '-2°C',
      condition: 'Sunny Intervals',
      icon: 'SunDim',
      clothing: 'Windbreaker recommended for Mt. Hakodate'
    },
    schedule: [
      {
        time: 'Morning',
        title: 'Hakodate Morning Market',
        type: ActivityType.Food,
        description: 'Seafood Rice Bowl',
        location: { name: 'Hakodate Morning Market', mapUrl: 'https://maps.apple.com/?q=Hakodate+Morning+Market' },
        image: 'https://picsum.photos/id/292/200/200'
      },
      {
        time: 'Noon',
        title: 'Kanemori Red Brick Warehouse',
        type: ActivityType.Activity,
        location: { name: 'Kanemori Red Brick Warehouse', mapUrl: 'https://maps.apple.com/?q=Kanemori+Red+Brick+Warehouse' },
        image: 'https://picsum.photos/id/830/200/200'
      },
      {
        time: 'Afternoon',
        title: 'Hachiman-zaka Slope / Motomachi',
        type: ActivityType.Activity,
        location: { name: 'Hachimanzaka', mapUrl: 'https://maps.apple.com/?q=Hachimanzaka' }
      },
      {
        time: 'Sunset',
        title: 'Mt. Hakodate Night View',
        type: ActivityType.Activity,
        description: 'Top 3 night views in Japan. Arrive 1 hour before sunset.',
        location: { name: 'Mt. Hakodate Ropeway', mapUrl: 'https://maps.apple.com/?q=Mount+Hakodate+Ropeway' },
        image: 'https://picsum.photos/id/973/200/200'
      }
    ]
  },
  {
    date: '2025-12-29',
    displayDate: '29 Dec (Mon)',
    location: 'Sapporo',
    weather: {
      temp: '-3°C',
      condition: 'Snow',
      icon: 'Snowflake',
      clothing: 'Warm layers'
    },
    accommodation: {
      name: 'The Royal Park Canvas',
      address: 'Odori Park',
      mapUrl: 'https://maps.apple.com/?q=The+Royal+Park+Canvas+Sapporo+Odori+Park',
      image: 'https://picsum.photos/id/1039/800/400'
    },
    schedule: [
      {
        time: '10:05',
        title: 'JR Hakodate -> Sapporo',
        type: ActivityType.Transport,
        expense: { estimatedCostJPY: 9770, category: ActivityType.Transport },
        image: 'https://picsum.photos/id/600/200/200'
      },
      {
        time: '15:00',
        title: 'Check-in: Royal Park Canvas',
        type: ActivityType.Hotel
      },
      {
        time: '16:00',
        title: 'Sapporo Beer Museum',
        type: ActivityType.Activity,
        location: { name: 'Sapporo Beer Museum', mapUrl: 'https://maps.apple.com/?q=Sapporo+Beer+Museum' },
        image: 'https://picsum.photos/id/447/200/200'
      },
      {
        time: '18:30',
        title: 'Dinner: Genghis Khan (Lamb)',
        type: ActivityType.Food,
        bookingReference: 'ID: ZDU4TD',
        location: { name: 'Sapporo Beer Garden', mapUrl: 'https://maps.apple.com/?q=Sapporo+Beer+Garden' },
        image: 'https://picsum.photos/id/431/200/200'
      }
    ]
  },
  {
    date: '2025-12-30',
    displayDate: '30 Dec (Tue)',
    location: 'Biei/Furano',
    weather: {
      temp: '-8°C',
      condition: 'Freezing',
      icon: 'ThermometerSnowflake',
      clothing: 'Maximum warmth: Heattech, Down jacket, Beanie'
    },
    schedule: [
      {
        time: '09:30',
        title: 'Klook Tour: Biei & Furano',
        type: ActivityType.Activity,
        bookingReference: 'KLK0129156423',
        description: 'Meeting: Odori Park Exit 31. Blue Pond, Shirahige Waterfall.',
        location: { name: 'Odori Park', mapUrl: 'https://maps.apple.com/?q=Odori+Park' },
        image: 'https://picsum.photos/id/10/200/200'
      },
      {
        time: '20:30',
        title: 'Return to Sapporo',
        type: ActivityType.Transport
      },
      {
        time: 'Dinner',
        title: 'Kadoya (Eel) or Izakaya',
        type: ActivityType.Food,
        location: { name: 'Kadoya', mapUrl: 'https://maps.apple.com/?q=Kadoya+Sapporo' }
      }
    ]
  },
  {
    date: '2025-12-31',
    displayDate: '31 Dec (Wed)',
    location: 'Sunagawa/Sapporo',
    weather: {
      temp: '-4°C',
      condition: 'Snow',
      icon: 'Snowflake',
      clothing: 'Formal/Warm for Shrine visit'
    },
    schedule: [
      {
        time: 'Morning',
        title: 'Nijo Market',
        type: ActivityType.Food,
        location: { name: 'Nijo Market', mapUrl: 'https://maps.apple.com/?q=Nijo+Market' },
        image: 'https://picsum.photos/id/365/200/200'
      },
      {
        time: '10:00',
        title: 'Train to Sunagawa',
        type: ActivityType.Transport,
        expense: { estimatedCostJPY: 3480, category: ActivityType.Transport },
        description: 'Visit SHIRO Perfume Factory',
        image: 'https://picsum.photos/id/500/200/200'
      },
      {
        time: '12:00',
        title: 'SHIRO Factory & Cafe',
        type: ActivityType.Activity,
        location: { name: 'SHIRO Sunagawa', mapUrl: 'https://maps.apple.com/?q=SHIRO+Sunagawa' }
      },
      {
        time: '15:15',
        title: 'Return Shuttle/Train',
        type: ActivityType.Transport
      },
      {
        time: '19:00',
        title: 'Dinner: Buffet Dining DEN',
        type: ActivityType.Food,
        bookingReference: 'Confirmed',
        location: { name: 'Buffet Dining DEN', mapUrl: 'https://maps.apple.com/?q=Japanese+Buffet+Dining+DEN' }
      },
      {
        time: 'Midnight',
        title: 'New Year Countdown',
        type: ActivityType.Activity,
        description: 'Hokkaido Shrine (Bell ringing) or TV Tower',
        location: { name: 'Hokkaido Shrine', mapUrl: 'https://maps.apple.com/?q=Hokkaido+Shrine' },
        image: 'https://picsum.photos/id/728/200/200'
      }
    ]
  },
  {
    date: '2026-01-01',
    displayDate: '1 Jan (Thu)',
    location: 'Sapporo/Airport',
    weather: {
      temp: '-5°C',
      condition: 'Clear',
      icon: 'Sun',
      clothing: 'Comfortable travel clothes'
    },
    schedule: [
      {
        time: 'Morning',
        title: 'Suwa Shrine',
        type: ActivityType.Activity,
        location: { name: 'Suwa Shrine', mapUrl: 'https://maps.apple.com/?q=Sapporo+Suwa+Shrine' },
        image: 'https://picsum.photos/id/896/200/200'
      },
      {
        time: '11:00',
        title: 'Mitsui Outlet Park',
        type: ActivityType.Shopping,
        description: 'Luggage storage available. Bus to Airport.',
        location: { name: 'Mitsui Outlet Park', mapUrl: 'https://maps.apple.com/?q=Mitsui+Outlet+Park+Sapporo+Kitahiroshima' },
        image: 'https://picsum.photos/id/1059/200/200'
      },
      {
        time: 'Afternoon',
        title: 'Bus to New Chitose Airport',
        type: ActivityType.Transport,
        expense: { estimatedCostJPY: 1230, category: ActivityType.Transport }
      },
      {
        time: '19:00',
        title: 'Depart CTS (CX587)',
        type: ActivityType.Transport,
        description: 'Arrive HKG at 23:55'
      }
    ]
  }
];