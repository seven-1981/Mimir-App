import { GameCard } from "../../models/GameCard";

export interface GameResultItemProps {
  card: GameCard;
}

export const GameResultItem = ({ card }: GameResultItemProps) => {
  return (
    <tr>
      <td>{card.front}</td>
      <td>{card.back}</td>
      <td>{card.answer}</td>
      <td>{card.accepted ? "\u2705" : "\u274C"}</td>
    </tr>
  );
};
