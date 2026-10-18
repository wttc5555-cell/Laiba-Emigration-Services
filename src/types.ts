export interface CountryInfo {
  id: string;
  name: string;
  code: string;
  flag: string;
  region: 'Gulf / GCC' | 'Europe' | 'North America';
  capital: string;
  currency: string;
  processingTime: string;
  visaTypes: string[];
  inDemandJobs: string[];
  salaryRange: string;
  contractDuration: string;
  description: string;
  requirements: string[];
  benefits: string[];
  popular?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  targetAudience: 'Job Seekers' | 'Overseas Employers' | 'Both';
  turnaround: string;
  iconName: string;
}

export interface ProcessStage {
  step: number;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  keyChecklist: string[];
  involvedParties: string[];
}

export interface GalleryPhoto {
  id: string;
  title: string;
  category: 'orientation' | 'office' | 'departure' | 'testing';
  location: string;
  date: string;
  imageUrl: string;
  description: string;
  batchCode?: string;
  candidatesCount?: number;
}

export interface JobOpening {
  id: string;
  title: string;
  country: string;
  countryCode: string;
  flag: string;
  city: string;
  vacancies: number;
  salary: string;
  experience: string;
  deadline: string;
  benefits: string[];
  category: 'Technical' | 'Healthcare' | 'Construction' | 'Hospitality' | 'Logistics';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  country: string;
  flag: string;
  company: string;
  year: string;
  quote: string;
  avatar: string;
  previousSalary: string;
  newSalary: string;
}

export interface OfficeBranch {
  id: string;
  city: string;
  country: string;
  role: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  isHeadquarters?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Visas' | 'Costs' | 'Medical' | 'Processing' | 'Departure';
}

export interface VisaTrackerRecord {
  trackingId: string;
  candidateName: string;
  passportNo: string;
  destinationCountry: string;
  trade: string;
  appliedDate: string;
  currentStepIndex: number; // 0 to 4
  expectedDeparture: string;
  stepsHistory: {
    stage: string;
    date: string;
    completed: boolean;
    remarks: string;
  }[];
}
