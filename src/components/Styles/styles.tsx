import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { adaptiveFontSize } from "./adaptiveFontSize";

const Background = css`
  min-height: 100vh;
  font-family: Phantomsans, sans-serif;

  width: 100%;
  background-size: 100% 100%;
  background: linear-gradient(
    45deg,
    rgba(175, 174, 207, 1) 0%,
    rgba(221, 221, 232, 1) 31%,
    rgba(198, 219, 240, 0.9920343137254902) 92%
  );
`;

export const GlobalStyle = createGlobalStyle`
* {
    color: rgb(5, 6, 45);
    text-shadow: -1px 0 white, 0 1px black, 1px 0 black, 0 -1px white;
    letter-spacing: 1px;
}
body {
${Background};
}`;

export const StyledTitleBar = styled.div`
  background: linear-gradient(
    45deg,
    rgba(150, 154, 197, 1) 0%,
    rgba(201, 211, 212, 1) 31%,
    rgba(178, 209, 220, 0.9920343137254902) 92%
  );
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  padding: 10px;
`;

export const StyledLabel = styled.label`
  font-size: ${adaptiveFontSize(0.25, 0.5)};
  word-wrap: break-word;
  word-break: break-all;
`;

export const StyledCardListItem = styled.div`
  display: grid;
  justify-content: space-between;
  flex-align: left;
  grid-template-columns: 0.4fr 0.4fr 0.1fr 0.1fr;
  gap: 10px;
  margin: 20px;
  padding: 5px;
  border: 1px solid grey;
`;

const FancyButtonStyle = css`
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: ${adaptiveFontSize(0.25, 0.5)};
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  min-width: 80px;
  min-height: 30px;
  max-height: 40px;
  padding: 10px;

  &:hover {
    background: none;
    background-color: rgb(5, 6, 45);
    border-radius: 6px;
    transition: 1000ms;
  }
`;

export const StyledButton = styled.button`
  ${FancyButtonStyle};
`;

export const StyledLink = styled(Link)`
  ${FancyButtonStyle};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledInput = styled.input`
  font-size: ${adaptiveFontSize(0.25, 0.5)};
  min-width: 80px;
  min-height: 30px;
  border-radius: 0.4rem;
  border: none;
  color: rgb(55,55,55);
  
  &:hover {
    background: none;
    background-color: rgb(5, 6, 45);
    transition: 1000ms;
    color: white;
  }
  
  &:focus {
    background: none;
    background-color: rgb(5, 6, 45);
    transition: 1000ms;
    color: white;
  }
}
`;

export const StyledForm = styled.div`
  display: flex;
  flex-align: center;
  justify-content: space-evenly;
  margin: 50px;
`;

export const StyledNoGame = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px;
`;

export const StyledRunningGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center:
`;

export const StyledCardFront = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  margin: 20px;
  width: 40vw;
  height: 30vh;
  color: rgb(5, 6, 45);
  background: white;
  border: solid;
  border-radius: 0.4rem;
  border-color: rgb(5, 6, 45);
  font-size: ${adaptiveFontSize(1, 1.5)};
  word-wrap: break-word;
  word-break: break-all;
`;

export const StyledResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${adaptiveFontSize(0.5, 0.5)};
  margin: 50px;
`;

export const StyledResultTable = styled.table`
  border-spacing: 10px;
  border-collapse: separate;
`;

export const StyledResultTableItem = styled.td`
  padding: 10px;
  word-wrap: break-word;
  word-break: break-all;
`;
