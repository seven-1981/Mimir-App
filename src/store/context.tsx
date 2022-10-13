import { AppState } from "../models/ApiState";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import { apiReducer } from "./apiReducer";
import { fetchApiGetCards, fetchApiGetGame } from "../utils/fetchApiGet";
import { Action } from "../models/Action";
import { emptyGame } from "../models/Game";

export const initialState: AppState = {
  dispatch: (_action: Action) => {},
  cards: [],
  game: emptyGame,
};

export const AppContext = createContext<AppState>(initialState);

interface Props {
  children: ReactNode;
}

export const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  useEffect(() => {
    const onMountCards = async () => {
      const { cards, success } = await fetchApiGetCards("/api/cards");
      if (!success) {
        console.log("Error during fetching of card list!");
        return;
      }
      dispatch({ type: "set-cards", cards });
    };
    const onMountGame = async () => {
      const { game, success } = await fetchApiGetGame("/api/game");
      if (success) {
        dispatch({ type: "update-game", game });
      }
    };
    onMountCards();
    onMountGame();
  }, []);

  const store = {
    ...state,
    dispatch,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
