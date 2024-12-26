export interface Account {
  id: string;
  name: string;
  type: AccountType;
  number: string;
  balance: number;
  currency: string;
  trend: number;
  lastUpdate: Date;
}

export enum AccountType {
  CHECKING = 'Compte courant',
  SAVINGS = 'Compte épargne',
  CREDIT = 'Carte de crédit'
}