interface GameStatusMessageProps {
  winner: string | null;
  currentPlayer: string;
}

export const GameStatusMessage = ({ winner, currentPlayer }: GameStatusMessageProps) => {
  return (
    <h2>
      {winner ? `${winner} won!` : `Player ${currentPlayer}, your move`}
    </h2>
  );
};
