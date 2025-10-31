import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
type collectionType = 'owned' | 'shared' | 'co-owned';

export type Basic = {
  id: number;
  name: string;
  description: string;
  type: collectionType;
};

export type Config = Basic & {
  subBasic: Basic[];
    reportCount: number;
  subCount: number;
};

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCheckboxModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isCollapsed = signal(false);
  isHovering = signal(false);
  expandedIds = new Set<number>();
  selectedSubId: number | null = null;


  // Filter state
  filterTypes = {
    owned: true,
    'co-owned': true,
    shared: true
  };


  allCollections: Config[] = [
    {
      id: 1,
      name: 'My Personal Reports',
      description: 'Personal collection of reports',
      type: 'owned', // TODO: Add to interface
      reportCount: 5, // TODO: Add to interface
      subCount: 3, // TODO: Add to interface
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
      type: 'co-owned', // TODO: Add to interface
      reportCount: 12, // TODO: Add to interface
      subCount: 2, // TODO: Add to interface
      subBasic: [
        { id: 21, name: 'Weekly Reports', description: 'Weekly team updates' },
        { id: 22, name: 'Monthly Summary', description: 'Monthly performance data' }
      ]
    },
    {
      id: 3,
      name: "Conor's Collection",
      description: 'Shared by Conor',
      type: 'shared', // TODO: Add to interface
      reportCount: 1, // TODO: Add to interface
      subCount: 0, // TODO: Add to interface
      subBasic: []
    },
    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },
        {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    },    {
      id: 4,
      name: 'Archive Collection',
      description: 'Historical data archive',
      type: 'owned', // TODO: Add to interface
      reportCount: 25, // TODO: Add to interface
      subCount: 5, // TODO: Add to interface
      subBasic: [
        { id: 41, name: '2023 Reports', description: 'Year 2023 data' },
        { id: 42, name: 'Legacy Data', description: 'Legacy system data' },
        { id: 43, name: 'Historical Analysis', description: 'Historical trends' },
        { id: 44, name: 'Backup Reports', description: 'Backup data' },
        { id: 45, name: 'Old Templates', description: 'Template archive' }
      ]
    }
  ] as any; // Cast to any temporarily until properties are added to interface

  get collections(): Config[] {
    const activeTypes = (Object.keys(this.filterTypes) as collectionType[])
      .filter(key => this.filterTypes[key]);
    
    if (activeTypes.length === 0) {
      return this.allCollections; // Show all if nothing selected
    }
    
    return this.allCollections.filter(collection => 
      activeTypes.includes(collection.type)
    );
  }

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

  selectSub(id: number): void {
    this.selectedSubId = id;
  }

  toggleSidebar(): void {
    this.isCollapsed.update(value => !value);
  }

  onMouseEnter(): void {
    if (this.isCollapsed()) {
      this.isHovering.set(true);
    }
  }

  onMouseLeave(): void {
    this.isHovering.set(false);
  }

  createCollection(): void {
    console.log('Create collection clicked');
  }

  onFilterChange(): void {
    // Filter logic handled by collections getter
    // This method exists to trigger change detection when checkboxes change
  }
}