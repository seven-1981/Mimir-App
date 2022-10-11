import { Card } from "./Card";

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

type SetGameCardCount = {
  type: "set-gameCardCount";
  gameCardCount: number;
};

type UpdateGameProgressAction = {
  type: "update-gameProgress";
  gameProgress: number;
};

export type Action =
  | SetCardsAction
  | DeleteCardAction
  | AddCardAction
  | UpdateCardAction
  | UpdateGameProgressAction
  | SetGameCardCount;
