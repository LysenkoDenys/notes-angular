import { Component } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  FormControl,
  Validators,
} from '@angular/forms';
FormGroup;
import { NOTES } from '../../notes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-note',
  standalone: true,
  templateUrl: './add-note.component.html',
  styleUrl: './add-note.component.css',
  imports: [ReactiveFormsModule],
})
export class AddNoteComponent {
  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
  });

  constructor(private router: Router) {} // Inject Router

  addNote() {
    let title = this.addNoteForm.value.title ?? '';
    let text = this.addNoteForm.value.text ?? '';

    if (this.addNoteForm.valid) {
      let ids = NOTES.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newNote = {
        id: maxId + 1,
        title: title,
        text: text,
      };
      NOTES.unshift(newNote);
      this.addNoteForm.reset();

      // Navigate to another page after the note is added
      this.router.navigate(['/']);
    }
  }
}
