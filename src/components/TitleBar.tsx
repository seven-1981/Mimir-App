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

  const getButtonString = (): string => {
    {
      if (cardCount === INITIAL_VALUE_CARDCOUNT) {
        return "New Game";
      } else if (cardCount === 0) {
        return "Finished";
      } else {
        return "Solve # " + (INITIAL_VALUE_CARDCOUNT - cardCount).toString();
      }
    }
  };

  return (
    <StyledTitleBar>
      <StyledLabel>Mimir</StyledLabel>
      <StyledButton onClick={() => onClickSolveButton()}>
        {getButtonString()}
      </StyledButton>
      <StyledLink to={"/cards"}>Manage Cards</StyledLink>
    </StyledTitleBar>
  );
};
