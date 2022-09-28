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
    if (apiResponse.ok) {
      const jsonData = await apiResponse.json();
      return { game: jsonData, success: true };
    }
  } catch (error) {
    console.log("Error " + error + " during GET " + URL);
  }
  return { game: { front: "", cardCount: 0, solved: [] }, success: false };
}

export async function fetchApiDeleteGame(URL: string): Promise<boolean> {
  return true;
}

export async function fetchApiPostPatchGame(
  URL: string,
  game: Game,
  startGame: boolean
) {
  if (startGame === true) {
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
  } else {
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
