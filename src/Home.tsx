import { Outlet } from "react-router-dom";
import { TitleBar } from "./TitleBar";

export const Home = () => {
  return (
    <div>
      <TitleBar />
      <Outlet />
    </div>
  );
};
