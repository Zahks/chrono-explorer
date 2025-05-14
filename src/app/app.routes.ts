import { Routes } from '@angular/router';
import { TimelineComponent } from './components/timeline/timeline.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EventDetailsComponent } from './components/event-details/event-details.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { ModerationComponent } from './components/moderation/moderation.component';

export const routes: Routes = [
  { path: '', component: TimelineComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'event/:id', component: EventDetailsComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'admin', component: ModerationComponent }
];
