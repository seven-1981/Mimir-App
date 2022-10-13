import { useContext, useEffect, useState } from "react";
import { fetchApiGetGame } from "../../utils/fetchApiGet";
import { fetchApiWithData } from "../../utils/fetchApi";
import { fetchApi } from "../../utils/fetchApi";
import { GameAnswer } from "../../models/GameAnswer";
import { emptyGame, Game } from "../../models/Game";
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
  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    const fetchGame = async (): Promise<Game> => {
      const { game, success } = await fetchApiGetGame("/api/game");
      if (!success) {
        return emptyGame;
      }
      return game;
    };
    fetchGame().then((game) => {
      setFrontText(game.front);
      setProgressValue(gameProgress);
      setFetched(true);
    });
  }, [fetched]);

  const setProgressValue = (progress: number) => {
    if (gameCardCount > 0) {
      setProgress(Math.round((100 * progress) / gameCardCount));
    } else {
      setProgress(0);
    }
  };

  const onClickSubmitButton = async () => {
    if (inputText === "") {
      return;
    }
    await updateGameStatus();
  };

  const updateGameStatus = async () => {
    const currentAnswer: GameAnswer = {
      answer: inputText.trim(),
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
