import { Game } from "../models/Game";

export async function fetchApiPostPatchGame(URL: string, game: Game, startGame: boolean ) {
  if(startGame === true) {
    const post = async (): Promise<boolean> => {
      try {
        const apiResponse = await fetch(URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(game),
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
  else {
    console.log("CardCount: " + game.cardCount);
    console.log("Answer: " + game.solved[game.cardCount].answer);
    const patch = async (): Promise<boolean> => {
      try {
        const apiResponse = await fetch(URL, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(game.solved[game.cardCount].answer),
        });
        return apiResponse.ok;
      } catch (error) {
        console.log("Error " + error + " during POST " + URL);
        return false;
      }
    };
    const response = await patch();
    return response;
  }
}
