import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Importo el servicio para poderlo usar

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent {

  constructor( private auth: AuthService ) {
    auth.handleAuthentication();
  }

// llamo el metodo del servicio de auth
  login() {
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
