import React from 'react';
import { BreadCrumb } from './BreadCrumb.tsx';
import { Tiles, History, TilesDisplay, TilesData } from '../../models.ts';

interface BreadCrumbsProps {
  tiles: Tiles;
  history: History;
  setTilesData: React.Dispatch<React.SetStateAction<TilesData>>
}

export const BreadCrumbs = ({ tiles, history, setTilesData }: BreadCrumbsProps) => {
  const setTilesToDisplay = (tilesDisplay: TilesDisplay) => setTilesData((prevState) => ({
    ...prevState,
    tilesDisplay,
  }));

  const setTilesToStep = (currentTiles: Tiles, history: History, step: number) => {
    if (step + 1 >= history.length) {
      setTilesToDisplay(null);
    }

    const stepsToDisplay = history.slice(0, step + 1);

    const historyTilesToDisplay = currentTiles.map((tile, i) =>
      stepsToDisplay.includes(i) ? tile : null) as Tiles;

    setTilesToDisplay(historyTilesToDisplay ?? null);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 20,
      height: 30,
    }}>
      {history.map((_, i) => (
        <BreadCrumb
          key={i}
          content={i}
          onClick={() => setTilesToStep(
            tiles,
            history,
            i,
          )}
        />
      ))}
    </div>
  );
}
