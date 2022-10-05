import { useContext, useEffect } from "react";
import { GameContext } from "../../store/gameContext";
import { StyledLabel } from "../styles";
import { INITIAL_VALUE_CARDCOUNT } from "../../models/Game";

export const GameResult = () => {
  const { solved } = useContext(GameContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td> Front </td>
            <td> Back </td>
            <td> Your Answer </td>
            <td> Accepted </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{solved[0].front}</td>
            <td>{solved[0].back}</td>
            <td>{solved[0].answer}</td>
            <td>{solved[2].accepted === true ? "True" : "False"}</td>
          </tr>
          <tr>
            <td>{solved[1].front}</td>
            <td>{solved[1].back}</td>
            <td>{solved[1].answer}</td>
            <td>{solved[2].accepted === true ? "True" : "False"}</td>
          </tr>
          <tr>
            <td>{solved[2].front}</td>
            <td>{solved[2].back}</td>
            <td>{solved[2].answer}</td>
            <td>{solved[2].accepted === true ? "True" : "False"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
