import { CardListItem } from "./CardListItem";
import { useAPIGet } from "../hooks/useAPIHook";
import { Card } from "../models/Card";
import { fetchApiDeleteCard } from "../utils/fetchApiDeleteCard";
import { CardInput } from "./CardInput";
import { fetchApiEditCard } from "../utils/fetchApiEditCard";

export const CardList = () => {
  const [cards, setCards] = useAPIGet<Card>("/api/cards");

  const onClickDeleteButton = async (id: string) => {
    console.log("Delete button clicked with id " + id);
    const newCardData = await fetchApiDeleteCard("/api/cards", id, cards);
    setCards(newCardData);
  };

  const onClickEditButton = (id: string) => {
    console.log("Edit button clicked with id " + id);
  };

  return (
    <>
      <CardInput cards={cards} setCards={setCards} />
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
