import { useContext } from "react";
import { GameContext } from "../store/gameContext";
import { useNavigate } from "react-router-dom";
import { ROUTE_CARDS, ROUTE_HOME } from "../App";
import { INITIAL_VALUE_CARDCOUNT } from "../models/Game";
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
    if (cardCount === INITIAL_VALUE_CARDCOUNT) {
      navigate(ROUTE_HOME);
    } else {
      const url = window.location.href;
      if (url.toString().endsWith(ROUTE_HOME)) {
        navigate(ROUTE_CARDS);
      } else {
        navigate(ROUTE_HOME);
      }
    }
  };

  return (
    <StyledTitleBar>
      <StyledLabel>Mimir</StyledLabel>
      <StyledButton onClick={() => onClickSolveButton()}>
        {cardCount === INITIAL_VALUE_CARDCOUNT || cardCount === 0
          ? "New Game"
          : "Solve # " + (INITIAL_VALUE_CARDCOUNT - cardCount).toString()}
      </StyledButton>
      <StyledLink to={"/cards"}>Manage Cards</StyledLink>
    </StyledTitleBar>
  );
};
