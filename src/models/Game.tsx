import { GameCard } from "./GameCard";

// Todo: BAD!! Depends on the number of cards (3) in the API!!
export const NO_GAME_RUNNING = 4;

export type Game = {
  front: string;
  cardCount: number;
  solved: GameCard[];
};

export const emptyGame = {
  front: "",
  cardCount: NO_GAME_RUNNING,
  solved: [],
};
