import { Card } from "../models/Card";

export async function fetchApiEditCard(
  URL: string,
  id: string,
  newCard: Card
): Promise<boolean> {
  const urlWithId = URL + "/" + id;
  try {
    const apiResponse = await fetch(urlWithId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCard),
    });
    return apiResponse.ok;
  } catch (error) {
    console.log("Error " + error + " during EDIT " + URL);
    return false;
  }
}
