import { fetchApi } from "../../utils/fetchApi";
import { CardInput } from "./CardInput";
import { AppContext } from "../../store/context";
import { useContext } from "react";
import { CardListItem } from "./CardListItem";
import { URL_API_CARDS } from "../../pages/URLs";

export const CardList = () => {
  const { cards, dispatch } = useContext(AppContext);

  const onClickDeleteButton = async (id: string) => {
    const success = await fetchApi(URL_API_CARDS, "DELETE", id);
    if (!success) {
      return;
    }
    dispatch({ type: "delete-card", id });
  };

  return (
    <div>
      <CardInput />
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
