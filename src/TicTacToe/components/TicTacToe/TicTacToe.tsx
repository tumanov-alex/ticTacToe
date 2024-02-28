import { BreadCrumbs } from '../BreadCrumbs/BreadCrumbs.tsx';
import { Tiles } from '../Tiles/Tiles.tsx';
import { getWinner } from '../../helpers/getWinner.ts';
import { GameState, Tiles as TilesType } from '../../models.ts';
import { useBeforeUnload } from '../../hooks/useBeforeUnload.ts';
import { RestartButton } from '../RestartButton/RestartButton.tsx';
import { StatusMessage } from '../StatusMessage/StatusMessage.tsx';
import { useLocalStorage } from '../../hooks/useLocalStorage.ts';

const gameStateInit: GameState = {
  tiles: Array.from({ length: 9 }).fill(null) as TilesType,
  tilesDisplay: null,
  currentPlayer: 'o',
  history: [],
};

export const TicTacToe = () => {
  const [gameState, setGameState] = useLocalStorage('gameState', gameStateInit);
  const winner = getWinner(gameState.tiles);
  const gameOver = !gameState.tiles.includes(null);

  // Use the custom hook for managing local storage on beforeunload
  useBeforeUnload(gameState);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    }}>
      <StatusMessage
        winner={winner}
        isGameFinished={gameOver}
        currentPlayer={gameState.currentPlayer}
      />
      <Tiles
        tiles={gameState.tiles}
        tilesDisplay={gameState.tilesDisplay}
        setTilesData={winner ? () => {} : setGameState}
      />
      <BreadCrumbs
        tiles={gameState.tiles}
        history={gameState.history}
        setTilesData={setGameState}
      />
      <RestartButton
        setTilesData={setGameState}
        tilesDataEmpty={gameStateInit}
      />
    </div>
  );
};

// todo: fix style
