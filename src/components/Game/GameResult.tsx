import { useContext } from "react";
import { GameResultTable } from "./GameResultTable";
import { StyledButton, StyledGameResult } from "../styles";
import { AppContext } from "../../store/context";

export interface GameResultProps {
  onClickStartButton: () => void;
}
export const GameResult = (props: GameResultProps) => {
  const { game } = useContext(AppContext);

  return (
    <StyledGameResult>
      <StyledButton onClick={props.onClickStartButton}>
        Start New Game
      </StyledButton>
      <GameResultTable solved={game.solved} />
    </StyledGameResult>
  );
};
