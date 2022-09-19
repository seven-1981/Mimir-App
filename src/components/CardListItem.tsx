import { Card } from "../models/Card";
import { Link } from "react-router-dom";

export interface CardListItemProps {
  card: Card;
  onClickDeleteButton: (id: string) => void;
}

export const CardListItem = ({
  card,
  onClickDeleteButton,
}: CardListItemProps) => {
  return (
    <>
      <div>
        {card.front} {card.back}
        <Link to={card.id}>Edit</Link>
        <button onClick={() => onClickDeleteButton(card.id)}>Delete</button>
      </div>
    </>
  );
};

export interface CardEditItemProps {
  card: Card;
  onClickUpdateButton: (id: string) => void;
}

export const CardEditItem = ({
  card,
  onClickUpdateButton,
}: CardEditItemProps) => {
  return (
    <>
      <div>
        {card.front} {card.back}
        <button onClick={() => onClickUpdateButton(card.id)}>Update</button>
      </div>
    </>
  );
};
