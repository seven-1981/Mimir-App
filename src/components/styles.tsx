import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

export const StyledTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
`;

export const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: 0.4fr 0.4fr 0.1fr 0.1fr;
  gap: 10px;
  margin: 10px;
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
  min-width: 150px;
  min-height: 30px;

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
