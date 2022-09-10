import { CardModel } from "./CardModel";

export type PostAPIResponse = {
  status: Number;
  statusText: String;
  data: any;
  error: Boolean;
};

export async function makeAPIPost(
  URL: string,
  card: CardModel,
  setCallback: (data: any) => void
): Promise<PostAPIResponse> {
  let response: PostAPIResponse = {
    status: -1,
    statusText: "Error",
    data: null,
    error: false,
  };
  const postAPIData = async () => {
    try {
      const apiResponse = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(card),
      });
      response.data = await apiResponse.json();
      setCallback(response.data);
      response.status = apiResponse.status;
      response.statusText = apiResponse.statusText;
    } catch (error) {
      response.error = true;
    }
  };
  await postAPIData();
  return response;
}
