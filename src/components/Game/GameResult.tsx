import { useContext, useEffect } from "react";
import { GameContext } from "../../store/gameContext";
import { StyledLabel } from "../styles";
import { fetchApiGetGame } from "../../utils/fetchApiGetDeleteGame";

export const GameResult = () => {
  useEffect(() => {
    const getFinishedGame = async () => {
      const { game, success } = await fetchApiGetGame("/api/game");
      if (!success) {
        console.log("Failed to get finished game!");
      }
    };
    getFinishedGame();
  }, []);

  return (
    <div>
      <div>
        <StyledLabel> Front </StyledLabel> <StyledLabel> Back </StyledLabel>
        <StyledLabel> Your Answer </StyledLabel>{" "}
        <StyledLabel> Accepted </StyledLabel>
      </div>
      <div>
        <StyledLabel> game </StyledLabel> <StyledLabel> 2 </StyledLabel>
        <StyledLabel> 3 </StyledLabel> <StyledLabel> 4 </StyledLabel>
      </div>
      <div>
        <StyledLabel> 5 </StyledLabel> <StyledLabel> 6 </StyledLabel>
        <StyledLabel> 7 </StyledLabel> <StyledLabel> 8 </StyledLabel>
      </div>
      <div>
        <StyledLabel> 9 </StyledLabel> <StyledLabel> 10 </StyledLabel>
        <StyledLabel> 11 </StyledLabel> <StyledLabel> 12 </StyledLabel>
      </div>
    </div>
  );
};
