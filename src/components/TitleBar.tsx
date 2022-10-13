import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE_CARDS, ROUTE_HOME } from "../App";
import {
  StyledButton,
  StyledLabel,
  StyledLink,
  StyledTitleBar,
} from "./styles";
import { AppContext } from "../store/context";

export const TitleBar = () => {
  const { game } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickSolveButton = () => {
    if (game.cardCount === -1) {
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
    if (game.cardCount === -1) {
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
      <StyledLink to={"/cards"}>Manage Cards</StyledLink>
    </StyledTitleBar>
  );
};
