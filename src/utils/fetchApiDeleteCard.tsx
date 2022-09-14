import { Card } from "../models/Card";

export async function fetchApiDeleteCard(
  URL: string,
  id: string,
  actualData: Card[]
): Promise<Card[]> {
  const deleteAPIData = async () => {
    const urlWithId = URL + "/" + id;
    const cardToDelete = actualData.find((card) => {
      return card.id === id;
    });
    try {
      await fetch(urlWithId, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cardToDelete),
      });
    } catch (error) {
      console.log(error);
    }
  };
  await deleteAPIData();
  return actualData.filter((card) => {
    return card.id !== id;
  });
}
