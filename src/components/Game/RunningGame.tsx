import { useContext, useEffect, useState } from "react";
import { fetchApiGetGame } from "../../utils/fetchApiGet";
import { fetchApiWithData } from "../../utils/fetchApi";
import { fetchApi } from "../../utils/fetchApi";
import { GameAnswer } from "../../models/GameAnswer";
import { Game, NO_GAME_RUNNING } from "../../models/Game";
import {
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledInputForm,
} from "../styles";
import { AppContext } from "../../store/context";

export const RunningGame = () => {
  const { cardCount, dispatch } = useContext(AppContext);
  const [inputText, setInputText] = useState("");
  const [frontText, setFrontText] = useState("");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchGame = async () => {
      const { game, success } = await fetchApiGetGame("/api/game");
      if (success) {
        setFrontText(game.front);
        setProgress(
          Math.round((100 * (game.cardCount - cardCount)) / game.cardCount)
        );
      }
    };
    fetchGame();
  }, []);

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
    const newCardCount = cardCount - 1;
    dispatch({ type: "update-cardCount", cardCount: newCardCount });
    setFrontText(data.front);
    setInputText("");
    setProgress(
      Math.round((100 * (data.cardCount - newCardCount)) / data.cardCount)
    );
  };

  const onClickDeleteButton = async () => {
    const success = await fetchApi("/api/game", "DELETE");
    if (!success) {
      return;
    }
    dispatch({ type: "update-cardCount", cardCount: NO_GAME_RUNNING });
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
        <StyledLabel> {frontText} </StyledLabel>
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
