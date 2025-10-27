import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { trigger, style, transition, animate } from '@angular/animations';
export type SubCollection =  {
  name: string;
  id: string;
}

export type Collection =  {
  id: string;
  name: string;
  type: 'owned' | 'co-owned' | 'shared';
  reportCount: number;
  subCount: number;
  expanded: boolean;
  subCollections?: SubCollection[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
  trigger('expandCollapse', [
    transition(':enter', [
      style({ height: 0, opacity: 0 }),
      animate('200ms ease-out', style({ height: '*', opacity: 1 }))
    ]),
    transition(':leave', [
      animate('200ms ease-in', style({ height: 0, opacity: 0 }))
    ])
  ])
]
})
export class SidebarComponent {
  isCollapsed = false;

  collections: Collection[] = [
    {
      id: '1',
      name: 'My Personal Reports',
      type: 'owned',
      reportCount: 5,
      subCount: 3,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports', id: '1-1' },
        { name: 'Market Analysis', id: '1-2' },
        { name: 'Risk Assessment', id: '1-3' }
      ]
    },
    {
      id: '2',
      name: 'Team_Dashboard_Team_Dashboard_Team_Dashboard_Team_Dashboard_Team_Dashboard_Team_Dashboard',
      type: 'co-owned',
      reportCount: 12,
      subCount: 2,
      expanded: false,
      subCollections: [
        { name: 'Weekly Reports', id: '2-1' },
        { name: 'Monthly Summary', id: '2-2' }
      ]
    },
    {
      id: '3',
      name: 'Conor\'s Collection',
      type: 'shared',
      reportCount: 1,
      subCount: 0,
      expanded: false,
      subCollections: []
    },
    {
      id: '4',
      name: 'ArchiveCollectionArchiveCollectionArchiveCollectionArchiveCollectionArchiveCollection',
      type: 'owned',
      reportCount: 25,
      subCount: 5,
      expanded: false,
      subCollections: [
        { name: '2023 Reports', id: '4-1' },
        { name: 'Legacy Data', id: '4-2' },
        { name: 'Historical Analysis', id: '4-3' },
        { name: 'Backup Reports', id: '4-4' },
        { name: 'Old Templates', id: '4-5' }
      ]
    },
    {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' },
                { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    },
        {
      id: '5',
      name: 'LotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollectionsLotsOfSubcollections',
      type: 'owned',
      reportCount: 5,
      subCount: 15,
      expanded: false,
      subCollections: [
        { name: 'Financial Reports Q1', id: '5-1' },
        { name: 'Market Analysis Q1', id: '5-2' },
        { name: 'Risk Assessment Q1', id: '5-3' },
        { name: 'Financial Reports Q2', id: '5-4' },
        { name: 'Market Analysis Q2', id: '5-5' },
        { name: 'Risk Assessment Q2', id: '5-6' },
        { name: 'Financial Reports Q3', id: '5-7' },
        { name: 'Market Analysis Q3', id: '5-8' },
        { name: 'Risk Assessment Q3', id: '5-9' },
        { name: 'Financial Reports Q4', id: '5-10' },
        { name: 'Market Analysis Q4', id: '5-11' },
        { name: 'Risk Assessment Q4', id: '5-12' },
        { name: 'Annual Summary', id: '5-13' },
        { name: 'Executive Overview', id: '5-14' },
        { name: 'Strategic Insights', id: '5-15' }
      ]
    }
  ];

  toggleExpand(collection: Collection): void {
    collection.expanded = !collection.expanded;
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  createCollection(): void {
    console.log('Create collection clicked');
  }
}