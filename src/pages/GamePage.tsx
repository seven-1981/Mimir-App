import { RunningGame } from "../components/Game/RunningGame";
import { NoRunningGame } from "../components/Game/NoRunningGame";
import { GameResult } from "../components/Game/GameResult";
import { useContext } from "react";
import { AppContext } from "../store/context";
import { fetchApiGetGame } from "../utils/fetchApiGet";
import { fetchApi } from "../utils/fetchApi";

export const GamePage = () => {
  const { gameProgress, gameCardCount, dispatch } = useContext(AppContext);

  const onClickStartButton = async () => {
    const { success } = await fetchApiGetGame("/api/game");
    if (success) {
      const successDelete = await fetchApi("/api/game", "DELETE");
      if (!successDelete) {
        return;
      }
    }
    const successPost = await fetchApi("/api/game", "POST");
    if (!successPost) {
      return;
    }
    dispatch({ type: "update-gameProgress", gameProgress: 0 });
  };

  if (gameProgress === -1) {
    return <NoRunningGame onClickStartButton={() => onClickStartButton()} />;
  } else if (gameProgress === gameCardCount) {
    return <GameResult onClickStartButton={() => onClickStartButton()} />;
  } else {
    return <RunningGame />;
  }
};
