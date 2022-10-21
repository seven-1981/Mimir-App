import { useContext, useState } from "react";
import { fetchApiWithData } from "../../utils/fetchApi";
import { fetchApi } from "../../utils/fetchApi";
import { GameAnswer } from "../../models/GameAnswer";
import { emptyGame, Game } from "../../models/Game";
import {
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledForm,
  StyledCardFront,
  StyledRunningGame,
} from "../Styles/styles";
import { AppContext } from "../../store/context";
import { URL_API_GAME } from "../../pages/URLs";

export const RunningGame = () => {
  const { game, dispatch } = useContext(AppContext);
  const [inputText, setInputText] = useState("");

  const getProgressValue = (progress: number) => {
    if (game.cardCount > 0) {
      return Math.round((100 * progress) / game.cardCount);
    } else {
      return 0;
    }
  };

  const onClickSubmitButton = async () => {
    if (inputText.trim() === "") {
      return;
    }
    await updateGameStatus();
  };

  const updateGameStatus = async () => {
    const currentAnswer: GameAnswer = {
      answer: inputText.trim(),
    };
    const { data: game, success } = await fetchApiWithData<GameAnswer, Game>(
      URL_API_GAME,
      "PATCH",
      currentAnswer
    );
    if (!success || !game) {
      return;
    }
    setInputText("");
    dispatch({ type: "update-game", game: game });
  };

  const onClickDeleteButton = async () => {
    const success = await fetchApi(URL_API_GAME, "DELETE");
    if (!success) {
      return;
    }
    dispatch({ type: "update-game", game: emptyGame });
  };

  return (
    <StyledRunningGame>
      <StyledForm>
        <StyledLabel>
          Progress: {getProgressValue(game.solved.length)}
        </StyledLabel>
        <StyledButton onClick={() => onClickDeleteButton()}>
          Delete Game
        </StyledButton>
      </StyledForm>
      <StyledCardFront> {game.front} </StyledCardFront>
      <StyledForm>
        <StyledInput
          type="text"
          onChange={(event) => setInputText(event.target.value)}
          value={inputText}
          placeholder="Answer"
        />
        <StyledButton onClick={() => onClickSubmitButton()}>
          Submit
        </StyledButton>
      </StyledForm>
    </StyledRunningGame>
  );
};
