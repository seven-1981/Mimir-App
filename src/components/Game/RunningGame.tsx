import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GameContext } from "../../store/gameContext";
import { initialGameState, NUMBER_OF_CARDS } from "../../models/Game";
import { fetchApiPostPatchGame } from "../../utils/fetchApiPostPatchGame";
import { fetchApiGetGame } from "../../utils/fetchApiGetDeleteGame";
import { Game } from "../../models/Game";
import {
  StyledInput,
  StyledButton,
  StyledLabel,
  StyledInputForm,
} from "../styles";

export const RunningGame = () => {
  const { dispatch } = useContext(GameContext);
  const [progress, setProgress] = useState<number>(0);
  const [inputText, setInputText] = useState("");
  const [game, setGame] = useState<Game>(initialGameState);

  useEffect(() => {
    const getStartedGame = async () => {
      const { game, success } = await fetchApiGetGame("/api/game");
      if (success) {
        console.log("Get Game success front: " + game.front);
        console.log("Get Game success cardCount: " + game.cardCount);
        console.log("Get Game success solved: " + game.solved[0].front);
        console.log("Get Game success solved: " + game.solved[1].front);
        console.log("Get Game success solved: " + game.solved[2].front);
        setGame(game);
      }
    };
    getStartedGame();
  }, []);

  const submitOnClick = async () => {
    await updateGameStatus();
    dispatch({ type: "set-cardCount", value: game.cardCount + 1 });
    setProgress(Math.round((100 * game.cardCount) / NUMBER_OF_CARDS));
  };

  const updateGameStatus = async () => {
    const gameToPost: Game = {
      front: game.front,
      cardCount: game.cardCount + 1,
      solved: game.solved,
    };

    const result = inputText === gameToPost.solved[game.cardCount - 1].back;
    gameToPost.solved[game.cardCount - 1].answer = inputText;
    gameToPost.solved[game.cardCount - 1].accepted = result;
    setGame(gameToPost);

    await fetchApiPostPatchGame("/api/game", gameToPost, false).then(
      (value) => {
        console.log("Patch Game Status: " + value);
      }
    );
    setInputText("");
  };

  const deleteOnClick = () => {
    dispatch({ type: "clear-game" });
    setProgress(0);
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
        <StyledLabel> {game.front} </StyledLabel>
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
