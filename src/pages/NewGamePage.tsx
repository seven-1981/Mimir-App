import {ChangeEvent, useContext, useEffect, useState} from "react";
import {AppContext} from "../store/context";
import {GameContext} from "../store/gameContext";
import {fetchApiPostGame} from "../utils/fetchApiPostGame";
import {useNavigate} from "react-router-dom";
import {GameCard} from "../models/GameCard";
import {Game} from "../models/Game";

export const NewGamePage = () => {
    const {cards} = useContext(AppContext);
    const {front, cardCount, solved, dispatch} = useContext(GameContext);
    const [index, setIndex] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [solvedCards, setSolvedCards] = useState<GameCard[]>([]);
    const [inputText, setInputText] = useState("");
    const navigate = useNavigate();

    useEffect( () => {
        if(cards.length === 0)      return;
        if(index >= cards.length)   return;

        const selectedCard = cards[index];
        dispatch({ type: "set-front", front: selectedCard.front });
        dispatch({ type: "set-cardCount", value: index });

       setProgress(Math.round(100*index/cards.length));
    }, [index, cards])

    const deleteOnClick = () => {
        console.log("Delete clicked");
    }

    const submitOnClick = async () => {
        evaluateAnswer();
        await postGameStatus();
        updateIndex();
    }

    const evaluateAnswer = () => {
        const solvedCard: GameCard = {
            id: cards[index].id,
            front: cards[index].front,
            back: cards[index].back,
            answer: inputText,
            accepted: (inputText === cards[index].back)
        }
        const items= solvedCards;
        setSolvedCards([...items, solvedCard] );
        dispatch({ type: "set-solved", solved: solvedCards });

        setInputText("");
    }

    const updateIndex = () => {
        if(index < (cards.length - 1) ) {
            setIndex(index + 1);
        }
        else {
            navigate("/game/result");
        }
    }

    const postGameStatus = async () => {
        const game : Game = {
            front: front,
            cardCount: cardCount,
            solved: solved
        };
        await fetchApiPostGame( '/api/game', game).then(
            value => {
                console.log("Post Game Status: " + value);
            }
        );
    }

    const solveOnClick = () => {
        console.log("Solve clicked");
    }

  const inputFieldChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
  };

  return (
      <div>
            <div> Progress: {progress} </div>
            <button onClick={deleteOnClick}>Delete Game</button>
            <button onClick={solveOnClick}>Solve #{index}</button>
            <div> {front} </div>
            <input
                type="text"
                onChange={inputFieldChangeEvent}
                value={inputText}
                placeholder="Answer" />
            <button onClick={submitOnClick}>Submit</button>
      </div>
  )
};
