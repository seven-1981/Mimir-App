import { ApiState } from "../models/ApiState";
import { Action } from "../models/Action";
import { initialState } from "./context";

export function apiReducer(state: ApiState, action: Action): ApiState {
  switch (action.type) {
    case "set-cards":
      return {
        cards: action.cards,
        dispatch: state.dispatch,
      };
    case "delete-card":
      return {
        cards: state.cards.filter((card) => {
          return card.id != action.id;
        }),
        dispatch: state.dispatch,
      };
    case "add-card":
      return {
        cards: [...state.cards, action.card],
        dispatch: state.dispatch,
      };
    case "update-card":
      return {
        cards: state.cards.map((card) => {
          return card.id === action.id ? action.card : card;
        }),
        dispatch: state.dispatch,
      };
    default:
      return initialState;
  }
}
