import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EVENTS, EventItem } from '../../data/events';
import { CommentSectionComponent } from '../comment-section/comment-section.component';
import { FavoriteService } from '../../services/favorite.service';

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
  isFav: boolean = false;

  constructor(private route: ActivatedRoute, private favService: FavoriteService) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.event = EVENTS.find((e: EventItem) => e.id === id);
    if (this.event) {
      this.isFav = this.favService.isFavorite(this.event.id);
    }
  }

  toggleFav(): void {
    if (!this.event) return;
    this.favService.toggleFavorite(this.event.id);
    this.isFav = this.favService.isFavorite(this.event.id);
  }
}
