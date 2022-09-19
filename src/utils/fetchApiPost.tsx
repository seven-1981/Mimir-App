import { Card } from "../models/Card";

export async function fetchApiPost(URL: string, dataToAdd: Card) {
  const postAPIData = async (): Promise<boolean> => {
    try {
      const apiResponse = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToAdd),
      });
      return apiResponse.ok;
    } catch (error) {
      console.log("Error " + error + " during POST " + URL);
      return false;
    }
  };
  const response = await postAPIData();
  return response;
}
