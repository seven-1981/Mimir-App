import { StyledButton, StyledLabel, StyledInputForm } from "../styles";
import { useContext } from "react";
import { GameContext } from "../../store/gameContext";
import { NUMBER_OF_CARDS } from "../../models/Game";

export const StartGame = () => {
  const { dispatch } = useContext(GameContext);

  const startOnClick = async () => {
    dispatch({ type: "set-cardCount", value: NUMBER_OF_CARDS - 1 });
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
