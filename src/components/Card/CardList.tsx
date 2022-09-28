import { fetchApiDeleteCard } from "../../utils/fetchApiDeleteCard";
import { CardInput } from "./CardInput";
import { AppContext } from "../../store/context";
import { useContext } from "react";
import { StyledLabel } from "../styles";
import {CardListItem} from "./CardListItem";

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
      <StyledLabel>{!cards && "NO CARDS FOUND"}</StyledLabel>
      <div>
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
      </div>
    </>
  );
};
