import { CardEditItem } from "../components/CardListItem";
import { useContext } from "react";
import { AppContext } from "../store/context";
import { useParams } from "react-router-dom";
import { createCard } from "../models/Card";

export const CardPage = () => {
  const { cards } = useContext(AppContext);
  const params = useParams();

  const selectedCard =
    cards.find((card) => {
      return card.id === params.cardId;
    }) ?? createCard("FRONT", "BACK"); // not nice (new card if undefined)

  return (
    <div>
      <CardEditItem
        card={selectedCard}
        onClickUpdateButton={() => console.log("UPD")}
      />
    </div>
  );
};
