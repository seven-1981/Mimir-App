import {useAPIGet } from "./useAPIHook";
import {useEffect, useState} from "react";
import {ChangeEvent} from "react";

export const NewGamePage = () => {
    const [inputText, setInputText] = useState("");
    const [progress, setProgress] = useState<number>(0);
    const [submitted, setSubmitted] = useState<boolean>(false);
    const {data} = useAPIGet("/api/cards");

     useEffect(() => {
         setProgress(progress + 1);
         setSubmitted(false) },
         [submitted]
     );

    const deleteOnClick = () => {
        console.log("Delete clicked");
    }

    const submitOnClick = () => {
        setSubmitted(true);
        console.log(data.stringify());
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
            <div> TEST  </div>
            <input type="text" onChange={inputFieldChangeEvent}
                 value={inputText} placeholder="Answer" />
            <button onClick={submitOnClick}>
              Submit
            </button>
            <div> No game running </div>
      </div>
  )
};
