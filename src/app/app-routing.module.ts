import { StepGuard } from './core/modules/presentation/guards/step.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/modules/auth/guards/auth.guard';
import { PublicGuard } from './core/modules/auth/guards/public.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./core/modules/auth/auth.module').then(m => m.AuthModule),
    canActivate: [PublicGuard],
    canMatch: [PublicGuard]
  },
  {
    path: 'step',
    loadChildren: () => import('./core/modules/presentation/presentation.module').then(m => m.PresentationModule),
  },
  {
    path: '',
    loadChildren: () => import('./core/modules/tabs/tabs.module').then(m => m.TabsPageModule),
    canActivate: [AuthGuard],
    canMatch: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
