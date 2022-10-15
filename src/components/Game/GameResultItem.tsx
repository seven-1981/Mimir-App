import { GameCard } from "../../models/GameCard";
import { StyledResultTableItem } from "../styles";

export interface GameResultItemProps {
  card: GameCard;
}

export const GameResultItem = ({ card }: GameResultItemProps) => {
  const IMG_URL = card.accepted ? "tick.png" : "cross.png";
  const IMG_URL_alt = card.accepted ? "\u2705" : "\u274C";
  return (
    <tr>
      <StyledResultTableItem>{card.front}</StyledResultTableItem>
      <StyledResultTableItem>{card.back}</StyledResultTableItem>
      <StyledResultTableItem>{card.answer}</StyledResultTableItem>
      <StyledResultTableItem>
        <img src={IMG_URL} alt={IMG_URL_alt} />
      </StyledResultTableItem>
    </tr>
  );
};
