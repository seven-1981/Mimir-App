import { GameCard } from "../../models/GameCard";
import { StyledResultTableItem } from "../styles";

export interface GameResultItemProps {
  card: GameCard;
}

export const GameResultItem = ({ card }: GameResultItemProps) => {
  return (
    <tr>
      <StyledResultTableItem>{card.front}</StyledResultTableItem>
      <StyledResultTableItem>{card.back}</StyledResultTableItem>
      <StyledResultTableItem>{card.answer}</StyledResultTableItem>
      <StyledResultTableItem>
        {card.accepted ? "\u2705" : "\u274C"}
      </StyledResultTableItem>
    </tr>
  );
};
