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
  const DOH = "doh.gif";

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={ROUTE_HOME} element={<HomePage />}>
          <Route path={ROUTE_HOME} element={<GamePage />} />
          <Route path={ROUTE_CARDS} element={<CardsPage />} />
          <Route path={ROUTE_CARD} element={<CardPage />} />
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
