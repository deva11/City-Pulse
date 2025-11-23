
import { useEffect, useState } from 'react';
import { storage } from '../../services/storage';

const FAV_KEY = 'favorite_events';

export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    (async () => {
      const saved = await storage.get(FAV_KEY, []);
      setFavorites(saved);
    })();
  }, []);

  const isFavorite = (eventId) => favorites.some((e) => e.id === eventId);

  const toggleFavorite = async (event) => {
    let updated;
    if (isFavorite(event.id)) {
      updated = favorites.filter((e) => e.id !== event.id);
    } else {
      updated = [...favorites, event];
    }
    setFavorites(updated);
    await storage.set(FAV_KEY, updated);
  };

  return { favorites, isFavorite, toggleFavorite };
}

