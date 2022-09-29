import { StyledButton, StyledLabel, StyledInputForm } from "../styles";
import { useContext } from "react";
import { AppContext } from "../../store/context";
import { fetchApiPostPatchGame } from "../../utils/fetchApiPostPatchGame";
import { Game, NUMBER_OF_CARDS } from "../../models/Game";
import { GameCard } from "../../models/GameCard";
import { GameContext } from "../../store/gameContext";
import { fetchApiPost } from "../../utils/fetchApiPost";

export const StartGame = () => {
  const { cards } = useContext(AppContext);
  const { dispatch } = useContext(GameContext);

  const startOnClick = async () => {
    const gameCards = chooseCards();
    const game: Game = {
      front: gameCards[0].front,
      cardCount: 1,
      solved: gameCards,
    };
    dispatch({ type: "set-cardCount", value: game.cardCount });
    console.log("Start Game front: " + game.front);
    console.log("Start Game cardCount: " + game.cardCount);
    console.log("Start Game solved 0: " + game.solved[0].front);
    console.log("Start Game solved 1: " + game.solved[1].front);
    console.log("Start Game solved 2: " + game.solved[2].front);

    await fetchApiPost("/api/game", game).then((value) => {
      console.log("Post Game Status: " + value);
    });
  };

  const chooseCards = (): GameCard[] => {
    const gameCards: GameCard[] = [];
    // ToDo: Random index within number of cards
    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
      const gameCard: GameCard = {
        id: cards[i].id,
        front: cards[i].front,
        back: cards[i].back,
        answer: "",
        accepted: false,
      };
      gameCards[i] = gameCard;
    }
    return gameCards;
  };

  return (
    <div>
      <StyledInputForm>
        <StyledButton onClick={startOnClick}>Start new Game</StyledButton>
      </StyledInputForm>
      <StyledInputForm>
        <StyledLabel>No game running </StyledLabel>
      </StyledInputForm>
    </div>
  );
};
