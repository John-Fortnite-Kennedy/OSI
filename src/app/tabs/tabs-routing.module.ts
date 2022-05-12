import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'announcements',
        loadChildren: () => import('../announcements/announcements.module').then( m => m.AnnouncementPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'osi',
        loadChildren: () => import('../createorjoin/createorjoin.module').then( m => m.CreateorjoinPageModule)
      },
      {
        path: 'residents-list',
        loadChildren: () => import('../residents-list/residents-list.module').then( m => m.ResidentsListPageModule)
      },
      {
        path: 'join-requests',
        loadChildren: () => import('../join-requests/join-requests.module').then( m => m.JoinRequestsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
