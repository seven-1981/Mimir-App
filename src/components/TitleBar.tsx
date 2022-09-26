import { useContext } from "react";
import { GameContext } from "../store/gameContext";
import { useNavigate } from "react-router-dom";
import { ROUTE_CARDS, ROUTE_GAME } from "../App";
import {
  StyledButton,
  StyledLabel,
  StyledLink,
  StyledTitleBar,
} from "./styles";

export const TitleBar = () => {
  const { cardCount } = useContext(GameContext);
  const navigate = useNavigate();

  const onClickSolveButton = () => {
    console.log("Value of cardCount: " + cardCount);
    if (cardCount === 0) {
      navigate(ROUTE_GAME);
    } else {
      const url = window.location.href;
      if (url.toString().endsWith(ROUTE_GAME)) {
        navigate(ROUTE_CARDS);
      } else {
        navigate(ROUTE_GAME);
      }
    }
  };

  return (
    <StyledTitleBar>
      <StyledLabel>Mimir</StyledLabel>
      <StyledButton onClick={() => onClickSolveButton()}>
        {cardCount === 0 ? "New Game" : "Solve # " + cardCount.toString()}
      </StyledButton>
      <StyledLink to={"/cards"}>Manage Cards</StyledLink>
    </StyledTitleBar>
  );
};
