import { ChangeEvent, useContext, useEffect, useState } from "react";
import { Game } from "../../models/Game";
import {
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledInputForm,
} from "../styles";
import { AppContext } from "../../store/context";
import { fetchApiGetGame } from "../../utils/fetchApiGetCards";
import { fetchApi, fetchApiWithData } from "../../utils/fetchApi";
import { Answer } from "../../models/Answer";

export const RunningGame = () => {
  const { cardCount, dispatch } = useContext(AppContext);
  const [inputText, setInputText] = useState("");
  const [game, setGame] = useState<Game>({
    front: "",
    cardCount: 0,
    solved: [],
  });

  const index = cardCount - 1;
  const progress = (index / 3) * 100;

  useEffect(() => {
    fetchGame().then((game) => setGame(game));
  }, [cardCount]);

  const fetchGame = async (): Promise<Game> => {
    if (cardCount === 0) return { front: "", cardCount: 0, solved: [] };
    const { game, success } = await fetchApiGetGame("/api/game");
    if (!success) {
      return { front: "", cardCount: 0, solved: [] };
    }
    return game;
  };

  const onClickSubmitButton = async () => {
    const success = await fetchApiWithData<Answer>("/api/game", "PATCH", {
      answer: inputText,
    });
    if (success) {
      const newCardCount = cardCount + 1;
      console.log("New card count value is now " + newCardCount);
      dispatch({ type: "update-cardCount", cardCount: newCardCount });
      setInputText("");
    }
  };

  const deleteOnClick = async () => {
    const success = await fetchApi("/api/game", "DELETE");
    if (success) {
      dispatch({ type: "update-cardCount", cardCount: 0 });
    }
  };

  // ToDo: Styling of front of card
  return (
    <div>
      <StyledInputForm>
        <StyledLabel> Progress: {progress} </StyledLabel>
        <StyledButton onClick={deleteOnClick}>Delete Game</StyledButton>
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
