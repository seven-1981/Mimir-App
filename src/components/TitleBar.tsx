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
  const { gameProgress, gameCardCount } = useContext(AppContext);
  const navigate = useNavigate();

  const onClickSolveButton = () => {
    if (gameProgress === -1) {
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
    if (gameProgress === -1) {
      return "New Game";
    } else if (gameProgress === gameCardCount) {
      return "Finished";
    } else {
      return "Solve # " + gameProgress.toString();
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
