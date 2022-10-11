import { ApiState } from "../models/ApiState";
import { Action } from "../models/Action";
import { initialState } from "./context";

export function apiReducer(state: ApiState, action: Action): ApiState {
  switch (action.type) {
    case "set-cards":
      return {
        ...state,
        cards: action.cards,
      };
    case "delete-card":
      return {
        ...state,
        cards: state.cards.filter((card) => {
          return card.id !== action.id;
        }),
      };
    case "add-card":
      return {
        ...state,
        cards: [...state.cards, action.card],
      };
    case "update-card":
      return {
        ...state,
        cards: state.cards.map((card) => {
          return card.id === action.id ? action.card : card;
        }),
      };
    case "update-gameProgress":
      return {
        ...state,
        gameProgress: action.gameProgress,
      };
    case "set-gameCardCount":
      return {
        ...state,
        gameCardCount: action.gameCardCount,
      };
    default:
      return initialState;
  }
}
