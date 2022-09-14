import { ChangeEvent, useState } from "react";
import { CardListItem } from "./CardListItem";
import { useAPIGet } from "../hooks/useAPIHook";
import { fetchApiPost } from "../utils/fetchApiPost";
import { Card, createCard } from "../models/Card";
import { fetchApiDeleteCard } from "../utils/fetchApiDeleteCard";

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
    const newCardData = await fetchApiPost<Card>(
      "/api/cards",
      cards,
      createCard(frontText, backText)
    );
    setCards(newCardData);
    setFrontText("");
    setBackText("");
  };

  const onClickDeleteButton = async (id: string) => {
    console.log("Delete button called with id " + id);
    const newCardData = await fetchApiDeleteCard("/api/cards", id, cards);
    setCards(newCardData);
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
                onClickDeleteButton={() =>
                  onClickDeleteButton(card.id.toString())
                }
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
