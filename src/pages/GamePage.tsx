import { RunningGame } from "../components/Game/RunningGame";
import { StartGame } from "../components/Game/StartGame";
import { GameResult } from "../components/Game/GameResult";
import { GameContext } from "../store/gameContext";
import { useContext } from "react";
import { INITIAL_VALUE_CARDCOUNT, NUMBER_OF_CARDS } from "../models/Game";

export const GamePage = () => {
  const { cardCount, solved } = useContext(GameContext);

  const getText = (): string => {
    let correctAnswers = 0;
    for (let i = 0; i < NUMBER_OF_CARDS; i++) {
      if (solved[i].accepted === true) correctAnswers++;
    }
    return "Solved " + correctAnswers + " out of " + NUMBER_OF_CARDS;
  };

  if (cardCount === INITIAL_VALUE_CARDCOUNT) {
    return (
      <div>
        <StartGame displayText={"No game running"} />
      </div>
    );
  } else if (cardCount === 0) {
    return (
      <div>
        <StartGame displayText={getText()} />
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
