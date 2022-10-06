import { emptyGame, Game } from "../models/Game";

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
      console.log(jsonData);
      return { game: jsonData, success: true };
    }
  } catch (error) {
    console.log("Error " + error + " during GET " + URL);
  }
  return { game: emptyGame, success: false };
}

export async function fetchApiPatchAnswer(
  URL: string,
  answer: object
): Promise<ApiGetGameResponse> {
  try {
    const apiResponse = await fetch(URL, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(answer),
    });
    if (apiResponse.ok) {
      const jsonData = await apiResponse.json();
      return { game: jsonData, success: true };
    }
  } catch (error) {
    console.log("Error " + error + " during PATCH " + URL);
  }
  return { game: emptyGame, success: false };
}
