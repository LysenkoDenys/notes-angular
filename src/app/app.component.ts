import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { NOTES } from '../notes';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    MenuComponent,
    NotesListComponent,
    AddNoteComponent,
  ],
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

  notes = NOTES;

  show(title: string) {
    alert(title);
  }
}
