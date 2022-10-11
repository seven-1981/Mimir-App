import { ApiState } from "../models/ApiState";
import { Action } from "../models/Action";
import { initialState } from "./context";

export function apiReducer(state: ApiState, action: Action): ApiState {
  switch (action.type) {
    case "set-cards":
      return {
        cards: action.cards,
        gameProgress: state.gameProgress,
        gameCardCount: state.gameCardCount,
      };
    case "delete-card":
      return {
        cards: state.cards.filter((card) => {
          return card.id !== action.id;
        }),
        gameProgress: state.gameProgress,
        gameCardCount: state.gameCardCount,
      };
    case "add-card":
      return {
        cards: [...state.cards, action.card],
        gameProgress: state.gameProgress,
        gameCardCount: state.gameCardCount,
      };
    case "update-card":
      return {
        cards: state.cards.map((card) => {
          return card.id === action.id ? action.card : card;
        }),
        gameProgress: state.gameProgress,
        gameCardCount: state.gameCardCount,
      };
    case "update-gameProgress":
      return {
        cards: state.cards,
        gameProgress: action.gameProgress,
        gameCardCount: state.gameCardCount,
      };
    case "set-gameCardCount":
      return {
        cards: state.cards,
        gameProgress: state.gameProgress,
        gameCardCount: action.gameCardCount,
      };
    default:
      return initialState;
  }
}
