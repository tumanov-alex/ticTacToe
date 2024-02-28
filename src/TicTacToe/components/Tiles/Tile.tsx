import { Tile as TileType } from '../../models.ts';

interface TileProps {
  content: TileType;
  onClick: () => void;
  clickable: boolean;
}

export const Tile = ({ content, onClick, clickable }: TileProps) => {
  return (
    <div
      onClick={clickable ? onClick : () => {}}
      style={{
        height: '100px',
        width: '100px',
        border: '1px solid black',
        borderRadius: '30%',
        margin: '0 10px 10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: clickable ? 'pointer' : 'default',
      }}>
      {content}
    </div>
  );
};
