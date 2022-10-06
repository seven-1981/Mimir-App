import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_CARDS, ROUTE_HOME } from "../App";
import { NO_GAME_RUNNING } from "../models/Game";
import {
  StyledButton,
  StyledLabel,
  StyledLink,
  StyledTitleBar,
} from "./styles";
import { AppContext } from "../store/context";

export const TitleBar = () => {
  const { cardCount } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickSolveButton = () => {
    if (cardCount === NO_GAME_RUNNING) {
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
    if (cardCount === NO_GAME_RUNNING) {
      return "New Game";
    } else if (cardCount === 0) {
      return "Finished";
    } else {
      return "Solve # " + (NO_GAME_RUNNING - cardCount).toString();
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
