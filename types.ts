export interface ServiceRole {
  title: string;
  iconName: string; // Lucide icon name mapping
  description: string;
}

export interface ContactInfo {
  label: string;
  numbers: string[];
  type: 'client' | 'candidate';
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}