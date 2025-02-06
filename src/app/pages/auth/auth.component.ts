import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private router: Router) {}

  goToRegister() {
    this.router.navigate(['/register']);  // Ha külön regisztrációs oldalt akarsz, ezt hívhatod
  }

}
