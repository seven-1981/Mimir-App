import { useContext, useState } from "react";
import { fetchApiPost } from "../utils/fetchApiPost";
import { createCard } from "../models/Card";
import { AppContext } from "../store/context";

export const CardInput = () => {
  const { dispatch } = useContext(AppContext);
  const [backText, setBackText] = useState<string>("");
  const [frontText, setFrontText] = useState<string>("");

  const onClickAddButton = async () => {
    if (frontText === "" || backText === "") {
      return;
    }
    // Todo: check if card already exists here
    const newCard = createCard(frontText, backText);
    await fetchApiPost("/api/cards", newCard);
    dispatch({ type: "add-card", card: newCard });
    setFrontText("");
    setBackText("");
  };

  return (
    <>
      <input
        type="text"
        value={frontText}
        onChange={(e) => setFrontText(e.target.value)}
        placeholder="Front"
      />
      <input
        type="text"
        value={backText}
        onChange={(e) => setBackText(e.target.value)}
        placeholder="Back"
      />
      <button onClick={() => onClickAddButton()}>Add</button>
    </>
  );
};
