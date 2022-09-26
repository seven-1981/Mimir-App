import { CardListItem } from "./CardListItem";
import { fetchApiDeleteCard } from "../utils/fetchApiDeleteCard";
import { CardInput } from "./CardInput";
import { AppContext } from "../store/context";
import { useContext } from "react";

export const CardList = () => {
  const { cards, dispatch } = useContext(AppContext);

  const onClickDeleteButton = async (id: string) => {
    const success = await fetchApiDeleteCard("/api/cards", id);
    if (!success) {
      return;
    }
    dispatch({ type: "delete-card", id });
  };

  return (
    <>
      <CardInput />
      <p>{!cards && "NO CARDS FOUND"}</p>
      <ul>
        {cards &&
          cards.map((card) => {
            return (
              <CardListItem
                card={card}
                key={card.id}
                onClickDeleteButton={() => onClickDeleteButton(card.id)}
              />
            );
          })}
      </ul>
    </>
  );
};
