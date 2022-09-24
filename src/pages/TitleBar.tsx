import { Link } from "react-router-dom";
import {useContext} from "react";
import {GameContext} from "../store/gameContext";

export const TitleBar = () => {
    const {cardCount} = useContext(GameContext);

    const solveOnClick = () => {
        console.log("Solve clicked");
    }

    const getButtonString = () : string => {
        if(cardCount === 0) return "New Game";
        else                return "Solve #" + cardCount.toString();
    }

  return (
    <div>
      Mimir
      <Link to={"/game"}>New Game </Link>
      <button onClick={solveOnClick}>{getButtonString()}</button>
      <Link to={"/cards"}> Manage Cards</Link>
      <div> No game running </div>
    </div>
  );
};
