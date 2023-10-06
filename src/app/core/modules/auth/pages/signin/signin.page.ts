import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.css'],
})
export class SigninPage {
  constructor(private authService: AuthService, private router: Router) {}

  public onLogin(): void {
    console.log('onLogin');
    this.authService
      .login('deijai.almeida@dmasystem.com.br', '12345')
      .subscribe((response) => {
        if (response.id) this.router.navigate(['/']);
        console.log('response', response);
      });
  }
}
