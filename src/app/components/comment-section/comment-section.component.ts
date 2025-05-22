import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommentApiService, CommentItem } from '../../services/comment-api.service';


@Component({
  selector: 'app-comment-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit {
  @Input() eventId!: number;
  comments: CommentItem[] = [];
  newComment: string = '';
  confirmationMessage = '';

  constructor(private commentApi: CommentApiService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    this.commentApi.getComments(this.eventId).subscribe({
      next: (data) => this.comments = data,
      error: () => console.error("❌ Impossible de charger les commentaires")
    });
  }

 addComment() {
  const username = localStorage.getItem('connectedUser');
  if (!username) {
    alert("❌ Vous devez être connecté pour commenter.");
    return;
  }

  if (this.newComment.trim()) {
    const comment: CommentItem = {
      eventId: this.eventId,
      username,
      message: this.newComment
    };

    this.commentApi.addComment(comment).subscribe(() => {
      this.newComment = '';
      this.confirmationMessage = '✅ Commentaire en attente de validation.';
      this.loadComments();
    });
  }
}


  deleteComment(id: number) {
    this.commentApi.deleteComment(id).subscribe({
      next: () => this.loadComments(),
      error: () => alert("Impossible de supprimer le commentaire ❌")
    });
  }

  getCurrentUsername(): string {
    return localStorage.getItem('connectedUser') || 'Invité';
  }

  get filteredComments(): CommentItem[] {
    return this.comments.filter(c => c.eventId === this.eventId);
  }
}
