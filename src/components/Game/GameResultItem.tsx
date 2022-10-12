import { GameCard } from "../../models/GameCard";
import { StyledGameResultTableItem } from "../styles";

export interface GameResultItemProps {
  card: GameCard;
}

export const GameResultItem = ({ card }: GameResultItemProps) => {
  return (
    <tr>
      <StyledGameResultTableItem>{card.front}</StyledGameResultTableItem>
      <StyledGameResultTableItem>{card.back}</StyledGameResultTableItem>
      <StyledGameResultTableItem>{card.answer}</StyledGameResultTableItem>
      <StyledGameResultTableItem>
        {card.accepted ? "\u2705" : "\u274C"}
      </StyledGameResultTableItem>
    </tr>
  );
};
