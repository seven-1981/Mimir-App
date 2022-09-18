import { useContext, useEffect, useState } from "react";
import { createCard } from "../models/Card";
import { AppContext } from "../store/context";
import { fetchApiEditCard } from "../utils/fetchApiEditCard";
import { useNavigate } from "react-router-dom";

export interface CardEditProps {
  id: string;
}

export const CardEdit = (props: CardEditProps) => {
  const { cards, dispatch } = useContext(AppContext);
  const [backText, setBackText] = useState<string>("");
  const [frontText, setFrontText] = useState<string>("");
  const navigate = useNavigate();

  const getSelectedCard = () => {
    let selectedCard = cards.find((card) => {
      return card.id === props.id;
    });
    if (!selectedCard) {
      selectedCard = createCard(frontText, backText); // whats the best solution here ?
    }
    return selectedCard;
  };

  useEffect(() => {
    const onMount = () => {
      const selectedCard = getSelectedCard();
      setBackText(selectedCard.back);
      setFrontText(selectedCard.front);
    };
    onMount();
  }, []);

  const onClickUpdateButton = async (id: string) => {
    let selectedCard = getSelectedCard();
    selectedCard.back = backText;
    selectedCard.front = frontText;
    await fetchApiEditCard("/api/cards", id, selectedCard);
    dispatch({ type: "update-card", id: id, card: selectedCard });
    navigate("/cards"); // allowed ?
  };

  return (
    <>
      <input
        type="text"
        value={frontText}
        onChange={(e) => setFrontText(e.target.value)}
        placeholder="Front"
      />
      <input
        type="text"
        value={backText}
        onChange={(e) => setBackText(e.target.value)}
        placeholder="Back"
      />
      <button onClick={() => onClickUpdateButton(props.id)}>Update</button>
    </>
  );
};
