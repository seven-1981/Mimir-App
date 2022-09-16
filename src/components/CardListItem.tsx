import { Card } from "../models/Card";
import { Link } from "react-router-dom";

export interface CardListItemProps {
  card: Card;
  onClickDeleteButton: (id: String) => void;
  isUpdateCard: boolean;
  onClickUpdateButton: (id: String) => void;
}

export const CardListItem = ({
  card,
  onClickDeleteButton,
  isUpdateCard,
  onClickUpdateButton,
}: CardListItemProps) => {
  if (isUpdateCard) {
    return (
      <>
        <div>
          {card.front} {card.back}
          <button onClick={() => onClickUpdateButton(card.id)}>Update</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div>
          {card.front} {card.back}
          <Link to={card.id}>Edit</Link>
          <button onClick={() => onClickDeleteButton(card.id)}>Delete</button>
        </div>
      </>
    );
  }
};
