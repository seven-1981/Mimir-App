import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const Background = css`
  min-height: 100vh;
  font-family: Phantomsans, sans-serif;

  width: 100%;
  background-size: 300% 300%;
  background-image: linear-gradient(
    -135deg,
    rgba(204, 237, 253, 1) 0%,
    rgba(191, 200, 250, 1) 25%,
    rgba(179, 160, 213, 1) 51%,
    rgba(163, 140, 200, 1) 100%
  );
  animation: AnimateBG 20s ease infinite;

  @keyframes AnimateBG {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 10;
text-shadow: -1px 0 white, 0 1px black, 1px 0 black, 0 -1px white;
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
