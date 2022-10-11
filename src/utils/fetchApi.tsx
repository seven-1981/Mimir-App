import { ApiGetGameResponse } from "./fetchApiGetDeleteGame";
import { emptyGame } from "../models/Game";

export type HttpMethod = "DELETE" | "PUT" | "POST" | "PATCH";

export async function fetchApi(
  URL: string,
  httpMethod: HttpMethod,
  id?: string
): Promise<boolean> {
  const fetchUrl = URL + (id ? "/" + id : "");
  try {
    const apiResponse = await fetch(fetchUrl, {
      method: httpMethod,
      headers: { "Content-Type": "application/json" },
    });
    return apiResponse.ok;
  } catch (error) {
    console.log("Error " + error + " during HTTP " + httpMethod + " of " + URL);
  }
  return false;
}

export async function fetchApiPost(URL: string): Promise<ApiGetGameResponse> {
  try {
    const apiResponse = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
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

export async function fetchApiWithData<T>(
  URL: string,
  httpMethod: HttpMethod,
  dataToAdd: T
): Promise<boolean> {
  try {
    const apiResponse = await fetch(URL, {
      method: httpMethod,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataToAdd),
    });
    return apiResponse.ok;
  } catch (error) {
    console.log("Error " + error + " during HTTP " + httpMethod + " of " + URL);
  }
  return false;
}
