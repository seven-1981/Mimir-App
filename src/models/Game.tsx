import { GameCard } from "./GameCard";

export const NUMBER_OF_CARDS = 3;

export interface Game {
  front: string;
  cardCount: number;
  solved: GameCard[];
}
