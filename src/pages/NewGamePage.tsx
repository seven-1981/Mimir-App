import { useContext, useEffect, useState } from "react";
import { ChangeEvent } from "react";
import { GameCard } from "../models/GameCard";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../store/context";

export const NewGamePage = () => {
  const { cards } = useContext(AppContext);
  const [index, setIndex] = useState<number>(0);
  const [inputText, setInputText] = useState("");
  const [progress, setProgress] = useState<number>(0);
  const [card, setCard] = useState<GameCard>({
    id: "",
    front: "",
    back: "",
    answer: "",
    accepted: false,
  });
  const [result, setResult] = useState<GameCard[]>([]);
  const navigate = useNavigate();
  // const [game, setGame] = useState<Game>({front: "", cardCount: 0, solved: result})

  useEffect(() => {
    if (index < cards.length) {
      const selectedCard = cards[index];
      const gameCard = {
        id: selectedCard.id,
        front: selectedCard.front,
        back: selectedCard.back,
        answer: "",
        accepted: false,
      };
      setCard(gameCard);
    }
    setProgress(Math.round((100 * index) / cards.length));
  }, [index, cards]);

  const deleteOnClick = () => {
    console.log("Delete clicked");
  };

  const submitOnClick = () => {
    evaluateAnswer();
    postGameStatus();
    updateIndex();
  };

  const evaluateAnswer = () => {
    card.answer = inputText;
    if (cards[index].back === card.answer) {
      card.accepted = true;
    } else {
      card.accepted = false;
    }

    setResult((result) => [...result, card]);
    setInputText("");
  };

  const updateIndex = () => {
    if (index < cards.length) {
      setIndex(index + 1);
    } else {
      navigate("/game/result");
    }
  };

  const postGameStatus = () => {};

  const inputFieldChangeEvent = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  return (
    <div>
      <div> Progress: {progress} </div>
      <button onClick={deleteOnClick}>Delete Game</button>
      <div> {card.front} </div>
      <input
        type="text"
        onChange={inputFieldChangeEvent}
        value={inputText}
        placeholder="Answer"
      />
      <button onClick={submitOnClick}>Submit</button>
    </div>
  );
};
