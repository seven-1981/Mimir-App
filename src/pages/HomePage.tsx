import { Outlet } from "react-router-dom";
import { TitleBar } from "../components/TitleBar";

export const HomePage = () => {
  return (
    <div>
      <TitleBar />
      <Outlet />
    </div>
  );
};
