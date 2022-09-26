import { ApiState } from "../models/ApiState";
import { Action } from "../models/Action";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import { apiReducer } from "./apiReducer";
import { fetchApiGetCards } from "../utils/fetchApiGetCards";

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

  useEffect(() => {
    const onMount = async () => {
      const { cards, success } = await fetchApiGetCards("/api/cards");
      if (!success) {
        console.log("Error during fetching of card list!");
        return;
      }
      dispatch({ type: "set-cards", cards });
    };
    onMount();
  }, []);

  const store = {
    ...state,
    dispatch,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
