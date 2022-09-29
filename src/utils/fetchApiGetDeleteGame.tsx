import { Game } from "../models/Game";

export interface ApiGetGameResponse {
  game: Game;
  success: boolean;
}

export async function fetchApiGetGame(
  URL: string
): Promise<ApiGetGameResponse> {
  try {
    const apiResponse = await fetch(URL);
    console.log(apiResponse);
    if (apiResponse.ok) {
      const jsonData = await apiResponse.json();
      console.log(jsonData);
      return { game: jsonData, success: true };
    }
  } catch (error) {
    console.log("Error " + error + " during GET " + URL);
  }
  return { game: { front: "", cardCount: 0, solved: [] }, success: false };
}
