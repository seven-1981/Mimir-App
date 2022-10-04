import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GameContext } from "../../store/gameContext";
import {
  fetchApiGetGame,
  fetchApiPatchAnswer,
} from "../../utils/fetchApiGetDeleteGame";
import { fetchApi } from "../../utils/fetchApi";
import { GameAnswer } from "../../models/GameAnswer";
import { NUMBER_OF_CARDS } from "../../models/Game";
import {
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledInputForm,
} from "../styles";

export const RunningGame = () => {
  const { front, cardCount, dispatch } = useContext(GameContext);
  const [progress, setProgress] = useState<number>(0);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const getStartedGame = async () => {
      const { game, success } = await fetchApiGetGame("/api/game");
      if (success) {
        dispatch({ type: "set-front", front: game.front });
        dispatch({ type: "set-solved", solved: game.solved });
      }
    };
    getStartedGame();
  }, []);

  const submitOnClick = async () => {
    await updateGameStatus();
    const newCardCount = cardCount - 1;
    dispatch({ type: "set-cardCount", value: newCardCount });
    setProgress(
      Math.round((100 * (NUMBER_OF_CARDS - newCardCount)) / NUMBER_OF_CARDS)
    );
  };

  const updateGameStatus = async () => {
    const currentAnswer: GameAnswer = {
      answer: inputText,
    };
    const { game, success } = await fetchApiPatchAnswer(
      "/api/game",
      currentAnswer
    );
    if (success) {
      dispatch({ type: "set-front", front: game.front });
      dispatch({ type: "set-solved", solved: game.solved });
    }
    setInputText("");
  };

  const deleteOnClick = async () => {
    dispatch({ type: "clear-game" });
    setProgress(0);
    await fetchApi("/api/game", "DELETE");
  };

  const inputFieldChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  // ToDo: Styling of front of card
  return (
    <div>
      <StyledInputForm>
        <StyledLabel> Progress: {progress} </StyledLabel>
        <StyledButton onClick={deleteOnClick}>Delete Game</StyledButton>
      </StyledInputForm>
      <StyledInputForm>
        <StyledLabel> {front} </StyledLabel>
      </StyledInputForm>
      <StyledInputForm>
        <StyledInput
          type="text"
          onChange={inputFieldChangeEvent}
          value={inputText}
          placeholder="Answer"
        />
        <StyledButton onClick={submitOnClick}>Submit</StyledButton>
      </StyledInputForm>
    </div>
  );
};
