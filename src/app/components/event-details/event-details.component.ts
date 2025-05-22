// src/app/components/event-details/event-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CommentSectionComponent } from '../comment-section/comment-section.component';
import { FavoriteService } from '../../services/favorite.service';
import { EventApiService } from '../../services/event-api.service';
import { EVENTS, EventItem } from '../../data/events';
import { MediaApiService, MediaItem } from '../../services/media-api.service';

@Component({
  selector: 'app-event-details',
  standalone: true,
  imports: [CommonModule, CommentSectionComponent],
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss'],
  providers: [FavoriteService]
})
export class EventDetailsComponent implements OnInit {
  event: EventItem | undefined;
  media: MediaItem[] = [];
  isFav: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private favService: FavoriteService,
    private eventApi: EventApiService,
    private mediaApi: MediaApiService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.eventApi.getEvents().subscribe(events => {
      this.event = events.find(e => e.id === id);

      if (this.event) {
        this.isFav = this.favService.isFavorite(this.event.id);

        // 🔁 Charger les médias liés
        this.mediaApi.getMediaByEvent(this.event.id).subscribe(m => {
          this.media = m;
        });
      }
    });
  }

  isLoggedIn(): boolean {
  return !!localStorage.getItem('connectedUser');
}

  toggleFav(): void {
  const user = localStorage.getItem('connectedUser');
  if (!user) {
    alert('❌ Connectez-vous pour ajouter un favori.');
    return;
  }

  if (!this.event) return;
  this.favService.toggleFavorite(this.event.id);
  this.isFav = this.favService.isFavorite(this.event.id);
}

}
