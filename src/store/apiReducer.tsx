import { ApiState } from "../models/ApiState";
import { Action } from "../models/Action";
import { initialState } from "./context";

export function apiReducer(state: ApiState, action: Action): ApiState {
  switch (action.type) {
    case "set-cards":
      return {
        cards: action.cards,
        cardCount: state.cardCount,
      };
    case "delete-card":
      return {
        cards: state.cards.filter((card) => {
          return card.id != action.id;
        }),
        cardCount: state.cardCount,
      };
    case "add-card":
      return {
        cards: [...state.cards, action.card],
        cardCount: state.cardCount,
      };
    case "update-card":
      return {
        cards: state.cards.map((card) => {
          return card.id === action.id ? action.card : card;
        }),
        cardCount: state.cardCount,
      };
    case "update-cardCount":
      return {
        cards: state.cards,
        cardCount: action.cardCount,
      };
    default:
      return initialState;
  }
}
