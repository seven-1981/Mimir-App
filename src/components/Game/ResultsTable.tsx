import { Game } from "../../models/Game";

export interface ResultsTableProps {
  game: Game;
}

export const ResultsTable = (props: ResultsTableProps) => {
  const game = props.game;

  return (
    <div>
      <div>
        <label> Front </label> <label> Back </label>
        <label> Your Answer </label> <label> Accepted </label>
      </div>
      <div>
        <label> {game.solved[0].front} </label>{" "}
        <label> {game.solved[0].back} </label>
        <label> {game.solved[0].answer} </label>{" "}
        <label> {game.solved[0].accepted} </label>
      </div>
      <div>
        <label> {game.solved[1].front} </label>{" "}
        <label> {game.solved[1].back} </label>
        <label> {game.solved[1].answer} </label>{" "}
        <label> {game.solved[1].accepted} </label>
      </div>
      <div>
        <label> {game.solved[2].front} </label>{" "}
        <label> {game.solved[2].back} </label>
        <label> {game.solved[2].answer} </label>{" "}
        <label> {game.solved[2].accepted} </label>
      </div>
    </div>
  );
};
