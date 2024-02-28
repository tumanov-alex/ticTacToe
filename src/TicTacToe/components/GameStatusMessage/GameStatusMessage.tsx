interface GameStatusMessageProps {
  winner: string | null;
  isGameFinished: boolean;
  currentPlayer: string;
}

export const GameStatusMessage = ({
  winner,
  isGameFinished,
  currentPlayer,
}: GameStatusMessageProps) => {

  let message: string;

  if (winner) {
    message = `${winner} won!`;
  } else {
    if (isGameFinished) {
      message = 'nobody won';
    } else {
      message = `player ${currentPlayer === 'x' ? 'o' : 'x'}, your move`;
    }
  }

  return (
    <h2>{message}</h2>
  );
};
