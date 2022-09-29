import { StyledButton, StyledLabel, StyledInputForm } from "../styles";
import { fetchApi } from "../../utils/fetchApi";
import { useContext } from "react";
import { AppContext } from "../../store/context";

export const StartGame = () => {
  const { cardCount, dispatch } = useContext(AppContext);

  const onClickStartButton = async () => {
    if (cardCount === 0) {
      const success = fetchApi("/api/game", "POST");
      if (!success) {
        return;
      }
      dispatch({ type: "update-cardCount", cardCount: 1 });
    }
  };

  return (
    <div>
      <StyledInputForm>
        <StyledButton onClick={() => onClickStartButton()}>
          Start new Game
        </StyledButton>
      </StyledInputForm>
      <StyledInputForm>
        <StyledLabel>No game running </StyledLabel>
      </StyledInputForm>
    </div>
  );
};
