import { Card } from "./Card";
import { Action } from "./Action";

export interface ApiState {
  cards: Card[];
  gameProgress: number;
  gameCardCount: number;
}

export interface AppState extends ApiState {
  dispatch: (action: Action) => void;
}
