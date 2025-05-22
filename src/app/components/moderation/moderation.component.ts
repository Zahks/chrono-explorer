import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CommentApiService } from '../../services/comment-api.service';

@Component({
  selector: 'app-moderation',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.scss']
})
export class ModerationComponent implements OnInit {
  pendingComments: any[] = [];

  constructor(private commentService: CommentApiService) {
    // ✅ Sécurité accès admin
    const currentUser = localStorage.getItem('connectedUser');

    if (!currentUser) {
      alert('Accès refusé ❌');
      window.location.href = '/';
      return;
    }

    try {
      const user = JSON.parse(currentUser);
      if (user.email !== 'admin@chrono.fr') {
        alert('Accès réservé à l’administrateur ❌');
        window.location.href = '/';
      }
    } catch (e) {
      alert('Données utilisateur corrompues ❌');
      window.location.href = '/';
    }
  }

  ngOnInit(): void {
    this.loadPendingComments();
  }

  loadPendingComments(): void {
    this.commentService.getPendingComments().subscribe(data => {
      this.pendingComments = data;
    });
  }

  moderate(id: number): void {
    this.commentService.moderateComment(id).subscribe(() => {
      this.loadPendingComments(); // 🔁 rafraîchit après validation
    });
  }

  delete(id: number): void {
    this.commentService.deleteComment(id).subscribe(() => {
      this.loadPendingComments(); // 🔁 rafraîchit après suppression
    });
  }
}
