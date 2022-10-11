import { GameCard } from "../../models/GameCard";
import { useEffect, useState } from "react";
import { fetchApiGetGame } from "../../utils/fetchApiGet";
import { ResultsTable } from "./ResultTable";
import { StyledButton } from "../styles";

export interface GameResultProps {
  onClickStartButton: () => void;
}
export const GameResult = (props: GameResultProps) => {
  const [fetched, setFetched] = useState(false);
  const [solvedCards, setSolvedCards] = useState<GameCard[]>([]);

  useEffect(() => {
    fetchGameCards().then((cards) => {
      setSolvedCards(cards);
      setFetched(true);
    });
  }, [fetched]);

  const fetchGameCards = async (): Promise<GameCard[]> => {
    const { game, success } = await fetchApiGetGame("/api/game");
    if (!success) {
      return [];
    }
    return game.solved;
  };

  if (solvedCards.length !== 0) {
    return (
      <div>
        <StyledButton onClick={props.onClickStartButton}>
          Start New Game
        </StyledButton>
        <ResultsTable solved={solvedCards} />
      </div>
    );
  } else {
    return null;
  }
};
