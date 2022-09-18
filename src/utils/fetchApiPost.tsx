import { Card } from "../models/Card";

export async function fetchApiPost(URL: string, dataToAdd: Card) {
  const postAPIData = async () => {
    try {
      const apiResponse = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToAdd),
      });
      await apiResponse.json();
    } catch (error) {
      console.log(error);
    }
  };
  await postAPIData();
}
