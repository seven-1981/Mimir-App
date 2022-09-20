import {ChangeEvent, useContext, useEffect, useState} from "react";
import {AppContext} from "../store/context";
import {fetchApiPostGame} from "../utils/fetchApiPostGame";
import {GameAnswer} from "../components/GameAnswer";
import {GameCard} from "../models/GameCard";
import {Game} from "../models/Game";


export const NewGamePage = () => {
    const {cards} = useContext(AppContext);
    const [index, setIndex] = useState<number>(0);
    const [progress, setProgress] = useState<number>(0);
    const [card, setCard] = useState<GameCard>({
        id: "", front: "", back: "", answer: "", accepted: false })
    const [result, setResult] = useState<GameCard[]>([])
    const [game, setGame] = useState<Game>({front: "", cardCount: 0, solved: result})   // Todo: Move to context
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
        await postGameStatus();
        updateIndex();
    }

    const evaluateAnswer = () => {
        card.answer = inputText;
        if(cards[index].back ===  card.answer) { card.accepted = true; }
        else                                   { card.accepted = false;}

        setResult(result => [...result, card]);
    }

    const updateIndex = () => {
        if(index < cards.length) { setIndex(index + 1); }
        else { /* navigate( "/game/result") */}
    }

    const postGameStatus = async () => {
        const success = await fetchApiPostGame( '/api/game', game);
        if(!success) {
            console.log("Failed to post current game state");   // Todo: Evaluate return state
        }
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
