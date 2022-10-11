import { StyledButton, StyledLabel } from "../styles";

export interface NoRunningGameProps {
  onClickStartButton: () => void;
}

export const NoRunningGame = (props: NoRunningGameProps) => {
  return (
    <div>
      <StyledButton onClick={props.onClickStartButton}>
        Start New Game
      </StyledButton>
      <StyledLabel>No game running</StyledLabel>
    </div>
  );
};
