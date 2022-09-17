import { ApiState } from "../models/ApiState";
import { Action } from "../models/Action";
import { createContext, ReactNode, useReducer } from "react";
import { apiReducer } from "./apiReducer";

export const initialState: ApiState = {
  cards: [],
  dispatch: (action: Action) => {},
};

export const AppContext = createContext<ApiState>(initialState);

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  const store = {
    ...state,
    dispatch,
  };

  console.log("Rendering API provider", state.cards);

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
