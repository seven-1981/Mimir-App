import { useContext, useEffect, useState } from "react";
import {
  fetchApiGetGame,
  fetchApiPatchAnswer,
} from "../../utils/fetchApiGetDeleteGame";
import { fetchApi } from "../../utils/fetchApi";
import { GameAnswer } from "../../models/GameAnswer";
import { emptyGame, Game, NO_GAME_RUNNING } from "../../models/Game";
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
  const [game, setGame] = useState<Game>(emptyGame);

  useEffect(() => {
    const getStartedGame = async () => {
      const { game, success } = await fetchApiGetGame("/api/game");
      if (success) {
        setGame(game);
      }
    };
    getStartedGame();
  }, [cardCount]);

  const onClickSubmitButton = async () => {
    if (inputText === "") {
      return;
    }
    await updateGameStatus();
    const newCardCount = cardCount - 1;
    dispatch({ type: "update-cardCount", cardCount: newCardCount });
  };

  const updateGameStatus = async () => {
    const currentAnswer: GameAnswer = {
      answer: inputText,
    };
    const { game, success } = await fetchApiPatchAnswer(
      "/api/game",
      currentAnswer
    );
    if (!success) {
      return;
    }
    setGame(game);
    setInputText("");
  };

  const onClickDeleteButton = async () => {
    const success = await fetchApi("/api/game", "DELETE");
    if (!success) {
      return;
    }
    dispatch({ type: "update-cardCount", cardCount: NO_GAME_RUNNING });
  };

  // ToDo: Styling of front of card
  return (
    <div>
      <StyledInputForm>
        <StyledLabel>
          {" "}
          Progress:{" "}
          {Math.round(
            (100 * (game.cardCount - cardCount)) / game.cardCount
          )}{" "}
        </StyledLabel>
        <StyledButton onClick={() => onClickDeleteButton()}>
          Delete Game
        </StyledButton>
      </StyledInputForm>
      <StyledInputForm>
        <StyledLabel> {game.front} </StyledLabel>
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
