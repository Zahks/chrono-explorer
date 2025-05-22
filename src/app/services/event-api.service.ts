import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface EventItem {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
  details?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventApiService {
  private apiUrl = 'http://localhost:3000/api/events';

  constructor(private http: HttpClient) {}

  getEvents(): Observable<EventItem[]> {
    return this.http.get<EventItem[]>(this.apiUrl);
  }

searchEvents(query: string): Observable<EventItem[]> { //recent update
  return this.http.get<EventItem[]>(`${this.apiUrl}/search?q=${query}`);
}

}

