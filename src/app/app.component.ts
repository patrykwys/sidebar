import { Component } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { SimilarReportsComponent } from './card-grid/card-grid.component';
import { CollectionPageComponent } from "./sidebar/page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SidebarComponent, SimilarReportsComponent, CollectionPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Starter';

  //  isMobile = window.innerWidth < 768;
  // sidebarOpen = false;

  // toggleSidebar(): void {
  //   this.sidebarOpen = !this.sidebarOpen;
  // }
}
