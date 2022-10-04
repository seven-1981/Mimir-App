import { ApiGetGameResponse } from "./fetchApiGetDeleteGame";

export async function fetchApiPostGame(
  URL: string
): Promise<ApiGetGameResponse> {
  try {
    const apiResponse = await fetch(URL, {
      method: "POST",
    });
    if (apiResponse.ok) {
      const jsonData = await apiResponse.json();
      console.log(jsonData);
      return { game: jsonData, success: true };
    }
  } catch (error) {
    console.log("Error " + error + " during POST " + URL);
  }
  return { game: { front: "", cardCount: 0, solved: [] }, success: false };
}

export async function fetchApiPatchAnswer(
  URL: string,
  Answer: string
): Promise<ApiGetGameResponse> {
  try {
    const apiResponse = await fetch(URL, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Answer),
    });
    if (apiResponse.ok) {
      const jsonData = await apiResponse.json();
      console.log(jsonData);
      return { game: jsonData, success: true };
    }
  } catch (error) {
    console.log("Error " + error + " during POST " + URL);
  }
  return { game: { front: "", cardCount: 0, solved: [] }, success: false };
}
