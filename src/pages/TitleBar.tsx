import { Link } from "react-router-dom";
import {useContext} from "react";
import {GameContext} from "../store/gameContext";
import {useNavigate} from "react-router-dom";
import {ROUTE_CARDS, ROUTE_GAME} from "../App";

export const TitleBar = () => {
    const {cardCount} = useContext(GameContext);
    const navigate = useNavigate();

    const solveOnClick = () => {
        if(cardCount === 0) {
            navigate(ROUTE_GAME);
        }
        else {
           // if()
            navigate(ROUTE_CARDS);
        }
    }

    const getButtonString = () : string => {
        if(cardCount === 0) return "New Game";
        else                return "Solve #" + cardCount.toString();
    }

    const getGameRunningString = () : string => {
        if(cardCount === 0) return "No game running";
        else                return "";
    }

  return (
    <div>
      Mimir
      <Link to={"/game"}>New Game </Link>
      <button onClick={solveOnClick}>{getButtonString()}</button>
      <Link to={"/cards"}> Manage Cards</Link>
      <div> {getGameRunningString()} </div>
    </div>
  );
};
