import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BalanceWidgetComponent } from './components/balance-widget.component';
import { ExpensesWidgetComponent } from './components/expenses-widget.component';
import { SavingsWidgetComponent } from './components/savings-widget.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    BalanceWidgetComponent,
    ExpensesWidgetComponent,
    SavingsWidgetComponent
  ],
  template: `
    <div class="dashboard">
      <header class="dashboard-header">
        <div class="header-content">
          <h1>Tableau de bord</h1>
          <p class="welcome-text">Bonjour, bienvenue sur votre espace financier</p>
        </div>
        <div class="date-display">
          {{ currentDate | date:'EEEE d MMMM yyyy':'':'fr' }}
        </div>
      </header>

      <div class="dashboard-grid">
        <app-balance-widget 
          [amount]="24530.45" 
          [trend]="2.4"
          class="widget-item">
        </app-balance-widget>

        <app-expenses-widget 
          [amount]="1245.30" 
          [percentage]="65"
          class="widget-item">
        </app-expenses-widget>

        <app-savings-widget 
          label="Vacances d'été"
          [percentage]="75"
          class="widget-item">
        </app-savings-widget>
      </div>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 2rem;
      max-width: 1400px;
      margin: 0 auto;
      animation: fadeIn 0.5s ease-out;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .dashboard-header {
      margin-bottom: 2.5rem;
      background: linear-gradient(135deg, var(--primary-color), #283593);
      border-radius: 16px;
      padding: 2rem;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .header-content h1 {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
      letter-spacing: -0.5px;
    }

    .welcome-text {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .date-display {
      font-size: 1.1rem;
      opacity: 0.8;
      padding: 0.75rem 1.5rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      backdrop-filter: blur(10px);
    }

    .dashboard-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
      perspective: 1000px;
    }

    .widget-item {
      animation: slideIn 0.5s ease-out forwards;
      opacity: 0;
    }

    .widget-item:nth-child(1) { animation-delay: 0.1s; }
    .widget-item:nth-child(2) { animation-delay: 0.2s; }
    .widget-item:nth-child(3) { animation-delay: 0.3s; }

    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateY(30px) rotateX(-10deg);
      }
      to {
        opacity: 1;
        transform: translateY(0) rotateX(0);
      }
    }

    @media (max-width: 768px) {
      .dashboard {
        padding: 1rem;
      }

      .dashboard-header {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }

      .header-content h1 {
        font-size: 2rem;
      }

      .dashboard-grid {
        grid-template-columns: 1fr;
        gap: 1rem;
      }
    }
  `]
})
export class DashboardComponent {
  currentDate = new Date();
}