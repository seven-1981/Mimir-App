import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { CardsPage } from "./pages/CardsPage";
import { CardPage } from "./pages/CardPage";
import { GamePage } from "./pages/GamePage";
import { GlobalStyle } from "./components/Styles/styles";
import { URL_HOME, URL_CARD, URL_CARDS, URL_NOT_FOUND } from "./pages/URLs";

function App() {
  const DOH = "doh.gif";

  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path={URL_HOME} element={<HomePage />}>
          <Route path={URL_HOME} element={<GamePage />} />
          <Route path={URL_CARDS} element={<CardsPage />} />
          <Route path={URL_CARD} element={<CardPage />} />
        </Route>
        <Route
          path={URL_NOT_FOUND}
          element={
            <img src={DOH} alt={"DOH! That route could not be found!"} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
