import { GameCard } from "../../models/GameCard";

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
            <td> Front </td>
            <td> Back </td>
            <td> Your Answer </td>
            <td> Accepted </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{props.solved[0].front}</td>
            <td>{props.solved[0].back}</td>
            <td>{props.solved[0].answer}</td>
            <td>{props.solved[0].accepted ? "True" : "False"}</td>
          </tr>
          <tr>
            <td>{props.solved[1].front}</td>
            <td>{props.solved[1].back}</td>
            <td>{props.solved[1].answer}</td>
            <td>{props.solved[1].accepted ? "True" : "False"}</td>
          </tr>
          <tr>
            <td>{props.solved[2].front}</td>
            <td>{props.solved[2].back}</td>
            <td>{props.solved[2].answer}</td>
            <td>{props.solved[2].accepted ? "True" : "False"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
