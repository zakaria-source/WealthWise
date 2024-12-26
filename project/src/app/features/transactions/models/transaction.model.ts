export interface Transaction {
  id: string;
  date: Date;
  amount: number;
  description: string;
  category: string;
  type: TransactionType;
  accountId: string;
  merchant?: string;
  location?: string;
  status: TransactionStatus;
}

export enum TransactionType {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT'
}

export enum TransactionStatus {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}