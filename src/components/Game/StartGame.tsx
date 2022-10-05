import { StyledButton, StyledLabel, StyledInputForm } from "../styles";
import { useContext } from "react";
import { fetchApi, fetchApiWithData } from "../../utils/fetchApi";
import {
  Game,
  INITIAL_VALUE_CARDCOUNT,
  initialGameState,
} from "../../models/Game";
import { GameContext } from "../../store/gameContext";

interface props {
  displayText: string;
}

export const StartGame = ({ displayText }: props) => {
  const { cardCount, dispatch } = useContext(GameContext);

  const startOnClick = async () => {
    if (cardCount === 0) {
      dispatch({ type: "clear-game" });
      await fetchApi("/api/game", "DELETE");
    }
    const game: Game = initialGameState;
    dispatch({ type: "set-cardCount", value: game.cardCount - 1 });

    await fetchApiWithData<Game>("/api/game", "POST", game).then((value) => {
      console.log("Post Game Status: " + value);
    });
  };

  return (
    <div>
      <StyledInputForm>
        <StyledButton onClick={startOnClick}>Start new Game</StyledButton>
      </StyledInputForm>
      <StyledInputForm>
        <StyledLabel>{displayText}</StyledLabel>
      </StyledInputForm>
    </div>
  );
};
