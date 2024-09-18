import { Component, inject } from '@angular/core';
import { NOTES } from '../../notes';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './note-detail.component.html',
  styleUrl: './note-detail.component.css',
})
export class NoteDetailComponent {
  activeRoute = inject(ActivatedRoute);
  id = Number(this.activeRoute.snapshot.paramMap.get('id'));
  note = NOTES.find((i) => i.id === this.id);

  constructor(private router: Router) {} // Inject Router

  deleteNote() {
    const index = NOTES.findIndex((n) => n.id === this.id); // Find index of the note
    if (index > -1) {
      NOTES.splice(index, 1); // Remove the note
    }

    // Navigate to another page after the note is added
    this.router.navigate(['/']);
  }
}
