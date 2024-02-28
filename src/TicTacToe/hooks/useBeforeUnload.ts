import { useEffect } from 'react';
import { TilesData } from '../models.ts';

export function useBeforeUnload(tilesData: TilesData) {
  useEffect(() => {
    const handleBeforeUnload = () => localStorage.setItem('tilesData', JSON.stringify(tilesData));

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [tilesData]);
}
