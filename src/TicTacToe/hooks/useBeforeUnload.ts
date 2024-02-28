import { useEffect } from 'react';
import { GameState } from '../models.ts';

export function useBeforeUnload(tilesData: GameState) {
  useEffect(() => {
    const handleBeforeUnload = () => localStorage.setItem('gameState', JSON.stringify(tilesData));

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [tilesData]);
}
