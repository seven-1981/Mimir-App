import { Card } from "./Card";
import { Game } from "./Game";

type SetCardsAction = {
  type: "set-cards";
  cards: Card[];
};

type DeleteCardAction = {
  type: "delete-card";
  id: string;
};

type AddCardAction = {
  type: "add-card";
  card: Card;
};

type UpdateCardAction = {
  type: "update-card";
  id: string;
  card: Card;
};

type UpdateGameAction = {
  type: "update-game";
  game: Game;
};

export type Action =
  | SetCardsAction
  | DeleteCardAction
  | AddCardAction
  | UpdateCardAction
  | UpdateGameAction;
