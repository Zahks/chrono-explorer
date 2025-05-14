import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Comment {
  eventId: number;
  username: string;
  message: string;
  date: Date;
}

@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent {
  @Input() eventId!: number;

  comments: Comment[] = this.loadComments(); // 🧠 récupère les commentaires au démarrage
  newComment: string = '';

  addComment() {
    if (this.newComment.trim()) {
      const username = localStorage.getItem('connectedUser') || 'Invité';

      this.comments.push({
        eventId: this.eventId,
        username,
        message: this.newComment,
        date: new Date()
      });

      this.saveComments(); // ✅ sauvegarde
      this.newComment = '';
    }
  }

  deleteComment(index: number) {
    this.comments.splice(index, 1);
    this.saveComments(); // ✅ sauvegarde après suppression
  }


  get filteredComments() {
    return this.comments.filter(c => c.eventId === this.eventId);
  }

    getCurrentUsername(): string {
  return localStorage.getItem('connectedUser') || 'Invité';
}

  // 🔁 Sauvegarde des commentaires dans localStorage
  saveComments() {
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  // 🔁 Chargement des commentaires depuis localStorage
  loadComments(): Comment[] {
    const stored = localStorage.getItem('comments');
    return stored ? JSON.parse(stored) : [];
  }
}
