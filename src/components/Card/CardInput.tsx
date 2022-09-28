import { useContext, useState } from "react";
import { fetchApiPost } from "../../utils/fetchApiPost";
import { createCard } from "../../models/Card";
import { AppContext } from "../../store/context";
import { StyledButton, StyledInput, StyledInputForm } from "../styles";

export const CardInput = () => {
  const { cards, dispatch } = useContext(AppContext);
  const [backText, setBackText] = useState<string>("");
  const [frontText, setFrontText] = useState<string>("");

  const isCardEmpty = (front: string, back: string) => {
    return front === "" && back === "";
  };

  const cardExists = (front: string, back: string) => {
    return (
      cards.find((card) => {
        return card.front === front && card.back === back;
      }) !== undefined
    );
  };

  const onClickAddButton = async () => {
    if (isCardEmpty(frontText, backText)) return;
    if (cardExists(frontText, backText)) return;
    const newCard = createCard(frontText, backText);
    const success = await fetchApiPost("/api/cards", newCard);
    if (!success) {
      return;
    }
    dispatch({ type: "add-card", card: newCard });
    setFrontText("");
    setBackText("");
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
      <StyledButton onClick={() => onClickAddButton()}>Add</StyledButton>
    </StyledInputForm>
  );
};
