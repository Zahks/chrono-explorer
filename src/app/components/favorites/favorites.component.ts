import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EVENTS, EventItem } from '../../data/events';
import { FavoriteService } from '../../services/favorite.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  providers: [FavoriteService]
})
export class FavoritesComponent implements OnInit {
  favoriteEvents: EventItem[] = [];

  constructor(private favService: FavoriteService) {}

  ngOnInit(): void {
  this.favService.favorites$.subscribe(favoriteIds => {
    this.favoriteEvents = EVENTS.filter(event => favoriteIds.includes(event.id));
  });
}

}
