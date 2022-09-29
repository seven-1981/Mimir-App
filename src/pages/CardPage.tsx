import { useParams } from "react-router-dom";
import { AppContext } from "../store/context";
import { useContext } from "react";
import { Card } from "../models/Card";
import { CardInput } from "../components/Card/CardInput";

export const CardPage = () => {
  const { cardId } = useParams<string>();
  const { cards } = useContext(AppContext);

  const retrieveCardFromId = (): Card | undefined => {
    return cards.find((card) => {
      return card.id === cardId;
    });
  };

  const foundCard = retrieveCardFromId();

  if (!foundCard) {
    return (
      <div>
        <p>Card ID could not be found!</p>
      </div>
    );
  } else {
    return (
      <div>
        <CardInput card={foundCard} />
      </div>
    );
  }
};
