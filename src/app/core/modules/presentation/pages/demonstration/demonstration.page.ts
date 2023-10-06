import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './demonstration.page.html',
  styleUrls: ['./demonstration.page.css'],
})
export class DemonstrationPage {
  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['./step']);
  }
}
