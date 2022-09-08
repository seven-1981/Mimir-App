import { CardList } from "./CardList";
import { useState } from "react";


export const CardsScreen = () => {

    const [backText, setBackText] = useState<String>('');
    const [frontText, setFrontText] = useState<String>('');

    const onChangeBack = (text: String) => {
        setBackText(text);
        console.log("Back changed to " + text);
    }

    const onChangeFront = (text: String) => {
        setFrontText(text);
        console.log("Front changed to " + text);
    }

    return (
      <div>
          <CardList
              onChangeBack={onChangeBack}
              onChangeFront={onChangeFront}
              onClickAddButton={() => {
                  console.log("Add button clicked. The text added is front: " + frontText + " and back: " + backText);
                } }
          />
      </div>
    );
}