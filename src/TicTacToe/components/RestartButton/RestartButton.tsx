import { GameState } from '../../models.ts';

interface RestartButtonProps {
  setTilesData: (t: GameState) => void;
  tilesDataEmpty: GameState;
}

export const RestartButton = ({ setTilesData, tilesDataEmpty }: RestartButtonProps) => {
  const onRestart = () => {
    setTilesData(tilesDataEmpty);
    localStorage.setItem('gameState', JSON.stringify(tilesDataEmpty));
  };

  return (
    <button onClick={onRestart}>
      restart
    </button>
  );
};
