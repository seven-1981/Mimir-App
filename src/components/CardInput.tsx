import { ChangeEvent, useState } from "react";
import { fetchApiPost } from "../utils/fetchApiPost";
import { Card, createCard } from "../models/Card";

export interface CardInputProps {
  cards: Card[];
  setCards: (cards: Card[]) => void;
}

export const CardInput = (props: CardInputProps) => {
  const [backText, setBackText] = useState<string>("");
  const [frontText, setFrontText] = useState<string>("");

  const eventChangeFront = (event: ChangeEvent<HTMLInputElement>) => {
    setFrontText(event.target.value);
  };

  const eventChangeBack = (event: ChangeEvent<HTMLInputElement>) => {
    setBackText(event.target.value);
  };

  const onClickAddButton = async () => {
    if (frontText === "" || backText === "") {
      return;
    }
    const newCardData = await fetchApiPost<Card>(
      "/api/cards",
      props.cards,
      createCard(frontText, backText)
    );
    props.setCards(newCardData);
    setFrontText("");
    setBackText("");
  };

  return (
    <>
      <input
        type="text"
        value={frontText}
        onChange={eventChangeFront}
        placeholder="Front"
      />
      <input
        type="text"
        value={backText}
        onChange={eventChangeBack}
        placeholder="Back"
      />
      <button onClick={() => onClickAddButton()}>Add</button>
    </>
  );
};
