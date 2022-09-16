import { CardListItem } from "../components/CardListItem";
import { createCard } from "../models/Card"; // remove this

export const CardPage = () => {
  return (
    <div>
      <CardListItem
        card={createCard("", "")}
        isUpdateCard={true}
        onClickDeleteButton={() => console.log("DEL")}
        onClickUpdateButton={() => console.log("UPD")}
      />
    </div>
  );
};
