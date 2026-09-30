export type PageId = 'home' | 'about' | 'services' | 'service-area' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
}

export interface CountyInfo {
  name: string;
  seats: string;
  coverage: string;
}
