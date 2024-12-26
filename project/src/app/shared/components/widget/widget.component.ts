import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="widget">
      <div class="widget-header">
        <h3>{{ title }}</h3>
        <div class="widget-actions">
          <ng-content select="[actions]"></ng-content>
        </div>
      </div>
      <div class="widget-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [`
    .widget {
      background: white;
      border-radius: 16px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      height: 100%;
      position: relative;
      overflow: hidden;
    }
    
    .widget::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--primary-color), var(--secondary-color));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .widget:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }
    
    .widget:hover::before {
      opacity: 1;
    }
    
    .widget-header {
      padding: 1.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(0, 0, 0, 0.01);
    }
    
    .widget-header h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-color);
      margin: 0;
      letter-spacing: -0.5px;
    }
    
    .widget-content {
      padding: 1.5rem;
      position: relative;
    }

    @media (max-width: 768px) {
      .widget {
        border-radius: 12px;
      }
      
      .widget-header {
        padding: 1.25rem;
      }
      
      .widget-content {
        padding: 1.25rem;
      }
    }
  `]
})
export class WidgetComponent {
  @Input() title: string = '';
}