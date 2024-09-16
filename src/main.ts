import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { NotesListComponent } from './app/notes-list/notes-list.component';
import { AddNoteComponent } from './app/add-note/add-note.component';

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
];

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
