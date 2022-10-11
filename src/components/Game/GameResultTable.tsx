import { GameCard } from "../../models/GameCard";
import { GameResultItem } from "./GameResultItem";

export interface ResultsTableProps {
  solved: GameCard[];
}

export const ResultsTable = (props: ResultsTableProps) => {
  const getText = () => {
    let correctAnswers = 0;
    for (const card of props.solved) {
      if (card.accepted) {
        correctAnswers++;
      }
    }
    return "Solved " + correctAnswers + " out of " + props.solved.length;
  };

  return (
    <div>
      <p>{getText()}</p>
      <table>
        <thead>
          <tr>
            <td>Front </td>
            <td>Back</td>
            <td>Your Answer</td>
            <td>Accepted</td>
          </tr>
        </thead>
        <tbody>
          {props.solved &&
            props.solved.map((card) => {
              return <GameResultItem card={card} />;
            })}
        </tbody>
      </table>
    </div>
  );
};
