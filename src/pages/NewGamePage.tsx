import {useAPIGet} from "../utils/useApiGet";
import {useEffect, useState} from "react";
import {ChangeEvent} from "react";
import {GameCard} from "../models/GameCard";
import {useNavigate} from "react-router-dom";
import {Game} from "../models/Game";

export const NewGamePage = () => {
    const {data} = useAPIGet("/api/cards");
    const [index, setIndex] = useState<number>(0);
    const [inputText, setInputText] = useState("");
    const [progress, setProgress] = useState<number>(0);
    const [card, setCard] = useState<GameCard>({
        id: "", front: "", back: "", answer: "", type: false })
    const [result, setResult] = useState<GameCard[]>([])
    const navigate = useNavigate();
   // const [game, setGame] = useState<Game>({front: "", cardCount: 0, solved: result})

    useEffect( () => {
        if(data != null) {
           setCard( data[index] )
           setProgress(Math.round(100*index/data.length));
        }
    }, [index, data])

    const deleteOnClick = () => {
        console.log("Delete clicked");
    }

    const submitOnClick = () => {
        evaluateAnswer();
        postGameStatus();
        updateIndex();
    }

    const evaluateAnswer = () => {
        card.answer = inputText;
        if(data[index].back ===  card.answer) { card.type = true; }
        else                                  { card.type = false;}

        setResult(result => [...result, card]);
        setInputText("");
    }

    const updateIndex = () => {
        if(index < data.length) { setIndex(index + 1); }
        else { navigate( "/game/result") }
    }

    const postGameStatus = () => {
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
