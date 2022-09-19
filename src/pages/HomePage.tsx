import { Outlet } from "react-router-dom";
import { TitleBar } from "./TitleBar";

export const HomePage = () => {
  return (
    <div>
      <TitleBar />
      <Outlet />
    </div>
  );
};
