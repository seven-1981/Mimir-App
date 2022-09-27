import { ChangeEvent, useContext, useEffect, useState } from "react";
import { GameContext } from "../../store/gameContext";
import { NUMBER_OF_CARDS } from "../../models/Game";
import { fetchApiPostPatchGame } from "../../utils/fetchApiPostPatchGame";
import { GameCard } from "../../models/GameCard";
import { Game } from "../../models/Game";
import {StyledInput, StyledButton, StyledLabel, StyledInputForm} from "../styles";

export const RunningGame = () => {
    const { front, cardCount, solved, dispatch } = useContext(GameContext);
    const [index, setIndex] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0); // ToDo: move to context
    const [solvedCards, setSolvedCards] = useState<GameCard[]>(solved); // ToDo: move to context
    const [inputText, setInputText] = useState("");

    useEffect(() => {

        dispatch({ type: "set-front", front: solvedCards[index].front });
        dispatch({ type: "set-cardCount", value: index + 1 });
        setProgress(Math.round((100 * index) / NUMBER_OF_CARDS));

    }, [index]);

    const submitOnClick = async () => {
        processAnswer();
        await patchGameStatus();
        updateIndex();
    };

    const processAnswer = () => {
        const result = (inputText === solved[index].back);
        console.log("Result: " + solved[index].back);
        console.log("Result bool: " + result);
        const solvedCard: GameCard = {
            id: solved[index].id,
            front: solved[index].front,
            back: solved[index].back,
            answer: inputText,
            accepted: result,
        };
        setSolvedCards([...solvedCards, solvedCard]);
        dispatch({ type: "set-solved", solved: solvedCards });
        setInputText("");
    };

    const updateIndex = () => {
        setIndex(index + 1);
    };

    const patchGameStatus = async () => {
        const game: Game = {
            front: front,
            cardCount: cardCount,
            solved: solved
        };
        await fetchApiPostPatchGame("/api/game", game, false).then((value) => {
            console.log("Patch Game Status: " + value);
        });
    };

    const deleteOnClick = () => {
        dispatch({ type: "clear-game" });
        setIndex(0);
        setProgress(0);
    };

    const inputFieldChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
    };

// ToDo: Styling of front of card
    return (
        <div>
            <StyledInputForm>
                <StyledLabel> Progress: {progress} </StyledLabel>
                <StyledButton onClick={deleteOnClick}>Delete Game</StyledButton>
            </StyledInputForm>
            <StyledInputForm>
                <StyledLabel> {front} </StyledLabel>
            </StyledInputForm>
            <StyledInputForm>
                <StyledInput
                    type="text"
                    onChange={inputFieldChangeEvent}
                    value={inputText}
                    placeholder="Answer"
                />
                <StyledButton onClick={submitOnClick}>Submit</StyledButton>
            </StyledInputForm>
        </div>
    );
};
