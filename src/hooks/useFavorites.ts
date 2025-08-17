// useFavorites Hook - Favorites Management for BueaDelights
import { useState, useCallback } from 'react';

const FAVORITES_STORAGE_KEY = 'bueadelights_favorites';

export function useFavorites() {
  // Initialize favorites from localStorage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save favorites to localStorage
  const saveFavorites = useCallback((items: string[]) => {
    try {
      localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(items));
    } catch (error) {
      console.warn('Failed to save favorites:', error);
    }
  }, []);

  const addToFavorites = useCallback((itemId: string) => {
    setFavorites(prev => {
      if (prev.includes(itemId)) return prev;
      const newFavorites = [...prev, itemId];
      saveFavorites(newFavorites);
      return newFavorites;
    });
  }, [saveFavorites]);

  const removeFromFavorites = useCallback((itemId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.filter(id => id !== itemId);
      saveFavorites(newFavorites);
      return newFavorites;
    });
  }, [saveFavorites]);

  const toggleFavorite = useCallback((itemId: string) => {
    setFavorites(prev => {
      const newFavorites = prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId];
      saveFavorites(newFavorites);
      return newFavorites;
    });
  }, [saveFavorites]);

  const isFavorite = useCallback((itemId: string) => {
    return favorites.includes(itemId);
  }, [favorites]);

  const favoritesCount = favorites.length;

  return {
    favorites,
    favoritesCount,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite
  };
}
