import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from '../../../shared/components/widget/widget.component';

@Component({
  selector: 'app-balance-widget',
  standalone: true,
  imports: [CommonModule, WidgetComponent],
  template: `
    <app-widget title="Solde total">
      <div class="balance">
        <span class="amount">{{ amount | currency:'EUR' }}</span>
        <span class="trend" [class.positive]="trend > 0" [class.negative]="trend < 0">
          {{ trend > 0 ? '+' : '' }}{{ trend }}%
        </span>
      </div>
    </app-widget>
  `,
  styles: [`
    .balance {
      padding: 1rem 0;
    }
    .amount {
      display: block;
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }
    .trend {
      font-size: 0.9rem;
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
  `]
})
export class BalanceWidgetComponent {
  @Input() amount: number = 0;
  @Input() trend: number = 0;
}