import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

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
    box-sizing: border-box;
    margin: 10;
    text-shadow: -1px 0 white, 0 1px black, 1px 0 black, 0 -1px white;
    letter-spacing: 2px;
}
body {
${Background};
}`;

export const StyledTitleBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  padding: 10px;
`;

export const StyledLabel = styled.label`
  font-size: 24px;
`;

export const StyledCardList = styled.div`
  display: grid;
  justify-content: space-between;
  flex-align: left;
  grid-template-columns: 0.4fr 0.4fr 0.1fr 0.1fr;
  gap: 10px;
  margin: 20px;
  padding: 5px;
  border: 1px solid grey;
`;

// Todo: Check if some of the css properties are not necessary
export const FancyButtonStyle = css`
  background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
  border: 0;
  border-radius: 8px;
  box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
  box-sizing: border-box;
  color: #ffffff;
  font-size: 20px;
  text-decoration: none;
  user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  cursor: pointer;
  min-width: 120px;
  min-height: 30px;
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
  font-size: 1.2rem;
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

export const StyledInputForm = styled.div`
  display: flex;
  flex-align: center;
  justify-content: space-evenly;
  margin: 50px;
`;

export const StyledCardFront = styled.div`
  display: flex;
  width: 40vw;
  height: 20vh;
  background: white;
  border: solid;
  border-radius: 0.4rem;
  border-color: black;
  font-size: 2rem;
  align-items: center;
  justify-content: center;
`;

export const StyledGameResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5em;
  margin: 50px;
`;

export const StyledGameResultTable = styled.table`
  border-spacing: 10px;
  border-collapse: separate;
`;

export const StyledGameResultTableItem = styled.td`
  padding: 10px;
`;
