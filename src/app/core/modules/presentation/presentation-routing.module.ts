import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepPage } from './pages/step/step.page';
import { UpdatePage } from './pages/update/update.page';
import { DemonstrationPage } from './pages/demonstration/demonstration.page';
import { WelcomePage } from './pages/welcome/welcome.page';
import { StepGuard } from './guards/step.guard';

const routes: Routes = [
  {
    path: '',
    component: StepPage,
  },
  {
    path: 'updates',
    component: UpdatePage
  },
  {
    path: 'demonstration',
    component: DemonstrationPage
  },
  {
    path: 'welcome',
    component: WelcomePage,
    canActivate: [StepGuard],
    canMatch: [StepGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
