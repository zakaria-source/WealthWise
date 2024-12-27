import {Component, Input} from '@angular/core';
import {CommonModule} from '@angular/common';

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
            border-radius: 12px; /* Coins légèrement arrondis */
            box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1); /* Ombre subtile */
            height: auto; /* S'ajuste dynamiquement au contenu */
            max-height: 150px; /* Limitation de la hauteur */
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .widget-header {
            padding: 0.5rem; /* Moins d'espace autour */
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(0, 0, 0, 0.02);
        }

        .widget-header h3 {
            font-size: 0.85rem; /* Taille de texte réduite */
            font-weight: 600;
            color: var(--text-color);
            margin: 0;
        }

        .widget-content {
            padding: 0.5rem; /* Moins de padding dans le contenu */
            position: relative;
            font-size: 0.8rem; /* Taille de texte plus compacte */
        }

        @media (max-width: 768px) {
            .widget {
                border-radius: 6px;
            }

            .widget-header {
                padding: 0.4rem; /* Encore moins d'espace pour les petits écrans */
            }

            .widget-content {
                padding: 0.4rem;
            }
        }
    `]
})
export class WidgetComponent {
    @Input() title: string = '';
}
