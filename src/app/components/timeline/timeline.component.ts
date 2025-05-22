import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timeline, DataSet } from 'vis-timeline/standalone';
import { Router } from '@angular/router';
import { EventApiService, EventItem } from '../../services/event-api.service';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit, AfterViewInit {
  @ViewChild('timeline', { static: false }) timelineContainer!: ElementRef;
  private timeline!: Timeline;

  constructor(
    private router: Router,
    private eventService: EventApiService
  ) {}

  ngOnInit() {
    // Vide si tu utilises ngAfterViewInit pour charger la timeline
  }

  ngAfterViewInit() {
    this.eventService.getEvents().subscribe(events => {
      this.loadTimeline(events);
    });
  }

  loadTimeline(events?: EventItem[]) {
    const container = this.timelineContainer.nativeElement;

    const data = events ?? [];

    const items = new DataSet(
      data.map(event => ({
        id: event.id,
        content: event.title,
        start: event.date
      }))
    );

    const options = {
      width: '100%',
      height: '300px',
      margin: { item: 20 },
      editable: false
    };

    // 🧹 Réinitialise si déjà présent
    if (this.timeline) {
      this.timeline.destroy();
    }

    this.timeline = new Timeline(container, items, options);

    this.timeline.on('select', (props) => {
      const selectedId = props.items[0];
      if (selectedId) {
        this.router.navigate(['/event', selectedId]);
      }
    });
  }

  filterTimeline(query: string) {
    if (!query.trim()) {
      this.eventService.getEvents().subscribe(events => {
        this.loadTimeline(events);
      });
      return;
    }

    this.eventService.searchEvents(query).subscribe(filtered => {
      this.loadTimeline(filtered);
    });
  }
}
