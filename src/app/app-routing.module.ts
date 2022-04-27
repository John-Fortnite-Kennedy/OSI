import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'welcome',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'add-service',
    loadChildren: () => import('./add-service/add-service.module').then( m => m.AddServicePageModule)
  },
  {
    path: 'terms',
    loadChildren: () => import('./terms/terms.module').then( m => m.TermsPageModule)
  },
  {
    path: 'announcements',
    loadChildren: () => import('./announcements/announcements.module').then( m => m.AnnouncementPageModule)
  },
  {
    path: 'add-announcement',
    loadChildren: () => import('./add-announcement/add-announcement.module').then( m => m.AddAnnouncementPageModule)
  },
  {
    path: 'announcement',
    loadChildren: () => import('./announcement/announcement.module').then( m => m.AnnouncementPageModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('./reports/reports.module').then( m => m.ReportsPageModule)
  },
  {
    path: 'add-report',
    loadChildren: () => import('./add-report/add-report.module').then( m => m.AddReportPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('./report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule)
  },  {
    path: 'repairs',
    loadChildren: () => import('./repairs/repairs.module').then( m => m.RepairsPageModule)
  },
  {
    path: 'add-repair',
    loadChildren: () => import('./add-repair/add-repair.module').then( m => m.AddRepairPageModule)
  },
  {
    path: 'repair',
    loadChildren: () => import('./repair/repair.module').then( m => m.RepairPageModule)
  },




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
