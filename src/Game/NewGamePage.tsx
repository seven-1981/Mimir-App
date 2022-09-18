import {useAPIGet} from "../useAPIHook";
import {useEffect, useState} from "react";
import {ChangeEvent} from "react";
import {GameCardProps} from "./GameCardProps";
import {GameProps} from "./GameProps";

export const NewGamePage = () => {
    const {data} = useAPIGet("/api/cards");
    const [index, setIndex] = useState<number>(0);
    const [inputText, setInputText] = useState("");
    const [progress, setProgress] = useState<number>(0);
    const [card, setCard] = useState<GameCardProps>({
        id: "", front: "", back: "", answer: "", type: false })
    const [result, setResult] = useState<GameCardProps[]>([])
   // const [game, setGame] = useState<GameProps>({front: "", cardCount: 0, solved: result})

    useEffect( () => {
        if(data != null) {
            setCard(data[index]);
            setProgress(Math.round(100*index/data.length));
        }
    }, [index, data])

    const deleteOnClick = () => {
        console.log("Delete clicked");
    }

    const submitOnClick = () => {
        card.answer = inputText;
        evaluateAnswer();
        postGameStatus();
        updateIndex();
    }

    const evaluateAnswer = () => {
        if(data[index].back ===  card.answer) { card.type = true; }
        else                                  { card.type = false;}

        setResult(result => [...result, card]);
    }

    const updateIndex = () => {
        if(index < data.length) { setIndex(index + 1); }
        else { /* Game Result Page */ }
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
