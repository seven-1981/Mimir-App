import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CardsPage } from "./pages/CardsPage";
import { CardPage } from "./pages/CardPage";
import { GamePage } from "./pages/GamePage";
import { GlobalStyle } from "./components/styles";

export const ROUTE_HOME = "/";
export const ROUTE_CARDS = "/cards";
export const ROUTE_CARD = "/cards/:cardId";
export const ROUTE_NOT_FOUND = "*";

function App() {
  const DOH =
    "https://media0.giphy.com/media/l0G18G3m69vQCOddm/giphy.gif?cid=ecf05e47ok9m1m7xezaobtu0x4skbtxxrh1rf4fwqxhhxwmf&rid=giphy.gif&ct=g";

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={ROUTE_HOME} element={<HomePage />}>
          <Route path={ROUTE_HOME} element={<GamePage />} />
          <Route path={ROUTE_CARDS} element={<CardsPage />}>
            <Route path={ROUTE_CARD} element={<CardPage />} />
          </Route>
        </Route>
        <Route
          path={ROUTE_NOT_FOUND}
          element={
            <img src={DOH} alt={"DOH! That route could not be found!"} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
