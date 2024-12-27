import {BalanceWidgetComponent} from "./components/balance-widget.component";
import {CommonModule} from "@angular/common";
import {Component, OnInit} from "@angular/core";
import {SavingsWidgetComponent} from "./components/savings-widget.component";
import {ExpensesWidgetComponent} from "./components/expenses-widget.component";
import {Chart, registerables} from "chart.js";

Chart.register(...registerables);

@Component({
    selector: "app-dashboard",
    standalone: true,
    imports: [
        CommonModule,
        BalanceWidgetComponent,
        ExpensesWidgetComponent,
        SavingsWidgetComponent,
    ],
    template: `
        <div class="dashboard">
            <!-- Header -->
            <header class="dashboard-header">
                <div class="header-left">
                    <img src="assets/avatar.png" alt="User Avatar" class="user-avatar"/>
                    <div class="user-info">
                        <h1>Tableau de bord</h1>

                    </div>
                </div>
                <div class="header-right">
                    <div class="header-actions">
                        <button class="icon-button notifications-button" title="Notifications">
                            <i class="fas fa-bell"></i>
                            <span *ngIf="notificationsCount > 0" class="badge">
                                {{ notificationsCount }}
                            </span>
                        </button>
                        <button class="icon-button profile-button" title="Profil">
                            <i class="fas fa-user"></i>
                        </button>
                        <button class="icon-button settings-button" title="Paramètres">
                            <i class="fas fa-cog"></i>
                        </button>
                    </div>
                </div>
            </header>

            <p class="welcome-text">Bonjour, {{ userName }}</p>

            <!-- Dashboard Grid -->
            <div class="dashboard-grid">

                <app-balance-widget
                        [amount]="balanceAmount"
                        [trend]="balanceTrend"
                        class="widget-item"
                >
                </app-balance-widget>
                <app-expenses-widget
                        [amount]="expensesAmount"
                        [percentage]="expensesPercentage"
                        class="widget-item"
                >
                </app-expenses-widget>
                <app-savings-widget
                        label="Projet maison"
                        [percentage]="savingsPercentage"
                        class="widget-item"
                >
                </app-savings-widget>
            </div>

            <!-- Trend Section -->
            <section class="trend-section">
                <h2><i class="fas fa-chart-line"></i> Tendances financières</h2>
                <canvas id="trendChart" class="trend-chart"></canvas>
            </section>

            <!-- Alerts Section -->
            <section class="alerts-section">
                <h2><i class="fas fa-bell"></i> Conseils & Alertes</h2>
                <ul>
                    <li>
                        <strong>Conseil :</strong> Augmentez vos économies pour atteindre 80 %
                        de votre objectif.
                    </li>
                    <li>
                        <strong>Alerte :</strong> Vos dépenses ont augmenté de 10 % ce mois-ci.
                    </li>
                </ul>
            </section>
        </div>
    `,
    styles: [
        `
            .dashboard {
                padding: 0.2rem;
                max-width: 100%;
                font-family: "Arial", sans-serif;
                background: #f4f6f9;
            }

            /* Header */
            .dashboard-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-bottom: 0.5rem;
                padding: 0.8rem 1.2rem;
                background: #1a237e;
                color: white;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }

            .header-left {
                display: flex;
                align-items: center;
                gap: 1rem;
            }

            .header-left h1 {
                font-size: 1rem;
                margin: 0;
            }

            .user-avatar {
                width: 24px;
                height: 24px;
                border-radius: 50%;
                margin-right: 0.2rem;
                border: 2px solid white;
            }

            .welcome-text {
                font-size: 1.5rem;
                font-weight: 600;
                text-align: center;
                margin: 0.7rem auto;
                color: #2c3e50;
                letter-spacing: 0.05rem;
                line-height: 1.4;
            }

            .header-right {
                display: flex;
                align-items: center;
                gap: 1.5rem;
            }

            .header-actions {
                display: flex;
                gap: 1.5rem; /* Espace entre les boutons */
            }

            .icon-button {
                background: none;
                border: none;
                color: white;
                font-size: 1.2rem;
                cursor: pointer;
                transition: transform 0.2s ease;
            }

            .icon-button:hover {
                transform: scale(1.1);
            }

            .notifications-button {
                position: relative;
            }

            .notifications-button .badge {
                position: absolute;
                top: -5px;
                right: -5px;
                background: #ff5722;
                color: white;
                font-size: 0.7rem;
                border-radius: 50%;
                padding: 0.2rem 0.4rem;
            }

            /* Dashboard Grid */
            .dashboard-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
                gap: 0.2rem;
            }

            .widget-item {
                background: white;
                padding: 0.2rem;
                border-radius: 6px;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
                font-size: 0.8rem;
            }

            /* Trend Section */
            .trend-section {
                text-align: center;
                padding: 1rem;
            }

            .trend-chart {
                max-width: 100%;
                height: 250px;
                margin: 0 auto;
            }

            /* Alerts Section */
            .alerts-section ul {
                padding: 0;
                margin: 0;
            }

            .alerts-section li {
                padding: 0.3rem;
                font-size: 0.8rem;
                background: #fff8e1;
                border-left: 3px solid #ffc107;
                margin-bottom: 0.2rem;
                border-radius: 4px;
            }
        `,
    ],
})
export class DashboardComponent implements OnInit {
    userName = "Jean Dupont";
    notificationsCount = 2;

    // Fake data for the dashboard
    balanceAmount = 0;
    balanceTrend = 0;

    expensesAmount = 0;
    expensesPercentage = 0;

    savingsPercentage = 0;

    ngOnInit() {
        this.loadData();
    }

    private loadData() {
        this.balanceAmount = 24530.45;
        this.balanceTrend = 2.4;
        this.expensesAmount = 1245.3;
        this.expensesPercentage = 65;
        this.savingsPercentage = 75;

        this.initTrendChart();
    }

    private initTrendChart() {
        const ctx = (document.getElementById("trendChart") as HTMLCanvasElement).getContext("2d");
        new Chart(ctx!, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                    {
                        label: "Revenus",
                        data: [5000, 5200, 4800, 5100, 5300, 5000],
                        borderColor: "rgba(75, 192, 192, 1)",
                        backgroundColor: "rgba(75, 192, 192, 0.2)",
                        tension: 0.4,
                        pointStyle: "circle",
                        pointRadius: 5,
                        pointHoverRadius: 8,
                    },
                    {
                        label: "Dépenses",
                        data: [3000, 3200, 3100, 3500, 3400, 3300],
                        borderColor: "rgba(255, 99, 132, 1)",
                        backgroundColor: "rgba(255, 99, 132, 0.2)",
                        tension: 0.4,
                        pointStyle: "rectRot",
                        pointRadius: 5,
                        pointHoverRadius: 8,
                    },
                ],
            },
            options: {
                maintainAspectRatio: true,
                responsive: true,
                plugins: {
                    legend: {
                        position: "top",
                        labels: {
                            font: {
                                size: 12,
                            },
                        },
                    },
                },
                scales: {
                    x: {grid: {display: false}, ticks: {font: {size: 10}}},
                    y: {grid: {color: "#e0e0e0"}, ticks: {font: {size: 10}}},
                },
            },
        });
    }
}
