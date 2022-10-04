import {
  INITIAL_VALUE_CARDCOUNT,
  NUMBER_OF_CARDS,
  runningGame,
} from "../models/Game";
import { GameAction } from "../models/GameAction";

export function gameReducer(
  game: runningGame,
  action: GameAction
): runningGame {
  switch (action.type) {
    case "set-cardCount":
      return {
        ...game,
        cardCount: action.value,
      };
    case "clear-game":
      return {
        ...game,
        front: "",
        cardCount: INITIAL_VALUE_CARDCOUNT,
        solved: [],
      };
    default:
      return game;
  }
}
