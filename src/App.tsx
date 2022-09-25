import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { NewGamePage } from "./pages/NewGamePage";
import { GameResultPage } from "./pages/GameResultPage";
import { CardsPage } from "./pages/CardsPage";
import { CardPage } from "./pages/CardPage";
import { GlobalStyle } from "./components/styles";

export const ROUTE_HOME = "/";
export const ROUTE_CARDS = "/cards";
export const ROUTE_CARD = "/cards/:cardId";
export const ROUTE_GAME = "/game";
export const ROUTE_GAME_RESULT = "/game/result";
export const ROUTE_NOT_FOUND = "*";

function App() {
  const DOH =
    "https://media0.giphy.com/media/l0G18G3m69vQCOddm/giphy.gif?cid=ecf05e47ok9m1m7xezaobtu0x4skbtxxrh1rf4fwqxhhxwmf&rid=giphy.gif&ct=g";

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={ROUTE_HOME} element={<HomePage />}>
          <Route path={ROUTE_GAME} element={<NewGamePage />} />
          <Route path={ROUTE_GAME_RESULT} element={<GameResultPage />} />
          <Route path={ROUTE_CARDS} element={<CardsPage />} />
          <Route path={ROUTE_CARD} element={<CardPage />} />
          <Route
            path={ROUTE_NOT_FOUND}
            element={
              <img src={DOH} alt={"DOH! That route could not be found!"} />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
