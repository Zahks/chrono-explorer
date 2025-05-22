// src/app/services/media-api.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface MediaItem {
  id: number;
  eventId: number;
  type: 'image' | 'video' | 'texte';
  url: string;
  legend?: string;
}

@Injectable({
  providedIn: 'root'
})
export class MediaApiService {
  private apiUrl = 'http://localhost:3000/api/media';

  constructor(private http: HttpClient) {}

  // 🔁 Récupérer les médias liés à un événement
  getMediaByEvent(eventId: number): Observable<MediaItem[]> {
    return this.http.get<MediaItem[]>(`${this.apiUrl}/${eventId}`);
  }
}
