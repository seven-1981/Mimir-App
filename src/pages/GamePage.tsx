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
    console.log("START ONCLICK");
    dispatch({ type: "update-cardCount", cardCount: NO_GAME_RUNNING - 1 });
  };

  if (cardCount === NO_GAME_RUNNING) {
    return <StartGame onClickStartButton={() => onClickStartButton()} />;
  } else if (cardCount === 0) {
    return <GameResult onClickStartButton={() => onClickStartButton()} />;
  } else {
    return <RunningGame />;
  }
};
