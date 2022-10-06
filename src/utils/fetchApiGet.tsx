import { Card } from "../models/Card";
import { emptyGame, Game } from "../models/Game";

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

export interface ApiGetGameResponse {
  game: Game;
  success: boolean;
}

export async function fetchApiGetGame(
  URL: string
): Promise<ApiGetGameResponse> {
  try {
    const apiResponse = await fetch(URL);
    if (apiResponse.ok) {
      const jsonData = await apiResponse.json();
      return { game: jsonData, success: true };
    }
  } catch (error) {
    console.log("Error " + error + " during GET " + URL);
  }
  return { game: emptyGame, success: false };
}
