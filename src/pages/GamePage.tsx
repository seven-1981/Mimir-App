import { RunningGame } from "../components/Game/RunningGame";
import { NoRunningGame } from "../components/Game/NoRunningGame";
import { useContext } from "react";
import { AppContext } from "../store/context";
import { emptyGame } from "../models/Game";

export const GamePage = () => {
  const { game } = useContext(AppContext);

  const noRunningGame =
    game.cardCount === emptyGame.cardCount ||
    game.solved.length === game.cardCount;

  if (noRunningGame) {
    return <NoRunningGame />;
  } else {
    return <RunningGame />;
  }
};
