import { StyledButton, StyledLabel } from "../styles";

export interface StartGameProps {
  onClickStartButton: () => void;
}

export const StartGame = (props: StartGameProps) => {
  return (
    <div>
      <StyledButton onClick={props.onClickStartButton}>
        Start New Game
      </StyledButton>
      <StyledLabel>No game running</StyledLabel>
    </div>
  );
};
