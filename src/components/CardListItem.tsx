import { Card } from "../models/Card";
import {
  StyledCardList,
  StyledButton,
  StyledLink,
  StyledLabel,
} from "./styles";

export interface CardListItemProps {
  card: Card;
  onClickDeleteButton: (id: string) => void;
}

export const CardListItem = ({
  card,
  onClickDeleteButton,
}: CardListItemProps) => {
  return (
    <StyledCardList>
      <StyledLabel>{card.front}</StyledLabel>
      <StyledLabel>{card.back}</StyledLabel>
      <StyledLink to={card.id}>Edit</StyledLink>
      <StyledButton onClick={() => onClickDeleteButton(card.id)}>
        Delete
      </StyledButton>
    </StyledCardList>
  );
};
