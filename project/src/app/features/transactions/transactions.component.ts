import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionService } from './services/transaction.service';
import { Transaction } from './models/transaction.model';
import { TransactionListComponent } from './components/transaction-list.component';
import { TransactionFiltersComponent } from './components/transaction-filters.component';

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, TransactionListComponent, TransactionFiltersComponent],
  template: `
    <div class="transactions">
      <header class="page-header">
        <h1>Transactions</h1>
      </header>

      <app-transaction-filters
        [categories]="categories"
        (filtersChange)="onFiltersChange($event)">
      </app-transaction-filters>

      <app-transaction-list
        [transactions]="transactions"
        (transactionSelect)="onTransactionSelect($event)">
      </app-transaction-list>
    </div>
  `,
  styles: [`
    .transactions {
      padding: 2rem;
    }

    .page-header {
      margin-bottom: 2rem;
    }

    .page-header h1 {
      font-size: 2rem;
      font-weight: 700;
      color: var(--text-color);
    }
  `]
})
export class TransactionsComponent implements OnInit {
  transactions: Transaction[] = [];
  categories: string[] = [];

  constructor(private transactionService: TransactionService) {}

  async ngOnInit(): Promise<void> {
    await this.loadTransactions();
    this.categories = await this.transactionService.getCategories();
  }

  private async loadTransactions(): Promise<void> {
    this.transactions = await this.transactionService.getTransactions();
  }

  onFiltersChange(filters: any): void {
    // Implement filter logic
  }

  onTransactionSelect(transaction: Transaction): void {
    // Implement selection logic
  }
}