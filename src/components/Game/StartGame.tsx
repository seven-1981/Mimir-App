import { StyledButton, StyledLabel, StyledInputForm } from "../styles";
import { useContext } from "react";
import { fetchApiWithData } from "../../utils/fetchApi";
import { Game, initialGameState, NUMBER_OF_CARDS } from "../../models/Game";
import { GameContext } from "../../store/gameContext";

export const StartGame = () => {
  const { dispatch } = useContext(GameContext);

  const startOnClick = async () => {
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
        <StyledLabel>No game running </StyledLabel>
      </StyledInputForm>
    </div>
  );
};
