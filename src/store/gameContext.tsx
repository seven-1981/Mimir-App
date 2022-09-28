import { createContext, ReactNode, useReducer } from "react";
import { runningGame } from "../models/Game";
import { gameReducer } from "./gameReducer";
import { GameAction } from "../models/GameAction";

const initialState: runningGame = {
  front: "",
  cardCount: 0,
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
