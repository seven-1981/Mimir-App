import { RunningGame } from "../components/Game/RunningGame";
import { StartGame } from "../components/Game/StartGame";
import { GameResult } from "../components/Game/GameResult";
import { useContext, useEffect } from "react";
import { AppContext } from "../store/context";
import { fetchApiGetGame } from "../utils/fetchApiGetDeleteGame";
import { fetchApi } from "../utils/fetchApi";
import { NO_GAME_RUNNING } from "../models/Game";

export const GamePage = () => {
  const { cardCount, dispatch } = useContext(AppContext);

  useEffect(() => {
    const fetchGame = async () => {
      const { game, success } = await fetchApiGetGame("/api/game");
      const cardCountToSet = success
        ? game.cardCount - game.solved.length
        : NO_GAME_RUNNING;
      dispatch({ type: "update-cardCount", cardCount: cardCountToSet });
    };
    fetchGame();
  }, [cardCount]);

  const onClickStartButton = async () => {
    const { game, success } = await fetchApiGetGame("/api/game");
    if (success) {
      const successDelete = await fetchApi("/api/game", "DELETE");
      if (!successDelete) {
        return;
      }
    }
    const successPost = fetchApi("/api/game", "POST");
    if (!successPost) {
      return;
    }
    dispatch({ type: "update-cardCount", cardCount: game.cardCount });
  };

  if (cardCount === NO_GAME_RUNNING) {
    return <StartGame onClickStartButton={() => onClickStartButton()} />;
  } else if (cardCount === 0) {
    return <GameResult onClickStartButton={() => onClickStartButton()} />;
  } else {
    return <RunningGame />;
  }
};
