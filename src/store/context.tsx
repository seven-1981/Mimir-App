import { AppState } from "../models/ApiState";
import { createContext, ReactNode, useEffect, useReducer } from "react";
import { apiReducer } from "./apiReducer";
import { fetchApiGet } from "../utils/fetchApi";
import { Action } from "../models/Action";
import { emptyGame, Game } from "../models/Game";
import { URL_API_CARDS, URL_API_GAME } from "../pages/URLs";
import { emptyCards, Card } from "../models/Card";

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
      const { data: cards, success } = await fetchApiGet<Card[]>(
        URL_API_CARDS,
        emptyCards
      );
      if (!success) {
        console.log("Error during fetching of card list!");
        return;
      }
      dispatch({ type: "set-cards", cards });
    };
    const onMountGame = async () => {
      const { data: game, success } = await fetchApiGet<Game>(
        URL_API_GAME,
        emptyGame
      );
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
