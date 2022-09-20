import { Game } from "../models/Game";

// Todo: Redundant with fetchApiPost
export async function fetchApiPostGame(URL: string, gameToAdd: Game) {
  const post = async (): Promise<boolean> => {
    try {
      const apiResponse = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(gameToAdd),
      });
      return apiResponse.ok;
    } catch (error) {
      console.log("Error " + error + " during POST " + URL);
      return false;
    }
  };
  const response = await post();
  return response;
}
