import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Account, AccountType } from '../models/account.model';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private apiUrl = `${environment.apiUrl}/accounts`;

  constructor(private http: HttpClient) {}

  async getAccounts(): Promise<Account[]> {
    // Temporary mock data until backend is ready
    return Promise.resolve([
      {
        id: '1',
        name: 'Compte Principal',
        type: AccountType.CHECKING,
        number: '1234567890123456',
        balance: 2450.75,
        currency: 'EUR',
        trend: 2.4,
        lastUpdate: new Date()
      },
      {
        id: '2',
        name: 'Livret A',
        type: AccountType.SAVINGS,
        number: '9876543210987654',
        balance: 15780.50,
        currency: 'EUR',
        trend: 1.2,
        lastUpdate: new Date()
      }
    ]);
  }

  async getAccountById(id: string): Promise<Account> {
    // @ts-ignore
    return this.http.get<Account>(`${this.apiUrl}/${id}`).toPromise();
  }

  async updateAccount(account: Account): Promise<Account> {
    // @ts-ignore
    return this.http.put<Account>(`${this.apiUrl}/${account.id}`, account).toPromise();
  }
}