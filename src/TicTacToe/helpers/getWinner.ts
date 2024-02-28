import { Tile, Tiles } from '../models.ts';

const isArrayHomogeneous = <T>(arr: T[]): boolean =>
  Array.from(new Set(arr)).length === 1;

const isArrayHomogenousAndNonNull = <T>(arr: T[]): boolean => {
  return isArrayHomogeneous(arr) && arr[0] !== null;
}

const group = (tiles: Tiles) => {
  const size = Math.sqrt(tiles.length);
  const groups = {
    columns: Array.from({ length: size }, () => [] as Tile[]),
    rows: Array.from({ length: size }, () => [] as Tile[]),
    diagonals: [[], []] as Tile[][],
  };

  for (let i = 0; i < size; ++i) {
    for (let j = 0; j < tiles.length; j += size) {
      groups.columns[i].push(tiles[i + j])
    }

    for (let j = 0; j < size; ++j) {
      groups.rows[i].push(tiles[i * size + j]);
    }
  }

  for (let i = 0; i < size; ++i) {
    groups.diagonals[0].push(tiles[i + size * i]);
  }

  for (let i = 1; i <= size; ++i) {
    groups.diagonals[1].push(tiles[(size * (size - i) + i) - 1])
  }

  return groups;
}

export const getWinner = (tiles: Tiles) => {
  const groups = group(tiles);
  let res = null;

  Object.values(groups).forEach(group => {
    const groupRes = group.find(isArrayHomogenousAndNonNull);

    if (groupRes) {
      res = groupRes[0]
    }
  })

  return res;
}
