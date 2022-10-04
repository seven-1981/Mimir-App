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
    case "set-front":
      return {
        ...game,
        front: action.front,
      };
    case "set-cardCount":
      return {
        ...game,
        cardCount: action.value,
      };
    case "set-solved":
      return {
        ...game,
        solved: action.solved,
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
