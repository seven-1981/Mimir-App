import { Card } from "./Card";
import { Action } from "./Action";
import { Game } from "./Game";

export interface ApiState {
  cards: Card[];
  game: Game;
}

export interface AppState extends ApiState {
  dispatch: (action: Action) => void;
}
