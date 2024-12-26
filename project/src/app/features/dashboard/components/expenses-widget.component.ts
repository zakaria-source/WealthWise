import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from '../../../shared/components/widget/widget.component';

@Component({
  selector: 'app-expenses-widget',
  standalone: true,
  imports: [CommonModule, WidgetComponent],
  template: `
    <app-widget title="Dépenses du mois">
      <div class="expenses">
        <span class="amount">{{ amount | currency:'EUR' }}</span>
        <div class="progress-bar">
          <div class="progress" [style.width.%]="percentage"></div>
        </div>
      </div>
    </app-widget>
  `,
  styles: [`
    .expenses {
      padding: 1rem 0;
    }
    .amount {
      display: block;
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }
    .progress-bar {
      width: 100%;
      height: 8px;
      background: #f0f0f0;
      border-radius: 4px;
      overflow: hidden;
    }
    .progress {
      height: 100%;
      background: var(--primary-color);
      border-radius: 4px;
    }
  `]
})
export class ExpensesWidgetComponent {
  @Input() amount: number = 0;
  @Input() percentage: number = 0;
}