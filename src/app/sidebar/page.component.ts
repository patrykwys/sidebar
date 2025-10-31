import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { SidebarComponent } from '../sidebar/sidebar.component';

export interface CollectionCard {
  id: number;
  title: string;
  description: string;
  itemCount: number;
  lastUpdated: Date;
  type: 'owned' | 'shared' | 'co-owned';
  imageUrl?: string;
}

@Component({
  selector: 'app-collection-page',
  standalone: true,
  imports: [CommonModule, MatIconModule, SidebarComponent],
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class CollectionPageComponent {
  private allCards: CollectionCard[] = Array.from({ length: 100 }, (_, i) => {
    const types: Array<'owned' | 'shared' | 'co-owned'> = ['owned', 'shared', 'co-owned'];
    return {
      id: i + 1,
      title: `Collection Item ${i + 1}`,
      description: 'Sample collection item for testing scrolling and layout',
      itemCount: Math.floor(Math.random() * 30) + 1,
      lastUpdated: new Date(),
      type: types[i % 3] // Cycle through types
    };
  });

  cards: CollectionCard[] = [...this.allCards];
  activeFilters: Array<'owned' | 'shared' | 'co-owned'> = ['owned', 'shared', 'co-owned'];

  onCardClick(card: CollectionCard): void {
    console.log('Card clicked:', card);
  }

  onFilterChange(filters: Array<'owned' | 'shared' | 'co-owned'>): void {
    this.activeFilters = filters;
    if (filters.length === 0) {
      // If no filters selected, show all
      this.cards = [...this.allCards];
    } else {
      this.cards = this.allCards.filter(card => filters.includes(card.type));
    }
  }
}