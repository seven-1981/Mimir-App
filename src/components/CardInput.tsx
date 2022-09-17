import { useContext, useState } from "react";
import { fetchApiPost } from "../utils/fetchApiPost";
import { Card, createCard } from "../models/Card";
import { AppContext } from "../store/context";
import { fetchApiEditCard } from "../utils/fetchApiEditCard";
import { useNavigate } from "react-router-dom";

export interface CardInputProps {
  cardId?: string;
  card?: Card;
}
// Use 2 components for card input, instead of 1 with props ??
export const CardInput = (props: CardInputProps) => {
  const { cards, dispatch } = useContext(AppContext);
  const [backText, setBackText] = useState<string>(
    props.card ? props.card.back : ""
  );
  const [frontText, setFrontText] = useState<string>(
    props.card ? props.card.front : ""
  );
  const navigate = useNavigate();

  const onClickAddButton = async () => {
    if (frontText === "" || backText === "") {
      return;
    }
    const newCard = createCard(frontText, backText);
    await fetchApiPost<Card>("/api/cards", newCard);
    dispatch({ type: "add-card", card: newCard });
    setFrontText("");
    setBackText("");
  };

  const onClickUpdateButton = async (id: string) => {
    console.log("UPDATE CLICKED WITH " + id);
    let selectedCard =
      cards.find((card) => {
        return card.id === props.cardId;
      }) ?? createCard(frontText, backText); // not nice (new card if undefined)
    selectedCard.back = backText;
    selectedCard.front = frontText;
    await fetchApiEditCard("/api/cards", id, selectedCard);
    dispatch({ type: "update-card", id: id, card: selectedCard });
    navigate("/cards"); // allowed ?
  };

  if (props.cardId) {
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
        <button
          onClick={() =>
            onClickUpdateButton?.(props.cardId ? props.cardId : "")
          }
        >
          Update
        </button>
      </>
    );
  } else {
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
        <button onClick={() => onClickAddButton()}>Add</button>
      </>
    );
  }
};
