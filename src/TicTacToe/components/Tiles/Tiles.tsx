import React from 'react';
import { Tile } from './Tile.tsx';
import { Tiles as TilesType, TilesData, TilesDisplay } from '../../models.ts';

export interface TilesProps {
  tiles: TilesType;
  tilesDisplay: TilesDisplay;
  setTilesData: React.Dispatch<React.SetStateAction<TilesData>>;
}

export const Tiles = ({
  tiles,
  tilesDisplay,
  setTilesData,
}: TilesProps) => {
  const gameStarted = (new Set(tiles)).size > 2;

  const onSetTiles = (tileId: number) => {
    if (tiles[tileId] !== null) {
      return;
    }

    setTilesData(prevState => {
      const tiles = [...prevState.tiles];

      tiles[tileId] = prevState.currentPlayer === 'x' ? 'o' : 'x';

      return {
        tiles,
        tilesDisplay: null,
        currentPlayer: tiles[tileId],
        history: [...prevState.history, tileId],
      } as TilesData;
    });
  };

  return (
    <div style={{
      height: 340,
      width: 340,
      display: 'flex',
      flexWrap: 'wrap',
      marginBottom: 40,
    }}>
      {(tilesDisplay ?? tiles).map((tile, i) => (
        <Tile
          content={tile}
          onClick={() => onSetTiles(i)}
          clickable={!gameStarted || tiles[i] === null}
          key={i}
        />
      ))}
    </div>
  );
};
