import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Timeline, DataSet } from 'vis-timeline/standalone';
import { Router } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule, SearchBarComponent],
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  @ViewChild('timeline', { static: true }) timelineContainer!: ElementRef;

  private allItems = [
    { id: 1, content: 'Naissance de Napoléon', start: '1769-08-15' },
    { id: 2, content: 'Révolution Française', start: '1789-07-14' },
    { id: 3, content: 'Première Guerre Mondiale', start: '1914-07-28' }
  ];

  private timeline!: Timeline;

  constructor(private router: Router) {}

  ngOnInit() {
    const container = this.timelineContainer.nativeElement;

    const options = {
      width: '100%',
      height: '300px',
      margin: { item: 20 },
      editable: false
    };

    // Initialisation avec tous les événements
    this.timeline = new Timeline(container, new DataSet(this.allItems), options);

    // Clic sur un événement
    this.timeline.on('select', (props) => {
      const selectedId = props.items[0];
      if (selectedId) {
        this.router.navigate(['/event', selectedId]);
      }
    });
  }

  // Méthode déclenchée depuis la SearchBar
  filterTimeline(searchTerm: string) {
    const filteredItems = this.allItems.filter(item =>
      item.content.toLowerCase().includes(searchTerm)
    );

    const newDataSet = new DataSet(filteredItems);
    this.timeline.setItems(newDataSet);
  }
}
