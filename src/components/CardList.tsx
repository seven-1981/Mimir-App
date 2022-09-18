import { CardListItem } from "./CardListItem";
import { fetchApiGetCards } from "../utils/fetchApiGetCards";
import { fetchApiDeleteCard } from "../utils/fetchApiDeleteCard";
import { CardInput } from "./CardInput";
import { AppContext } from "../store/context";
import { useContext, useEffect } from "react";

export const CardList = () => {
  const { cards, dispatch } = useContext(AppContext);

  useEffect(() => {
    const onMount = async () => {
      const cards = await fetchApiGetCards("/api/cards");
      dispatch({ type: "set-cards", cards });
    };
    onMount();
  }, []);

  const onClickDeleteButton = async (id: string) => {
    console.log("Delete button clicked with id " + id);
    const newCardData = await fetchApiDeleteCard("/api/cards", id, cards); // return value ?
    dispatch({ type: "delete-card", id });
  };

  return (
    <>
      <CardInput />
      <ul>
        {cards &&
          cards.map((card) => {
            return (
              <CardListItem
                card={card}
                key={card.id.toString()}
                onClickDeleteButton={() =>
                  onClickDeleteButton(card.id.toString())
                }
              />
            );
          })}
      </ul>
    </>
  );
};
