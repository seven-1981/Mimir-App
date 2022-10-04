import { StyledButton, StyledLabel, StyledInputForm } from "../styles";
import { useContext } from "react";
import { fetchApiWithData } from "../../utils/fetchApi";
import { Game, initialGameState } from "../../models/Game";
import { GameContext } from "../../store/gameContext";

interface props {
  displayText: string;
}

export const StartGame = ({ displayText }: props) => {
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
        <StyledLabel>{displayText}</StyledLabel>
      </StyledInputForm>
    </div>
  );
};
