export type HttpMethod = "DELETE" | "PUT" | "POST" | "PATCH";

export async function fetchApi(
  URL: string,
  httpMethod: HttpMethod,
  id: string
): Promise<boolean> {
  const urlWithId = URL + "/" + id;
  try {
    const apiResponse = await fetch(urlWithId, {
      method: httpMethod,
      headers: { "Content-Type": "application/json" },
    });
    return apiResponse.ok;
  } catch (error) {
    console.log("Error " + error + " during HTTP " + httpMethod + " of " + URL);
  }
  return false;
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
