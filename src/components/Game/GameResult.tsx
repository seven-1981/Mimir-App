import {useContext} from "react";
import {GameContext} from "../../store/gameContext";
import {StyledLabel} from "../styles";


export const GameResult = () => {
    const {solved} = useContext(GameContext);

    return (
        <div>
            <div>
                <StyledLabel> Front </StyledLabel> <StyledLabel> Back </StyledLabel>
                <StyledLabel> Your Answer </StyledLabel> <StyledLabel> Accepted </StyledLabel>
            </div>
            <div>
                <StyledLabel> {solved[1].front} </StyledLabel> <StyledLabel> {solved[1].back} </StyledLabel>
                <StyledLabel> {solved[1].answer} </StyledLabel> <StyledLabel> {solved[1].accepted} </StyledLabel>
            </div>
            <div>
                <StyledLabel> {solved[2].front} </StyledLabel> <StyledLabel> {solved[2].back} </StyledLabel>
                <StyledLabel> {solved[2].answer} </StyledLabel> <StyledLabel> {solved[2].accepted} </StyledLabel>
            </div>
            <div>
                <StyledLabel> {solved[3].front} </StyledLabel> <StyledLabel> {solved[3].back} </StyledLabel>
                <StyledLabel> {solved[3].answer} </StyledLabel> <StyledLabel> {solved[3].accepted} </StyledLabel>
            </div>
        </div>
    )
}

