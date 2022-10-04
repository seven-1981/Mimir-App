import { RunningGame } from "../components/Game/RunningGame";
import { StartGame } from "../components/Game/StartGame";
import { GameResult } from "../components/Game/GameResult";
import { GameContext } from "../store/gameContext";
import { useContext } from "react";
import { INITIAL_VALUE_CARDCOUNT } from "../models/Game";

export const GamePage = () => {
  const { cardCount } = useContext(GameContext);

  if (cardCount === INITIAL_VALUE_CARDCOUNT) {
    return (
      <div>
        <StartGame displayText={"No game running"} />
      </div>
    );
  } else if (cardCount === 0) {
    return (
      <div>
        <StartGame displayText={"Solved x out of y"} />
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
