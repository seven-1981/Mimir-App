import {ChangeEvent, useContext, useEffect, useState} from "react";
import {AppContext} from "../store/context";
import {GameContext} from "../store/gameContext";
import {ROUTE_GAME_RESULT, ROUTE_HOME} from "../App";
import {fetchApiPostGame} from "../utils/fetchApiPostGame";
import {useNavigate} from "react-router-dom";
import {GameCard} from "../models/GameCard";
import {Game} from "../models/Game";

export const NewGamePage = () => {
    const {cards} = useContext(AppContext);
    const {front, cardCount, solved, dispatch} = useContext(GameContext);
    const [index, setIndex] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);            // ToDo: move to context
    const [solvedCards, setSolvedCards] = useState<GameCard[]>([]); // ToDo: move to context
    const [inputText, setInputText] = useState("");
    const navigate = useNavigate();

    useEffect( () => {
        if(cards.length === 0)      return;
        if(index >= cards.length)   return;

        const selectedCard = cards[index];
        dispatch({ type: "set-front", front: selectedCard.front });
        dispatch({ type: "set-cardCount", value: (index+1) });

       setProgress(Math.round(100*index/cards.length));
    }, [index, cards])

    const submitOnClick = async () => {
        processAnswer();
        await postGameStatus();
        updateIndex();
    }

    const processAnswer = () => {
        const result = (inputText === cards[index].back);
        const solvedCard: GameCard = {
            id: cards[index].id,
            front: cards[index].front,
            back: cards[index].back,
            answer: inputText,
            accepted: result
        }
        setSolvedCards([...solvedCards, solvedCard] );
        dispatch({ type: "set-solved", solved: solvedCards });
        setInputText("");
    }

    const updateIndex = () => {
        if(index < (cards.length - 1) ) {
            setIndex(index + 1);
        }
        else {
            navigate(ROUTE_GAME_RESULT);
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

    const deleteOnClick = () => {
        dispatch({ type: "clear-game"});
        navigate(ROUTE_HOME);
    }

  const inputFieldChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value);
  };

  return (
      <div>
            <div> Progress: {progress} </div>
            <button onClick={deleteOnClick}>Delete Game</button>
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
