import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs.tsx';
import { Tiles } from '../Tiles/Tiles.tsx';
import { getWinner } from '../../helpers/getWinner.ts';
import { TilesData, Tiles as TilesType } from '../../models.ts';
import { useBeforeUnload } from '../../hooks/useBeforeUnload.ts';
import { RestartButton } from '../RestartButton/RestartButton.tsx';
import { GameStatusMessage } from '../GameStatusMessage/GameStatusMessage.tsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';

const tilesDataEmpty: TilesData = {
  tiles: Array.from({ length: 9 }) as TilesType,
  tilesDisplay: null,
  currentPlayer: 'o',
  history: [],
};

export const TicTacToe = () => {
  const [tilesData, setTilesData] = useLocalStorage('tilesData', tilesDataEmpty);
  const winner = getWinner(tilesData.tiles);

  // Use the custom hook for managing local storage on beforeunload
  useBeforeUnload(tilesData);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <GameStatusMessage
        winner={winner}
        currentPlayer={tilesData.currentPlayer}
      />
      <Tiles
        tiles={tilesData.tiles}
        tilesDisplay={tilesData.tilesDisplay}
        setTilesData={setTilesData}
      />
      <BreadCrumbs
        tiles={tilesData.tiles}
        history={tilesData.history}
        setTilesData={setTilesData}
      />
      <RestartButton
        setTilesData={setTilesData}
        tilesDataEmpty={tilesDataEmpty}
      />
    </div>
  );
};

// todo: fix setting state after victory
// todo: fix non click after reset
// todo: fix ts
// todo: fix style
// todo: refactor (especially this module)
