import { ChangeEvent, useState } from "react";
import { CardListItem } from "./CardListItem";
import { useAPIGet } from "../hooks/useAPIHook";
import { makeAPIPost } from "../utils/makeAPIPost";
import { Card, createCard } from "../models/Card";

export const CardList = () => {
  const [backText, setBackText] = useState<String>("");
  const [frontText, setFrontText] = useState<String>("");
  const [cards, setCards] = useAPIGet<Card>("/api/cards");

  const eventChangeFront = (event: ChangeEvent<HTMLInputElement>) => {
    setFrontText(event.target.value);
  };

  const eventChangeBack = (event: ChangeEvent<HTMLInputElement>) => {
    setBackText(event.target.value);
  };

  const onClickAddButton = async () => {
    const newCardData = await makeAPIPost<Card>(
      "/api/cards",
      cards,
      createCard(frontText, backText)
    );
    setCards(newCardData);
    setFrontText("");
    setBackText("");
  };

  return (
    <>
      <input type="text" onChange={eventChangeFront} placeholder="Front" />
      <input type="text" onChange={eventChangeBack} placeholder="Back" />
      <button onClick={() => onClickAddButton()}>Add</button>
      <ul>
        {cards &&
          cards.map((card) => {
            return (
              <CardListItem
                card={card}
                key={card.id.toString()}
                isUpdateCard={false}
                onClickDeleteButton={(id: String) => {
                  console.log("Delete Button clicked with id " + id);
                }}
                onClickEditButton={(id: String) => {
                  console.log("Edit Button clicked with id " + id);
                }}
                onClickUpdateButton={(id: String) => {
                  console.log("Update Button called with id " + id);
                }}
              />
            );
          })}
      </ul>
    </>
  );
};
