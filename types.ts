export enum Currency {
  JPY = 'JPY',
  HKD = 'HKD'
}

export enum ActivityType {
  Transport = 'Transport',
  Food = 'Food',
  Activity = 'Activity',
  Hotel = 'Hotel',
  Shopping = 'Shopping',
  Other = 'Other'
}

export interface Location {
  name: string;
  lat?: number;
  lng?: number;
  address?: string;
  mapUrl?: string; // Apple maps link
}

export interface Expense {
  estimatedCostJPY: number;
  category: ActivityType;
  paid?: boolean;
}

export interface ScheduleItem {
  time: string;
  title: string;
  type: ActivityType;
  location?: Location;
  description?: string;
  bookingReference?: string; // For reservations
  link?: string; // External info link
  expense?: Expense;
  image?: string;
}

export interface DayItinerary {
  date: string; // YYYY-MM-DD
  displayDate: string; // "24 Dec (Wed)"
  location: string; // e.g., "Sapporo"
  weather: {
    temp: string;
    condition: string; // "Snow", "Cloudy"
    icon: string; // Lucide icon name or emoji
    clothing: string;
  };
  schedule: ScheduleItem[];
  accommodation?: {
    name: string;
    address: string;
    mapUrl: string;
    image: string;
  };
}

export interface Reservation {
  id: string;
  type: string;
  name: string;
  number: string;
  date: string;
  status: 'Confirmed' | 'Pending';
  link?: string;
}