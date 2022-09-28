import { Game } from "../models/Game";

export async function fetchApiPostPatchGame(
  URL: string,
  game: Game,
  startGame: boolean
): Promise<boolean> {
  if (startGame) {
    try {
      const apiResponse = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(game),
      });
      return apiResponse.ok;
    } catch (error) {
      console.log("Error " + error + " during POST " + URL);
    }
    return false;
  } else {
    console.log("CardCount: " + game.cardCount);
    console.log("Answer: " + game.solved[game.cardCount].answer);
    try {
      const apiResponse = await fetch(URL, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(game.solved[game.cardCount].answer),
      });
      return apiResponse.ok;
    } catch (error) {
      console.log("Error " + error + " during POST " + URL);
    }
    return false;
  }
}
