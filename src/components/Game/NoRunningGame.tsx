import { StyledButton, StyledInputForm, StyledLabel } from "../styles";

export interface NoRunningGameProps {
  onClickStartButton: () => void;
}

export const NoRunningGame = (props: NoRunningGameProps) => {
  return (
    <StyledInputForm>
      <StyledButton onClick={props.onClickStartButton}>
        Start New Game
      </StyledButton>
      <StyledLabel>No game running</StyledLabel>
    </StyledInputForm>
  );
};
