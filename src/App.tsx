import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { CardsScreen } from "./CardsScreen";
import { NewGamePage } from "./NewGamePage";

const ROUTE_HOME = "/";
const ROUTE_CARDS = "/cards";
const ROUTE_NEW_GAME = "/game";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTE_HOME} element={<Home />}>
          <Route path={ROUTE_CARDS} element={<CardsScreen />} />
          <Route path={ROUTE_NEW_GAME} element={<NewGamePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
