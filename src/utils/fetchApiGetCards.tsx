import { Card } from "../models/Card";

export interface ApiGetCardsResponse {
  cards: Card[];
  success: boolean;
}

export async function fetchApiGetCards(
  URL: string
): Promise<ApiGetCardsResponse> {
  try {
    const apiResponse = await fetch(URL);
    if (apiResponse.ok) {
      const jsonData = await apiResponse.json();
      return { cards: jsonData, success: true };
    }
  } catch (error) {
    console.log("Error " + error + " during GET " + URL);
  }
  return { cards: [], success: false };
}
