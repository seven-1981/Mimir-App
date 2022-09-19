import { Card } from "../models/Card";

export async function fetchApiEditCard(URL: string, id: string, newCard: Card) {
  const putAPIData = async () => {
    const urlWithId = URL + "/" + id;
    try {
      await fetch(urlWithId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCard),
      });
    } catch (error) {
      console.log(error);
    }
  };
  await putAPIData();
}
