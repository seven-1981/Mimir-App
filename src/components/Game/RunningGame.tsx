import { useContext, useEffect, useState } from "react";
import { fetchApiGetGame } from "../../utils/fetchApiGet";
import { fetchApiWithData } from "../../utils/fetchApi";
import { fetchApi } from "../../utils/fetchApi";
import { GameAnswer } from "../../models/GameAnswer";
import { Game } from "../../models/Game";
import {
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledInputForm,
  StyledCardFront,
} from "../styles";
import { AppContext } from "../../store/context";

export const RunningGame = () => {
  const { gameProgress, gameCardCount, dispatch } = useContext(AppContext);
  const [inputText, setInputText] = useState("");
  const [frontText, setFrontText] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchGame = async () => {
      const { game, success } = await fetchApiGetGame("/api/game");
      if (success) {
        setFrontText(game.front);
        setProgressValue(gameProgress);
      }
    };
    fetchGame();
  }, []);

  const setProgressValue = (progress: number) => {
    setProgress(Math.round((100 * progress) / gameCardCount));
  };

  const onClickSubmitButton = async () => {
    if (inputText === "") {
      return;
    }
    await updateGameStatus();
  };

  const updateGameStatus = async () => {
    const currentAnswer: GameAnswer = {
      answer: inputText,
    };
    const { data, success } = await fetchApiWithData<GameAnswer, Game>(
      "/api/game",
      "PATCH",
      currentAnswer
    );
    if (!success || !data) {
      return;
    }
    const newGameProgress = gameProgress + 1;
    dispatch({ type: "update-gameProgress", gameProgress: newGameProgress });
    setFrontText(data.front);
    setInputText("");
    setProgressValue(newGameProgress);
  };

  const onClickDeleteButton = async () => {
    const success = await fetchApi("/api/game", "DELETE");
    if (!success) {
      return;
    }
    dispatch({ type: "update-gameProgress", gameProgress: -1 });
  };

  return (
    <div>
      <StyledInputForm>
        <StyledLabel>Progress: {progress}</StyledLabel>
        <StyledButton onClick={() => onClickDeleteButton()}>
          Delete Game
        </StyledButton>
      </StyledInputForm>
      <StyledInputForm>
        <StyledCardFront> {frontText} </StyledCardFront>
      </StyledInputForm>
      <StyledInputForm>
        <StyledInput
          type="text"
          onChange={(event) => setInputText(event.target.value)}
          value={inputText}
          placeholder="Answer"
        />
        <StyledButton onClick={() => onClickSubmitButton()}>
          Submit
        </StyledButton>
      </StyledInputForm>
    </div>
  );
};
