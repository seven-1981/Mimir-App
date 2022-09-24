import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./store/context";
import {GameProvider} from "./store/gameContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppProvider>
        <GameProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
        </GameProvider>
    </AppProvider>
  </React.StrictMode>
);
