import { useContext } from "react";
import { GameContext } from "../store/gameContext";
import { useNavigate } from "react-router-dom";
import { ROUTE_CARDS, ROUTE_HOME } from "../App";
import { NUMBER_OF_CARDS } from "../models/Game";
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
    if (cardCount === NUMBER_OF_CARDS) {
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
        {cardCount === NUMBER_OF_CARDS
          ? "New Game"
          : "Solve # " + (NUMBER_OF_CARDS - cardCount).toString()}
      </StyledButton>
      <StyledLink to={"/cards"}>Manage Cards</StyledLink>
    </StyledTitleBar>
  );
};
