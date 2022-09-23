import { StyledLink, StyledTitle } from "../components/styles";

export const TitleBar = () => {
  return (
    <StyledTitle>
      <p>Mimir</p>
      <StyledLink to={"/game"}>New Game </StyledLink>
      <StyledLink to={"/cards"}> Manage Cards</StyledLink>
    </StyledTitle>
  );
};
