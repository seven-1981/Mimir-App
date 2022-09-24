import { Card } from "../models/Card";

export async function fetchApiDeleteCard(
  URL: string,
  id: string,
  actualData: Card[]
): Promise<boolean> {
  const urlWithId = URL + "/" + id;
  const cardToDelete = actualData.find((card) => {
    return card.id === id;
  });
  try {
    const apiResponse = await fetch(urlWithId, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cardToDelete),
    });
    return apiResponse.ok;
  } catch (error) {
    console.log("Error " + error + " during DELETE " + URL);
    return false;
  }
}
