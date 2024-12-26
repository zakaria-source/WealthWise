import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from '../../shared/components/widget/widget.component';
import { AccountService } from './services/account.service';
import { Account, AccountType } from './models/account.model';
import { AccountNumberPipe } from '../../shared/pipes/account-number.pipe';

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, WidgetComponent, AccountNumberPipe],
  template: `
    <div class="accounts">
      <header class="page-header">
        <h1>Comptes</h1>
      </header>

      <div class="accounts-grid">
        <app-widget *ngFor="let account of accounts" [title]="account.name">
          <div class="account-details">
            <div class="account-info">
              <span class="account-number">{{ account.number | accountNumber }}</span>
              <span class="account-type">{{ account.type }}</span>
            </div>
            <div class="account-balance">
              <span class="amount">{{ account.balance | currency:account.currency }}</span>
              <span class="trend" [class.positive]="account.trend > 0" [class.negative]="account.trend < 0">
                {{ account.trend > 0 ? '+' : '' }}{{ account.trend }}%
              </span>
            </div>
            <div class="account-update">
              Dernière mise à jour: {{ account.lastUpdate | date:'short' }}
            </div>
          </div>
        </app-widget>
      </div>
    </div>
  `,
  styles: [`
    .accounts {
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

    .accounts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }

    .account-details {
      padding: 1rem 0;
    }

    .account-info {
      margin-bottom: 1rem;
    }

    .account-number {
      display: block;
      font-family: monospace;
      font-size: 1.1rem;
      color: var(--text-color);
    }

    .account-type {
      font-size: 0.875rem;
      color: #666;
    }

    .account-balance {
      margin-bottom: 1rem;
    }

    .amount {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-color);
    }

    .trend {
      font-size: 0.875rem;
      padding: 0.25rem 0.5rem;
      border-radius: 4px;
    }

    .trend.positive {
      background: #e3fcef;
      color: #0c6b3d;
    }

    .trend.negative {
      background: #fee2e2;
      color: #b91c1c;
    }

    .account-update {
      font-size: 0.75rem;
      color: #666;
    }
  `]
})
export class AccountsComponent {
  accounts: Account[] = [];

  constructor(private accountService: AccountService) {
    this.loadAccounts();
  }

  private async loadAccounts(): Promise<void> {
    try {
      this.accounts = await this.accountService.getAccounts();
    } catch (error) {
      // In a real application, we would handle this error appropriately
      console.error('Failed to load accounts:', error);
      this.accounts = []; // Ensure accounts is always an array
    }
  }
}