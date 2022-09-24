import { useContext, useEffect, useState } from "react";
import { Card } from "../models/Card";
import { AppContext } from "../store/context";
import { fetchApiEditCard } from "../utils/fetchApiEditCard";
import { useNavigate } from "react-router-dom";

export interface CardEditProps {
  card: Card;
}

export const CardEdit = (props: CardEditProps) => {
  const { dispatch } = useContext(AppContext);
  const [backText, setBackText] = useState<string>("");
  const [frontText, setFrontText] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const onMount = () => {
      setBackText(props.card.back);
      setFrontText(props.card.front);
    };
    onMount();
  }, []);

  const onClickUpdateButton = async (id: string) => {
    props.card.back = backText;
    props.card.front = frontText;
    await fetchApiEditCard("/api/cards", id, props.card); // Todo : add return value evaluation here
    dispatch({ type: "update-card", id: id, card: props.card });
    navigate("/cards"); // allowed ?
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
      <button onClick={() => onClickUpdateButton(props.card.id)}>Update</button>
    </>
  );
};
