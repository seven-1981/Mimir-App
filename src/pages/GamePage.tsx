import { RunningGame } from "../components/Game/RunningGame";
import { StartGame } from "../components/Game/StartGame";
import { GameResult } from "../components/Game/GameResult";
import { GameContext } from "../store/gameContext";
import { useContext } from "react";
import { NUMBER_OF_CARDS } from "../models/Game";

export const GamePage = () => {
  const { cardCount } = useContext(GameContext);

  if (cardCount === NUMBER_OF_CARDS) {
    return (
      <div>
        <StartGame />
      </div>
    );
  } else if (cardCount === 0) {
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
