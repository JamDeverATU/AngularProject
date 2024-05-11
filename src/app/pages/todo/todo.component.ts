import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

interface Note {
  id: string;
  description: string;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  readonly APIUrl = "http://localhost:5038/AngularProject/interview_question_app/";
  notes: Note[] = [];
  newNote: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.refreshNotes();
  }

  refreshNotes() {
    this.http.get<Note[]>(this.APIUrl + 'GetNotes').subscribe(data => {
      this.notes = data;
    });
  }

  deleteNote(id: string) {
    this.http.delete(this.APIUrl + 'GetNotes?id=' + id).subscribe(() => {
      this.refreshNotes();
    });
  }

  addNote() {
    const formData = new FormData();
    formData.append("newNotes", this.newNote);
    this.http.post<Note>(this.APIUrl + 'GetNotes', formData).subscribe(newNote => {
      this.notes.push(newNote); 
      this.newNote = ''; 
    });
  }
  
}
