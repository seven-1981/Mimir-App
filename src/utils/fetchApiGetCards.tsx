import { Card } from "../models/Card";

export const fetchApiGetCards = async (URL: string): Promise<Card[]> => {
  try {
    const apiResponse = await fetch(URL);
    if (apiResponse.ok) {
      const jsonData = await apiResponse.json();
      console.log(jsonData);
      return jsonData;
    }
  } catch (error) {
    console.log("Error " + error + " during fetching " + URL);
  }
  return [];
};
