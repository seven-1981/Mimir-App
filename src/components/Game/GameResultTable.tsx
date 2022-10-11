import { GameCard } from "../../models/GameCard";
import { CardListItem } from "../Card/CardListItem";
import { GameResultItem } from "./GameResultItem";
import { StyledLabel } from "../styles";

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
            <td>
              <StyledLabel> Front </StyledLabel>
            </td>
            <td>
              <StyledLabel> Back </StyledLabel>
            </td>
            <td>
              <StyledLabel> Your Answer </StyledLabel>
            </td>
            <td>
              <StyledLabel> Accepted </StyledLabel>
            </td>
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
