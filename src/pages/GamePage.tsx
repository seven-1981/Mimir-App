import { RunningGame } from "../components/Game/RunningGame";
import { StartGame } from "../components/Game/StartGame";
import { GameResult } from "../components/Game/GameResult";
import { useContext } from "react";
import { NUMBER_OF_CARDS } from "../models/Game";
import { AppContext } from "../store/context";

export const GamePage = () => {
  const { cardCount } = useContext(AppContext);

  if (cardCount === 0) {
    return (
      <div>
        <StartGame />
      </div>
    );
  } else if (cardCount === NUMBER_OF_CARDS + 1) {
    return (
      <div>
        <GameResult />
      </div>
    );
  } else {
    return (
      <div>
        <RunningGame />
      </div>
    );
  }
};
