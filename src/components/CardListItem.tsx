import { Card } from "../models/Card";
import { StyledCardList, StyledButton, StyledLink } from "./styles";

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
      <StyledCardList>
        <p>{card.front}</p>
        <p>{card.back}</p>
        <StyledLink to={card.id}>Edit</StyledLink>
        <StyledButton onClick={() => onClickDeleteButton(card.id)}>
          Delete
        </StyledButton>
      </StyledCardList>
    </>
  );
};
