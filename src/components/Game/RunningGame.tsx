import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GameContext } from "../../store/gameContext";
import {
  fetchApiGetGame,
  fetchApiPatchAnswer,
} from "../../utils/fetchApiGetDeleteGame";
import { fetchApi } from "../../utils/fetchApi";
import { GameAnswer } from "../../models/GameAnswer";
import { initialGameState, NUMBER_OF_CARDS } from "../../models/Game";
import { Game } from "../../models/Game";
import {
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledInputForm,
} from "../styles";

export const RunningGame = () => {
  const { cardCount, dispatch } = useContext(GameContext);
  const [progress, setProgress] = useState<number>(0);
  const [inputText, setInputText] = useState("");
  const [gameState, setGameState] = useState<Game>(initialGameState);

  useEffect(() => {
    const getStartedGame = async () => {
      const { game, success } = await fetchApiGetGame("/api/game");
      if (success) {
        setGameState(game);
      }
    };
    getStartedGame();
  }, []);

  const submitOnClick = async () => {
    await updateGameStatus();
    console.log("CardCount submitOnClick: " + cardCount);
    dispatch({ type: "set-cardCount", value: cardCount - 1 });
    setProgress(
      Math.round((100 * (NUMBER_OF_CARDS - cardCount)) / NUMBER_OF_CARDS)
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
      setGameState(game);
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
        <StyledLabel> {gameState.front} </StyledLabel>
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