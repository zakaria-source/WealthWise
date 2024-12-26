export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
}

export interface UserSettings {
  theme: 'light' | 'dark';
  currency: string;
  notifications: boolean;
}