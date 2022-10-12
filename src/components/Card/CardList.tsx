import { fetchApi } from "../../utils/fetchApi";
import { CardInput } from "./CardInput";
import { AppContext } from "../../store/context";
import { useContext } from "react";
import { StyledLabel } from "../styles";
import { CardListItem } from "./CardListItem";

export const CardList = () => {
  const { cards, dispatch } = useContext(AppContext);

  const onClickDeleteButton = async (id: string) => {
    const success = await fetchApi("/api/cards", "DELETE", id);
    if (!success) {
      return;
    }
    dispatch({ type: "delete-card", id });
  };

  return (
    <div>
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
    </div>
  );
};
