import { GameCard } from "./GameCard";
import { GameAction } from "./GameAction";

export const NUMBER_OF_CARDS = 3;
export const INITIAL_VALUE_CARDCOUNT = NUMBER_OF_CARDS + 1;

export interface Game {
  front: string;
  cardCount: number;
  solved: GameCard[];
}

export interface runningGame extends Game {
  dispatch: (action: GameAction) => void;
}

export const initialGameState: Game = {
  front: "",
  cardCount: INITIAL_VALUE_CARDCOUNT,
  solved: [],
};
