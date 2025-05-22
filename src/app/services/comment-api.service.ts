import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CommentItem {
  id?: number;
  eventId: number;
  username: string;
  message: string;
  date?: string;
  isModerated?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CommentApiService {
  private apiUrl = 'http://localhost:3000/api/comments';

  constructor(private http: HttpClient) {}

  // 🔁 Récupérer les commentaires modérés d’un événement
  getComments(eventId: number): Observable<CommentItem[]> {
    return this.http.get<CommentItem[]>(`${this.apiUrl}?eventId=${eventId}`);
  }

  // ➕ Ajouter un nouveau commentaire
  addComment(comment: CommentItem): Observable<any> {
    return this.http.post(this.apiUrl, comment);
  }

  // ✅ Modérer un commentaire
  moderateComment(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/moderate/${id}`, {});
  }

  // 🗑️ Supprimer un commentaire
  deleteComment(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // 🔒 Récupérer tous les commentaires (admin uniquement)
  getAllComments(): Observable<CommentItem[]> {
    return this.http.get<CommentItem[]>(`${this.apiUrl}/all`);
  }

  // 🔍 Récupérer uniquement les commentaires non modérés
getPendingComments(): Observable<CommentItem[]> {
  return this.http.get<CommentItem[]>(`${this.apiUrl}/pending`);
}


}


