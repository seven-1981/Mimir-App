import { Card } from "./Card";

type GetCardsAction = {
  type: "get-cards";
  cards: Card[];
};

export type Action = GetCardsAction;
