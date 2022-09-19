import { Card } from "./Card";
import { Action } from "./Action";

export interface ApiState {
  cards: Card[];
  dispatch: (action: Action) => void;
}
