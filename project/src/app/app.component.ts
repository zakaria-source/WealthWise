import { Component } from '@angular/core';
import {RouterOutlet, RouterLink, RouterLinkActive} from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <div class="app-container">
      <nav class="main-nav">
        <div class="nav-header">
          <h1 class="app-title">FinTech</h1>
        </div>
        <ul class="nav-links">
          <li>
            <a routerLink="/dashboard" routerLinkActive="active">
              <i class="fas fa-chart-line"></i>
              Tableau de bord
            </a>
          </li>
          <li>
            <a routerLink="/accounts" routerLinkActive="active">
              <i class="fas fa-wallet"></i>
              Comptes
            </a>
          </li>
          <li>
            <a routerLink="/transactions" routerLinkActive="active">
              <i class="fas fa-exchange-alt"></i>
              Transactions
            </a>
          </li>
        </ul>
      </nav>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styles: [`
    .app-container {
      display: grid;
      grid-template-columns: 280px 1fr;
      min-height: 100vh;
    }

    .main-nav {
      background: #1a237e;
      color: white;
      padding: 1.5rem;
      display: flex;
      flex-direction: column;
    }

    .nav-header {
      padding-bottom: 2rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      margin-bottom: 2rem;
    }

    .app-title {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
    }

    .nav-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .nav-links li {
      margin-bottom: 0.5rem;
    }

    .nav-links a {
      color: rgba(255, 255, 255, 0.8);
      text-decoration: none;
      padding: 0.75rem 1rem;
      border-radius: 8px;
      display: flex;
      align-items: center;
      transition: all 0.2s;
    }

    .nav-links a i {
      margin-right: 0.75rem;
      font-size: 1.1rem;
    }

    .nav-links a:hover {
      background: rgba(255, 255, 255, 0.1);
      color: white;
    }

    .nav-links a.active {
      background: rgba(255, 255, 255, 0.15);
      color: white;
      font-weight: 500;
    }

    .main-content {
      background: #f8f9fa;
      min-height: 100vh;
    }
  `]
})
export class App {}