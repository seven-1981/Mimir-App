import { GameCard } from "./GameCard";

export type Game = {
  front: string;
  cardCount: number;
  solved: GameCard[];
};

export const emptyGame = {
  front: "",
  cardCount: -1,
  solved: [],
};
