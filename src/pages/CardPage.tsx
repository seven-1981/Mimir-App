import { useParams } from "react-router-dom";
import { CardEdit } from "../components/Card/CardEdit";
import { AppContext } from "../store/context";
import { useContext } from "react";
import { Card } from "../models/Card";

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
        <CardEdit card={foundCard} />
      </div>
    );
  }
};
