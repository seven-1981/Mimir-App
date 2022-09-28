import { TitleBar } from "../components/TitleBar";
import { Outlet } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <TitleBar />
      <Outlet />
    </div>
  );
};
