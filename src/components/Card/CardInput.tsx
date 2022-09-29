import { useContext, useEffect, useState } from "react";
import { fetchApiPost } from "../../utils/fetchApiPost";
import { Card, createCard } from "../../models/Card";
import { AppContext } from "../../store/context";
import { StyledButton, StyledInput, StyledInputForm } from "../styles";
import { useNavigate } from "react-router-dom";
import { fetchApiEditCard } from "../../utils/fetchApiEditCard";

export interface CardInputProps {
  card?: Card;
}

export const CardInput = (props: CardInputProps) => {
  const { cards, dispatch } = useContext(AppContext);
  const [backText, setBackText] = useState<string>("");
  const [frontText, setFrontText] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (props.card) {
      setBackText(props.card.back);
      setFrontText(props.card.front);
    }
  }, []);

  const definedCardId = props.card ? props.card.id : "";

  const cardExistsOrEmpty = (front: string, back: string) => {
    return (
      cards.find((card) => {
        return (
          card.front === front &&
          card.back === back &&
          card.id !== definedCardId
        );
      }) !== undefined ||
      front === "" ||
      back === ""
    );
  };

  const onClickAddButton = async () => {
    if (cardExistsOrEmpty(frontText, backText)) return;
    const newCard = createCard(frontText, backText);
    const success = await fetchApiPost<Card>("/api/cards", newCard);
    if (!success) {
      return;
    }
    dispatch({ type: "add-card", card: newCard });
    setFrontText("");
    setBackText("");
  };

  const onClickUpdateButton = async (id: string) => {
    if (cardExistsOrEmpty(frontText, backText)) return;
    if (props.card) {
      props.card.back = backText;
      props.card.front = frontText;

      const success = await fetchApiEditCard("/api/cards", id);
      if (!success) {
        return;
      }
      dispatch({ type: "update-card", id: id, card: props.card });
      navigate("/cards");
    }
  };

  const onClickAddOrUpdateButton = async (id: string) => {
    if (props.card) {
      await onClickUpdateButton(id);
    } else {
      await onClickAddButton();
    }
  };

  return (
    <StyledInputForm>
      <StyledInput
        type="text"
        value={frontText}
        onChange={(e) => setFrontText(e.target.value)}
        placeholder="Front"
      />
      <StyledInput
        type="text"
        value={backText}
        onChange={(e) => setBackText(e.target.value)}
        placeholder="Back"
      />
      <StyledButton onClick={() => onClickAddOrUpdateButton(definedCardId)}>
        {props.card ? "Update" : "Add"}
      </StyledButton>
    </StyledInputForm>
  );
};
