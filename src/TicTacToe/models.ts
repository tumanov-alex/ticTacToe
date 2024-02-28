type Player = 'x' | 'o';

export type Tile = Player | null;
export type Tiles = [Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile];
export type TilesDisplay = Tiles | null;

export type History = number[];

export type GameState = {
  tiles: Tiles,
  tilesDisplay: TilesDisplay,
  currentPlayer: Player,
  history: History,
}
