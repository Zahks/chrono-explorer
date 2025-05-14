import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moderation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.scss']
})
export class ModerationComponent {
  comments: any[] = [];

  constructor() {
    const currentUser = localStorage.getItem('connectedUser');
    if (currentUser !== 'admin@chrono.fr') {
      alert('Accès refusé ❌');
      window.location.href = '/';
    }

    const saved = localStorage.getItem('comments');
    this.comments = saved ? JSON.parse(saved) : [];
  }

  moderate(index: number) {
    this.comments[index].isModerated = true;
    this.save();
  }

  delete(index: number) {
    this.comments.splice(index, 1);
    this.save();
  }

  save() {
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }
}
