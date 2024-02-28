import { TilesData } from '../../models.ts';

interface RestartButtonProps {
  setTilesData: (t: TilesData) => void;
  tilesDataEmpty: TilesData;
}

export const RestartButton = ({ setTilesData, tilesDataEmpty }: RestartButtonProps) => {
  const onRestart = () => {
    setTilesData(tilesDataEmpty);
    localStorage.setItem('tilesData', JSON.stringify(tilesDataEmpty));
  };

  return (
    <button onClick={onRestart}>
      Restart
    </button>
  );
};
