import { Card } from "../models/Card";
import { Action } from "../models/Action";
import { createContext, ReactNode, useReducer } from "react";

interface AppState {
  cards: Card[];
  dispatch: (action: Action) => void;
}

export function authReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "get-cards":
      return initialState; // todo
    default:
      return initialState; // todo
  }
}

const initialState: AppState = {
  cards: [],
  dispatch: (action: Action) => {},
};

export const AppContext = createContext<AppState>(initialState);

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const store = {
    ...state,
    dispatch,
  };

  console.log("render APP provider", state.cards);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
