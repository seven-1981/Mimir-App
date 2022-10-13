import { GameCard } from "../../models/GameCard";
import { useEffect, useState } from "react";
import { fetchApiGetGame } from "../../utils/fetchApiGet";
import { GameResultTable } from "./GameResultTable";
import { StyledButton, StyledGameResult } from "../styles";

export interface GameResultProps {
  onClickStartButton: () => void;
}
export const GameResult = (props: GameResultProps) => {
  const [fetched, setFetched] = useState(false);
  const [solvedCards, setSolvedCards] = useState<GameCard[]>([]);

  useEffect(() => {
    const fetchGameCards = async (): Promise<GameCard[]> => {
      const { game, success } = await fetchApiGetGame("/api/game");
      if (!success) {
        return [];
      }
      return game.solved;
    };
    fetchGameCards().then((cards) => {
      setSolvedCards(cards);
      setFetched(true);
    });
  }, [fetched]);

  if (solvedCards.length !== 0) {
    return (
      <StyledGameResult>
        <StyledButton onClick={props.onClickStartButton}>
          Start New Game
        </StyledButton>
        <GameResultTable solved={solvedCards} />
      </StyledGameResult>
    );
  } else {
    return null;
  }
};
