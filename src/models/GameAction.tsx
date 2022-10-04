import { GameCard } from "./GameCard";

type SetCardCount = {
  type: "set-cardCount";
  value: number;
};

type ClearGame = {
  type: "clear-game";
};

export type GameAction = SetCardCount | ClearGame;
