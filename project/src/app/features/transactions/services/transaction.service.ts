import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from '../models/transaction.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = `${environment.apiUrl}/transactions`;

  constructor(private http: HttpClient) {}

  async getTransactions(): Promise<Transaction[]> {
    // Temporary mock data until backend is ready
    return Promise.resolve([
      {
        id: '1',
        date: new Date(),
        amount: 42.50,
        description: 'Supermarché',
        category: 'Alimentation',
        type: 'DEBIT',
        accountId: '1',
        status: 'COMPLETED'
      }
    ] as Transaction[]);
  }

  async getCategories(): Promise<string[]> {
    return Promise.resolve([
      'Alimentation',
      'Transport',
      'Loisirs',
      'Santé'
    ]);
  }
}