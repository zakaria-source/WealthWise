import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-transaction-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="transaction-list">
      <div class="transaction-item" *ngFor="let transaction of transactions" (click)="onSelect(transaction)">
        <div class="transaction-info">
          <span class="date">{{ transaction.date | date }}</span>
          <span class="description">{{ transaction.description }}</span>
        </div>
        <div class="transaction-amount" [class.credit]="transaction.type === 'CREDIT'">
          {{ transaction.type === 'CREDIT' ? '+' : '-' }}{{ transaction.amount | currency:'EUR' }}
        </div>
      </div>
    </div>
  `,
  styles: [`
    .transaction-list {
      background: white;
      border-radius: var(--border-radius);
      box-shadow: var(--shadow-sm);
    }

    .transaction-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      border-bottom: 1px solid #f0f0f0;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .transaction-item:hover {
      background-color: #f8f9fa;
    }

    .transaction-info {
      display: flex;
      flex-direction: column;
    }

    .date {
      font-size: 0.9rem;
      color: #666;
    }

    .description {
      color: var(--text-color);
      font-weight: 500;
    }

    .transaction-amount {
      font-weight: 600;
      color: #dc2626;
    }

    .transaction-amount.credit {
      color: #059669;
    }
  `]
})
export class TransactionListComponent {
  @Input() transactions: Transaction[] = [];
  @Output() transactionSelect = new EventEmitter<Transaction>();

  onSelect(transaction: Transaction): void {
    this.transactionSelect.emit(transaction);
  }
}