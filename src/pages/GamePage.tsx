import { RunningGame } from "../components/Game/RunningGame";
import { NoRunningGame } from "../components/Game/NoRunningGame";
import { GameResult } from "../components/Game/GameResult";
import { useContext } from "react";
import { AppContext } from "../store/context";
import { fetchApiGetGame } from "../utils/fetchApiGet";
import { fetchApi, fetchApiWithData } from "../utils/fetchApi";
import { emptyGame, Game } from "../models/Game";

export const GamePage = () => {
  const { game, dispatch } = useContext(AppContext);

  const gameProgress = game.solved.length;
  const gameCardCount = game.cardCount;

  const onClickStartButton = async () => {
    const { success: successGet } = await fetchApiGetGame("/api/game");
    if (successGet) {
      const successDelete = await fetchApi("/api/game", "DELETE");
      if (!successDelete) {
        return;
      }
    }
    const { success: successPost, data: game } = await fetchApiWithData<
      Game,
      Game
    >("/api/game", "POST", emptyGame);
    if (!successPost || !game) {
      return;
    }
    dispatch({ type: "update-game", game: game });
  };

  if (gameCardCount === emptyGame.cardCount) {
    return <NoRunningGame onClickStartButton={() => onClickStartButton()} />;
  } else if (gameProgress === gameCardCount) {
    return <GameResult onClickStartButton={() => onClickStartButton()} />;
  } else {
    return <RunningGame />;
  }
};
