import { GameCard } from "./GameCard";

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
