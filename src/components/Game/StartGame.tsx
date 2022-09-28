import {StyledButton, StyledLabel, StyledInputForm} from "../styles";
import {useContext} from "react";
import {AppContext} from "../../store/context";
import {fetchApiPostPatchGame} from "../../utils/fetchApiPostPatchGame";
import {Game, NUMBER_OF_CARDS} from "../../models/Game";
import {GameCard} from "../../models/GameCard";
import {GameContext} from "../../store/gameContext";

export const StartGame = () => {
    const { cards } = useContext(AppContext);
    const { dispatch } = useContext(GameContext);

    const startOnClick = async () => {
        const gameCards = chooseCards();
        const game: Game = {
            front: gameCards[0].front,
            cardCount: 1,
            solved: gameCards
        };
        dispatch({ type: "set-front", front: game.front });
        dispatch({ type: "set-cardCount", value: game.cardCount });
        dispatch({ type: "set-solved", solved: game.solved });

        await fetchApiPostPatchGame("/api/game", game, true).then((value) => {
            console.log("Post Game Status: " + value);
        });
    }

    const chooseCards = () : GameCard[] => {
        const gameCards : GameCard[] = [];
        // ToDo: Random index within number of cards
        for(let i = 0; i < NUMBER_OF_CARDS; i++) {
            const gameCard : GameCard = {
            id: cards[i].id,
            front: cards[i].front,
            back: cards[i].back,
            answer: "",
            accepted: false
            }
            gameCards.push(gameCard);
        }
        return gameCards;
    }

    return (
        <div>
        <StyledInputForm>
            <StyledButton onClick={startOnClick}>Start new Game</StyledButton>
        </StyledInputForm>
        <StyledInputForm>
            <StyledLabel>No game running </StyledLabel>
        </StyledInputForm>
        </div>
    )
}