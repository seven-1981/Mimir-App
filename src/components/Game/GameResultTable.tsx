import { GameCard } from "../../models/GameCard";
import { GameResultItem } from "./GameResultItem";
import { StyledResultTable, StyledResultTableItem } from "../styles";

export interface GameResultTableProps {
  solved: GameCard[];
}

export const GameResultTable = (props: GameResultTableProps) => {
  const getCorrectAnswersText = () => {
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
      <p>{getCorrectAnswersText()}</p>
      <StyledResultTable>
        <thead>
          <tr>
            <StyledResultTableItem>Front </StyledResultTableItem>
            <StyledResultTableItem>Back</StyledResultTableItem>
            <StyledResultTableItem>Your Answer</StyledResultTableItem>
            <StyledResultTableItem>Accepted</StyledResultTableItem>
          </tr>
        </thead>
        <tbody>
          {props.solved &&
            props.solved.map((card) => {
              return <GameResultItem card={card} key={card.id} />;
            })}
        </tbody>
      </StyledResultTable>
    </div>
  );
};
