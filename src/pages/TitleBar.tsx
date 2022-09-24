import {useContext} from "react";
import {GameContext} from "../store/gameContext";
import {useNavigate} from "react-router-dom";
import {ROUTE_CARDS, ROUTE_GAME} from "../App";
import {StyledButton, StyledLink, StyledTitle} from "../components/styles";

export const TitleBar = () => {
    const {cardCount} = useContext(GameContext);
    const navigate = useNavigate();

    const solveOnClick = () => {
        if(cardCount === 0) {
            navigate(ROUTE_GAME);
        }
        else {
            const url = window.location.href;
            if(url.toString().endsWith(ROUTE_GAME)) {
                navigate(ROUTE_CARDS);
            }
            else {
                navigate(ROUTE_GAME);
            }

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
    <StyledTitle>
      Mimir
      <StyledLink to={"/game"}>New Game </StyledLink>
      <StyledButton onClick={solveOnClick}>{getButtonString()}</StyledButton>
      <StyledLink to={"/cards"}> Manage Cards</StyledLink>
      <div> {getGameRunningString()} </div>
    </StyledTitle>
  );
};
