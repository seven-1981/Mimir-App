import { Card, createCard } from "../models/Card";

export async function fetchApiEditCard(
  URL: string,
  id: string,
  actualData: Card[],
  newCard: Card
): Promise<Card[]> {
  const putAPIData = async () => {
    const urlWithId = URL + "/" + id;
    const cardToUpdate = actualData.find((card) => {
      return card.id === id;
    });
    try {
      await fetch(urlWithId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cardToUpdate),
      });
    } catch (error) {
      console.log(error);
    }
  };
  await putAPIData();

  return actualData.map((card) => {
    return card.id === id ? createCard(newCard.front, newCard.back) : card;
  });
}
