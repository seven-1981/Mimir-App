import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { URL_CARDS, URL_HOME } from "../pages/URLs";
import {
  StyledButton,
  StyledLabel,
  StyledLink,
  StyledTitleBar,
} from "./Styles/styles";
import { AppContext } from "../store/context";
import { emptyGame } from "../models/Game";

export const TitleBar = () => {
  const { game } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickSolveButton = () => {
    if (game.cardCount === emptyGame.cardCount) {
      navigate(URL_HOME);
    } else {
      const url = window.location.href;
      if (url.toString().endsWith(URL_HOME)) {
        navigate(URL_CARDS);
      } else {
        navigate(URL_HOME);
      }
    }
  };

  const getButtonString = (): string => {
    if (game.cardCount === emptyGame.cardCount) {
      return "New Game";
    } else if (game.solved.length === game.cardCount) {
      return "Finished";
    } else {
      return "Solve # " + (game.solved.length + 1).toString();
    }
  };

  return (
    <StyledTitleBar>
      <StyledLabel>Mimir</StyledLabel>
      <StyledButton onClick={() => onClickSolveButton()}>
        {getButtonString()}
      </StyledButton>
      <StyledLink to={URL_CARDS}>Manage Cards</StyledLink>
    </StyledTitleBar>
  );
};
