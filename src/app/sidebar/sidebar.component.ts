import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export type Basic = {
  id: number;
  name: string;
  description: string;
};

export type Config = Basic & {
  subBasic: Basic[];
};

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = false;
  isHovering = false;
  expandedIds = new Set<number>();

  collections: Config[] = [
    {
      id: 1,
      name: 'My Personal Reports',
      description: 'Personal collection of reports',
      subBasic: [
        { id: 11, name: 'Financial Reports', description: 'Q1-Q4 financial data' },
        { id: 12, name: 'Market Analysis', description: 'Market trends and insights' },
        { id: 13, name: 'Risk Assessment', description: 'Risk evaluation reports' }
      ]
    },
    {
      id: 2,
      name: 'Team Dashboard',
      description: 'Shared team resources',
      subBasic: [
        { id: 21, name: 'Weekly Reports', description: 'Weekly team updates' },
        { id: 22, name: 'Monthly Summary', description: 'Monthly performance data' }
      ]
    },
    {
      id: 3,
      name: "Conor's Collection",
      description: 'Shared by Conor',
      subBasic: []
    },
    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' },
                { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' },
                { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' },        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' },
                { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    }
  ];

  isExpanded(id: number): boolean {
    return this.expandedIds.has(id);
  }

  toggleExpand(collection: Config): void {
    if (this.expandedIds.has(collection.id)) {
      this.expandedIds.delete(collection.id);
    } else {
      this.expandedIds.add(collection.id);
    }
  }

  toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
  }
selectedSubId: number | null = null;

selectSub(id: number): void {
  this.selectedSubId = id;
}
  onMouseEnter(): void {
    if (this.isCollapsed) {
      this.isHovering = true;
    }
  }

  onMouseLeave(): void {
    this.isHovering = false;
  }

  createCollection(): void {
    console.log('Create collection clicked');
  }
}