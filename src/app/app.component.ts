import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'notes';
  isRed = false;
  change() {
    this.isRed = !this.isRed;
  }

  products = ['apple', 'orange', 'banana'];

  isLoggedIn = false;

  change2() {
    this.isLoggedIn = !this.isLoggedIn;
    console.log(this.isLoggedIn);
  }
}
