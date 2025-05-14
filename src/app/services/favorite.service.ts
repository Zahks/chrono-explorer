export class FavoriteService {
    private storageKey = 'favoriteEvents';
  
    getFavorites(): number[] {
      const data = localStorage.getItem(this.storageKey);
      return data ? JSON.parse(data) : [];
    }
  
    isFavorite(eventId: number): boolean {
      return this.getFavorites().includes(eventId);
    }
  
    addFavorite(eventId: number): void {
      const favs = this.getFavorites();
      if (!favs.includes(eventId)) {
        favs.push(eventId);
        localStorage.setItem(this.storageKey, JSON.stringify(favs));
      }
    }
  
    removeFavorite(eventId: number): void {
      const favs = this.getFavorites().filter(id => id !== eventId);
      localStorage.setItem(this.storageKey, JSON.stringify(favs));
    }
  
    toggleFavorite(eventId: number): void {
      this.isFavorite(eventId) ? this.removeFavorite(eventId) : this.addFavorite(eventId);
    }
  }
  