import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

interface Report {
  acronym: string;
  title: string;
  owner: string;
  views: number;
  created: string;
  type: string;
}

interface ReportMatch {
  yourReport: Report;
  similarReport: Report;
  matchPercentage: number;
}

@Component({
  selector: 'app-similar-reports',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="similar-reports-container">
      <div class="header">
        <h2 class="title">Similar Reports</h2>
        <p class="subtitle">
          Below are the top 5 report similarity matches. Each pair shows one of your reports compared to a similar report in the system.
        </p>
      </div>

      <div class="reports-list">
        @for (match of reportMatches; track match.yourReport.acronym) {
          <div class="report-pair">
            <!-- Your Report -->
            <div class="report-card your-report">
              <div class="card-header">YOUR REPORT</div>
              <div class="card-content">
                <div class="report-icon" [attr.data-type]="match.yourReport.type">
                  {{ match.yourReport.acronym }}
                </div>
                <div class="report-details">
                  <h3 class="report-title">{{ match.yourReport.title }}</h3>
                  <div class="report-meta">
                    <div class="meta-row">
                      <mat-icon class="meta-icon"></mat-icon>
                      <span class="meta-label">Owner:</span>
                      <span class="meta-value">{{ match.yourReport.owner }}</span>
                    </div>
                    <div class="meta-row">
                      <mat-icon class="meta-icon"></mat-icon>
                      <span class="meta-label">Views:</span>
                      <span class="meta-value">{{ match.yourReport.views | number }}</span>
                    </div>
                    <div class="meta-row">
                      <mat-icon class="meta-icon"></mat-icon>
                      <span class="meta-label">Created:</span>
                      <span class="meta-value">{{ match.yourReport.created }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Match Score -->
            <div class="match-indicator">
              <mat-icon class="match-arrows"></mat-icon>
              <div class="match-badge" 
                   [class.high]="match.matchPercentage >= 80" 
                   [class.medium]="match.matchPercentage >= 60 && match.matchPercentage < 80"
                   [class.low]="match.matchPercentage < 60">
                <span class="badge-percentage">{{ match.matchPercentage }}%</span>
                <span class="badge-label">MATCH</span>
              </div>
            </div>

            <!-- Similar Report -->
            <div class="report-card similar-report">
              <div class="card-header">SIMILAR REPORT</div>
              <div class="card-content">
                <div class="report-icon dark" [attr.data-type]="match.similarReport.type">
                  {{ match.similarReport.acronym }}
                </div>
                <div class="report-details">
                  <h3 class="report-title">{{ match.similarReport.title }}</h3>
                  <div class="report-meta">
                    <div class="meta-row">
                      <mat-icon class="meta-icon"></mat-icon>
                      <span class="meta-label">Owner:</span>
                      <span class="meta-value">{{ match.similarReport.owner }}</span>
                    </div>
                    <div class="meta-row">
                      <mat-icon class="meta-icon"></mat-icon>
                      <span class="meta-label">Views:</span>
                      <span class="meta-value">{{ match.similarReport.views | number }}</span>
                    </div>
                    <div class="meta-row">
                      <mat-icon class="meta-icon"></mat-icon>
                      <span class="meta-label">Created:</span>
                      <span class="meta-value">{{ match.similarReport.created }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </div>

      <div class="legend">
        <div class="legend-title">
          <mat-icon class="legend-icon"></mat-icon>
          <span class="legend-title-text">Understanding Similarity Scores</span>
        </div>
        <div class="legend-content">
          <p class="legend-item">
            <span class="legend-bold">&gt;70% (Grey):</span>
            <span class="legend-text">Related reports with distinct value</span>
          </p>
          <p class="legend-item">
            <span class="legend-bold">= 70-90% (Orange):</span>
            <span class="legend-text">Significant overlap - review recommended</span>
          </p>
          <p class="legend-item">
            <span class="legend-bold">&gt;90% (Red):</span>
            <span class="legend-text">Near-duplicate - consider consolidating</span>
          </p>
          <p class="legend-item">
            <mat-icon class="warning-icon"></mat-icon>
            <span class="legend-text">High similarity scores may indicate opportunities for report consolidation</span>
          </p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .similar-reports-container {
      padding: 24px;
      background: white;
      border-radius: 16px;
      border: 1px solid #f0f0f0;
      margin: 48px auto 0;
      max-width: calc(100vw - 48px);
      box-sizing: border-box;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    }

    .header {
      margin-bottom: 32px;
    }

    .title {
      font-size: 24px;
      font-weight: 600;
      color: #2d3748;
      margin: 0 0 8px 0;
    }

    .subtitle {
      font-size: 14px;
      color: #718096;
      margin: 0;
      line-height: 1.5;
    }

    .reports-list {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .report-pair {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      gap: 16px;
      align-items: stretch;
    }

    .report-card {
      background: #fafafa;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 16px;
      transition: all 0.2s ease;
      display: flex;
      flex-direction: column;
    }

    .report-card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }

    .card-header {
      font-size: 11px;
      font-weight: 600;
      color: #a0aec0;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
      flex-shrink: 0;
    }

    .card-content {
      display: grid;
      grid-template-columns: 64px 1fr;
      gap: 16px;
      align-items: flex-start;
      flex: 1;
    }

    .report-icon {
      width: 64px;
      height: 64px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      font-weight: 700;
      color: white;
      flex-shrink: 0;
      background-color: #28a745;
      grid-row: 1 / 2;
      grid-column: 1;
    }

    .report-icon.dark {
      background-color: #666;
    }

    .report-details {
      display: flex;
      flex-direction: column;
      gap: 12px;
      min-width: 0;
    }

    .report-title {
      font-size: 15px;
      font-weight: 600;
      color: #2d3748;
      margin: 0;
      line-height: 1.4;
      word-break: break-word;
      overflow-wrap: break-word;
    }

    .report-meta {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: auto;
    }

    .meta-row {
      display: grid;
      grid-template-columns: 16px auto 1fr;
      gap: 8px;
      align-items: center;
      font-size: 13px;
      color: #4a5568;
    }

    .meta-icon {
      font-size: 16px;
      width: 16px;
      height: 16px;
      color: #a0aec0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .meta-label {
      font-weight: 500;
      color: #4a5568;
      white-space: nowrap;
    }

    .meta-value {
      word-break: break-word;
      overflow-wrap: break-word;
      min-width: 0;
    }

    .match-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: 0 8px;
    }

    .match-arrows {
      font-size: 24px;
      width: 24px;
      height: 24px;
      color: #cbd5e0;
    }

    .match-badge {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 700;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }

    .match-badge.high {
      background: linear-gradient(135deg, #dc3545 0%, #e85463 100%);
    }

    .match-badge.medium {
      background: linear-gradient(135deg, #ffc107 0%, #ffd043 100%);
    }

    .match-badge.low {
      background: linear-gradient(135deg, #666 0%, #888 100%);
    }

    .badge-percentage {
      font-size: 20px;
      line-height: 1;
    }

    .badge-label {
      font-size: 9px;
      letter-spacing: 0.5px;
      margin-top: 2px;
    }

    .legend {
      margin-top: 32px;
      padding-top: 24px;
      border-top: 1px solid #e2e8f0;
    }

    .legend-title {
      font-size: 13px;
      font-weight: 600;
      color: #2d3748;
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .legend-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: #4299e1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .legend-title-text {
      display: flex;
      align-items: center;
    }

    .legend-content {
      font-size: 12px;
      color: #718096;
      line-height: 1.6;
    }

    .legend-item {
      margin: 4px 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .legend-bold {
      color: #4a5568;
      font-weight: 600;
    }

    .legend-text {
      display: flex;
      align-items: center;
    }

    .warning-icon {
      font-size: 14px;
      width: 14px;
      height: 14px;
      color: #ed8936;
      margin-right: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media (max-width: 1024px) {
      .report-pair {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .match-indicator {
        flex-direction: row;
        justify-content: center;
        padding: 0;
      }

      .match-arrows {
        display: none;
      }
    }

    @media (max-width: 640px) {
      .similar-reports-container {
        padding: 16px;
        margin: 24px auto 0;
      }

      .card-content {
        grid-template-columns: 56px 1fr;
      }

      .report-icon {
        width: 56px;
        height: 56px;
        font-size: 18px;
      }

      .meta-row {
        grid-template-columns: 16px 1fr;
      }

      .meta-label {
        display: none;
      }
    }
  `]
})
export class SimilarReportsComponent {
  reportMatches: ReportMatch[] = [
    {
      yourReport: {
        acronym: 'SPD',
        title: 'Sales Performance DashboardSales Performance DashboardSales Performance DashboardSales Performance DashboardSales Performance DashboardSales Performance DashboardSales Performance DashboardSales Performance DashboardSales Performance DashboardSales Performance DashboardSales Performance DashboardSales Performance DashboardSales Performance Dashboard',
        owner: 'Patrick LostyPatrick LostyPatrick LostyPatrick LostyPatrick LostyPatrick LostyPatrick LostyPatrick Losty',
        views: 2847,
        created: 'Jan 15, 2024',
        type: 'sales'
      },
      similarReport: {
        acronym: 'RPD',
        title: 'Regional_Performance_Dashboard_Regional_Performance_Dashboard_Regional_Performance_Dashboard_Regional_Performance_Dashboard_Regional_Performance_Dashboard_Regional_Performance_Dashboard_Regional_Performance_Dashboard_Regional_Performance_Dashboard_Regional_Performance_Dashboard_Regional_Performance_Dashboard_Regional_Performance_Dashboard_',
        owner: 'Sarah Johnson',
        views: 1523,
        created: 'Mar 8, 2024',
        type: 'sales'
      },
      matchPercentage: 94
    },
    {
      yourReport: {
        acronym: 'CJA',
        title: 'Customer Journey Analytics',
        owner: 'Patrick Losty',
        views: 1892,
        created: 'Apr 3, 2024',
        type: 'analytics'
      },
      similarReport: {
        acronym: 'Q3',
        title: 'Q3 Sales Analytics Report',
        owner: 'Michael Chen',
        views: 3291,
        created: 'Jul 22, 2023',
        type: 'analytics'
      },
      matchPercentage: 87
    },
    {
      yourReport: {
        acronym: 'ROI',
        title: 'Marketing Campaign ROI Tracker',
        owner: 'Patrick Losty',
        views: 3456,
        created: 'Jun 12, 2023',
        type: 'marketing'
      },
      similarReport: {
        acronym: 'CEM',
        title: 'Customer Engagement Metrics',
        owner: 'Emily Rodriguez',
        views: 2145,
        created: 'May 18, 2024',
        type: 'marketing'
      },
      matchPercentage: 73
    },
    {
      yourReport: {
        acronym: 'QRA',
        title: 'Quarterly Revenue Analysis',
        owner: 'Patrick Losty',
        views: 5123,
        created: 'Aug 20, 2023',
        type: 'finance'
      },
      similarReport: {
        acronym: 'FPO',
        title: 'Financial Performance Overview',
        owner: 'David Kim',
        views: 1876,
        created: 'Nov 8, 2023',
        type: 'finance'
      },
      matchPercentage: 65
    },
    {
      yourReport: {
        acronym: 'EPM',
        title: 'Employee Performance Metrics',
        owner: 'Patrick Losty',
        views: 2356,
        created: 'Dec 5, 2023',
        type: 'hr'
      },
      similarReport: {
        acronym: 'HRD',
        title: 'HR Metrics Dashboard',
        owner: 'Jennifer Smith',
        views: 1764,
        created: 'Feb 28, 2024',
        type: 'hr'
      },
      matchPercentage: 52
    }
  ];
}