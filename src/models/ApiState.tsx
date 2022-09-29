import { Card } from "./Card";
import { Action } from "./Action";

export interface ApiState {
  cards: Card[];
  cardCount: number;
}

export interface AppState extends ApiState {
  dispatch: (action: Action) => void;
}
