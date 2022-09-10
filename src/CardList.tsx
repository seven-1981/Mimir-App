import { ChangeEvent, useState } from "react";
import { Card, CardProps } from "./Card";
import { useAPIGet } from "./useAPIHook";
import { makeAPIPost } from "./makeAPIPost";

const { v4: uuidV4 } = require("uuid");

export const CardList = () => {
  const [backText, setBackText] = useState<String>("");
  const [frontText, setFrontText] = useState<String>("");
  const { data } = useAPIGet("/api/cards");
  //const [cards, setCards] = useState<[]>(data);

  const eventChangeFront = (event: ChangeEvent<HTMLInputElement>) => {
    setFrontText(event.target.value);
  };

  const eventChangeBack = (event: ChangeEvent<HTMLInputElement>) => {
    setBackText(event.target.value);
  };

  const setCallback = (data: any) => {
    //setCards(data);
    console.log("CALLBACK CALLED");
  };

  const onClickAddButton = async () => {
    await makeAPIPost(
      "/api/cards",
      {
        id: uuidV4(),
        front: frontText,
        back: backText,
      },
      setCallback
    );
  };

  return (
    <>
      <input
        type="text"
        onChange={eventChangeFront}
        placeholder="FrontInput ?"
      />
      <input type="text" onChange={eventChangeBack} placeholder="BackInput ?" />
      <button onClick={onClickAddButton}>Add</button>
      <ul>
        {data &&
          data.map((item: CardProps) => {
            return (
              <Card
                id={item.id}
                key={uuidV4()}
                front={item.front}
                back={item.back}
                isUpdateCard={false}
                onClickDeleteButton={(id: String) => {
                  console.log("Delete Button clicked with id " + id);
                }}
                onClickEditButton={(id: String) => {
                  console.log("Edit Button clicked with id " + id);
                }}
                onClickUpdateButton={(id: String) => {
                  console.log("Update Button called with id " + id);
                }}
              />
            );
          })}
      </ul>
    </>
  );
};
