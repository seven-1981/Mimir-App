import {ChangeEvent, useContext, useEffect, useState} from "react";
import {AppContext} from "../store/context";
import {fetchApiPostGame} from "../utils/fetchApiPostGame";
import {GameCard} from "../models/GameCard";
import {Game} from "../models/Game";


export const NewGamePage = () => {
    const {cards} = useContext(AppContext);
    const [index, setIndex] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [card, setCard] = useState<GameCard>({
        id: "", front: "", back: "", answer: "", accepted: false })
    const [result, setResult] = useState<GameCard[]>([])
    const [game, setGame] = useState<Game>({front: "", cardCount: 0, solved: result})
    const [inputText, setInputText] = useState("");

    useEffect( () => {
        if(cards.length === 0) {return;}         // Todo: How to check whether array is empty
        const selectedCard = cards[index];
        const gameCard = {
            id: selectedCard.id,
            front: selectedCard.front,
            back: selectedCard.back,
            answer: "",
            accepted: false }

       setCard( gameCard );
       setProgress(Math.round(100*index/cards.length));
    }, [index, cards])

    const deleteOnClick = () => {
        console.log("Delete clicked");
    }

    const submitOnClick = async () => {
        evaluateAnswer();
        addResultToGameStatus();
        await postGameStatus();
        updateIndex();
    }

    const evaluateAnswer = () => {
        card.answer = inputText;
        setInputText("");
        if(cards[index].back ===  card.answer) { card.accepted = true; }
        else                                   { card.accepted = false;}
    }

    const addResultToGameStatus = () => {
        setResult(result => [...result, card]);
        const currentGame = {
            front: "???",
            cardCount: index,
            solved: result
        }
        setGame(currentGame);
    }

    const updateIndex = () => {
        if(index < cards.length) { setIndex(index + 1); }
        else { /* navigate( "/game/result") */} // Todo: Siehe Kommentar
    }

    const postGameStatus = async () => {
        await fetchApiPostGame( '/api/game', game).then(
            value => {
                console.log("Post Game Status: " + value);
            }
        );
    }

    const inputFieldChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
        setInputText(event.target.value)
    }

  return (
      <div>
            <div> Progress: {progress} </div>
            <button onClick={deleteOnClick}>
            Delete Game
            </button>
            <div> {card.front} </div>
            <input type="text" onChange={inputFieldChangeEvent}
                 value={inputText} placeholder="Answer" />
            <button onClick={submitOnClick}>
              Submit
            </button>
      </div>
  )
};
