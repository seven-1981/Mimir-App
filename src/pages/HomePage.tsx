import { Outlet } from "react-router-dom";
import { TitleBar } from "../components/TitleBar";
import {GamePage} from "./GamePage";

export const HomePage = () => {
  return (
    <div>
      <TitleBar />
        <GamePage />
      <Outlet />
    </div>
  );
};
