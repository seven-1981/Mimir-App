import { useParams } from "react-router-dom";
import { CardInput } from "../components/CardInput";
import { useContext } from "react";
import { AppContext } from "../store/context";

export const CardPage = () => {
  const params = useParams();
  const { cards } = useContext(AppContext);

  const selectedCard = cards.find((card) => {
    return card.id === params.cardId;
  });

  return (
    <div>
      <CardInput cardId={params.cardId} card={selectedCard} />
    </div>
  );
};
