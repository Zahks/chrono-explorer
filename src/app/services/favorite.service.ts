import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoritesSubject = new BehaviorSubject<number[]>(this.getFavorites());
  public favorites$ = this.favoritesSubject.asObservable();

  // 🔐 Génère une clé unique par utilisateur
  private getStorageKey(): string | null {
    const user = localStorage.getItem('connectedUser');
    if (!user) return null;
    try {
      const email = JSON.parse(user).email;
      return `favoriteEvents_${email}`;
    } catch {
      return null;
    }
  }

  // ✅ Récupère les favoris de l'utilisateur courant
  getFavorites(): number[] {
    const key = this.getStorageKey();
    if (!key) return [];
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  }

  // ✅ Met à jour le stockage ET le subject observable
  private updateStorage(favs: number[]): void {
    const key = this.getStorageKey();
    if (!key) return;
    localStorage.setItem(key, JSON.stringify(favs));
    this.favoritesSubject.next(favs);
  }

  // ✅ Teste si un événement est favori
  isFavorite(eventId: number): boolean {
    return this.getFavorites().includes(eventId);
  }

  // ✅ Ajoute un favori
  addFavorite(eventId: number): void {
    const favs = this.getFavorites();
    if (!favs.includes(eventId)) {
      favs.push(eventId);
      this.updateStorage(favs);
    }
  }

  // ✅ Supprime un favori
  removeFavorite(eventId: number): void {
    const favs = this.getFavorites().filter(id => id !== eventId);
    this.updateStorage(favs);
  }

  // ✅ Active/désactive un favori
  toggleFavorite(eventId: number): void {
    this.isFavorite(eventId) ? this.removeFavorite(eventId) : this.addFavorite(eventId);
  }
}
