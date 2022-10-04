import { createContext, ReactNode, useReducer } from "react";
import { runningGame } from "../models/Game";
import { gameReducer } from "./gameReducer";
import { GameAction } from "../models/GameAction";
import { NUMBER_OF_CARDS } from "../models/Game";

const initialState: runningGame = {
  front: "",
  cardCount: NUMBER_OF_CARDS,
  solved: [],
  dispatch: (action: GameAction) => {},
};

export const GameContext = createContext<runningGame>(initialState);

interface Props {
  children: ReactNode;
}

export const GameProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const store = {
    ...state,
    dispatch,
  };

  return <GameContext.Provider value={store}>{children}</GameContext.Provider>;
};
