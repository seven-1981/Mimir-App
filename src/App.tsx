import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { CardList } from "./components/CardList";

const ROUTE_HOME = "/";
const ROUTE_CARDS = "/cards";

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTE_HOME} element={<Home />}>
          <Route path={ROUTE_CARDS} element={<CardList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
