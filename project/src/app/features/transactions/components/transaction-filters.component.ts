import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-transaction-filters',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="filters">
      <div class="filter-group">
        <label>Catégorie</label>
        <select (change)="onFilterChange($event)" class="filter-select">
          <option value="">Toutes</option>
          <option *ngFor="let category of categories" [value]="category">
            {{ category }}
          </option>
        </select>
      </div>
    </div>
  `,
  styles: [`
    .filters {
      background: white;
      padding: 1rem;
      border-radius: var(--border-radius);
      margin-bottom: 1rem;
      box-shadow: var(--shadow-sm);
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .filter-select {
      padding: 0.5rem;
      border: 1px solid #e2e8f0;
      border-radius: 0.375rem;
      background-color: white;
    }

    label {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-color);
    }
  `]
})
export class TransactionFiltersComponent {
  @Input() categories: string[] = [];
  @Output() filtersChange = new EventEmitter<{category?: string}>();

  onFilterChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.filtersChange.emit({ category: select.value });
  }
}