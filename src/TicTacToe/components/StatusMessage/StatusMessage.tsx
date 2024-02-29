interface GameStatusMessageProps {
  winner: string | null;
  isGameFinished: boolean;
  currentPlayer: string;
}

export const StatusMessage = ({
  winner,
  isGameFinished,
  currentPlayer,
}: GameStatusMessageProps) => {
  if (winner) {
    return <h2>{winner} won!</h2>;
  }

  if (isGameFinished) {
    return <h2>Nobody won :'(</h2>;
  }

  return (
    <h2>player {currentPlayer === 'x' ? 'o' : 'x'}, your move</h2>
  );
};
