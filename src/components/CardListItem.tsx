import { Card } from "../models/Card";

export interface CardListItemProps {
  card: Card;
  onClickEditButton: (id: String) => void;
  onClickDeleteButton: (id: String) => void;
  isUpdateCard: boolean;
  onClickUpdateButton: (id: String) => void;
}

export const CardListItem = ({
  card,
  onClickEditButton,
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
          <button onClick={() => onClickEditButton(card.id)}>Edit</button>{" "}
          <button onClick={() => onClickDeleteButton(card.id)}>Delete</button>
        </div>
      </>
    );
  }
};
