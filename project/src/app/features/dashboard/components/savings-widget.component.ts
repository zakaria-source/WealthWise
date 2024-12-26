import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from '../../../shared/components/widget/widget.component';

@Component({
  selector: 'app-savings-widget',
  standalone: true,
  imports: [CommonModule, WidgetComponent],
  template: `
    <app-widget title="Objectifs d'épargne">
      <div class="savings-goal">
        <span class="goal-label">{{ label }}</span>
        <span class="goal-progress">{{ percentage }}%</span>
        <div class="progress-bar">
          <div class="progress" [style.width.%]="percentage"></div>
        </div>
      </div>
    </app-widget>
  `,
  styles: [`
    .savings-goal {
      padding: 1rem 0;
    }
    .goal-label {
      display: block;
      font-size: 1.1rem;
      font-weight: 500;
      color: var(--text-color);
      margin-bottom: 0.5rem;
    }
    .goal-progress {
      display: block;
      font-size: 0.9rem;
      color: #666;
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
      background: var(--secondary-color);
      border-radius: 4px;
    }
  `]
})
export class SavingsWidgetComponent {
  @Input() label: string = '';
  @Input() percentage: number = 0;
}