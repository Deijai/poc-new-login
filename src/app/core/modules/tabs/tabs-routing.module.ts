import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { UpdatePage } from '../presentation/pages/update/update.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'notification',
        loadChildren: () => import('./pages/tab1/tab1.module').then(m => m.Tab1PageModule)
      },
      {
        path: 'approval',
        loadChildren: () => import('./pages/tab2/tab2.module').then(m => m.Tab2PageModule)
      },
      {
        path: 'update',
        component: UpdatePage
      },
      {
        path: '',
        redirectTo: '/tabs/update',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/update',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
