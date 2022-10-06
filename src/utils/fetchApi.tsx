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

export interface FetchApiWithDataResponse<T> {
  data: T | undefined;
  success: boolean;
}

export async function fetchApiWithData<DataType, ReturnType>(
  URL: string,
  httpMethod: HttpMethod,
  data: DataType
): Promise<FetchApiWithDataResponse<ReturnType>> {
  try {
    const apiResponse = await fetch(URL, {
      method: httpMethod,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (apiResponse.ok) {
      const jsonData: ReturnType = await apiResponse.json();
      return { data: jsonData, success: true };
    }
  } catch (error) {
    console.log("Error " + error + " during HTTP " + httpMethod + " of " + URL);
  }
  return { data: undefined, success: false };
}
