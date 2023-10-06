import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninPage } from './pages/signin/signin.page';

const routes: Routes = [
  {
    path: '',
    component: SigninPage
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
export class AuthRoutingModule { }
