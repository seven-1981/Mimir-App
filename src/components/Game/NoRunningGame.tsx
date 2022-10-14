import {
  StyledButton,
  StyledGameResult,
  StyledLabel,
  StyledNoGame,
} from "../styles";
import { GameResultTable } from "./GameResultTable";
import { emptyGame, Game } from "../../models/Game";
import { fetchApiGetGame } from "../../utils/fetchApiGet";
import { fetchApi, fetchApiWithData } from "../../utils/fetchApi";
import { useContext } from "react";
import { AppContext } from "../../store/context";

export const NoRunningGame = () => {
  const { game, dispatch } = useContext(AppContext);

  const gameFinished = game.solved.length === game.cardCount;

  const onClickStartButton = async () => {
    const { success: successGet } = await fetchApiGetGame("/api/game");
    if (successGet) {
      const successDelete = await fetchApi("/api/game", "DELETE");
      if (!successDelete) {
        return;
      }
    }
    const { success: successPost, data: game } = await fetchApiWithData<
      Game,
      Game
    >("/api/game", "POST", emptyGame);
    if (!successPost || !game) {
      return;
    }
    dispatch({ type: "update-game", game: game });
  };

  if (gameFinished) {
    return (
      <StyledGameResult>
        <StyledButton onClick={() => onClickStartButton()}>
          Start New Game
        </StyledButton>
        <GameResultTable solved={game.solved} />
      </StyledGameResult>
    );
  } else {
    return (
      <StyledNoGame>
        <StyledButton onClick={() => onClickStartButton()}>
          Start New Game
        </StyledButton>
        <StyledLabel>No game running</StyledLabel>
      </StyledNoGame>
    );
  }
};
