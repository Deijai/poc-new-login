import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './step.page.html',
  styleUrls: ['./step.page.css']
})
export class StepPage {

  constructor(private router: Router) {}


  public onRedirectLogin() {
    this.router.navigate(['./auth']);
  }

  public onRedirectDemonstration() {
    this.router.navigate(['./step//demonstration']);
  }

  public onRedirectUpdates() {
    this.router.navigate(['./step//updates']);
  }
}
