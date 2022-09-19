import { Card } from "../models/Card";

export const fetchApiGetCards = async (URL: string): Promise<Card[]> => {
  try {
    const apiResponse = await fetch(URL);
    if (apiResponse.ok) {
      const jsonData = await apiResponse.json();
      return jsonData;
    }
  } catch (error) {
    console.log("Error " + error + " during GET " + URL);
  }
  return []; // Todo: Should we be able to distinguish between empty and error here ?
};
