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

export interface ApiWithDataResponse<T> {
  data: T | undefined;
  success: boolean;
}

export async function fetchApiWithData<DataType, ReturnType>(
  URL: string,
  httpMethod: HttpMethod,
  data: DataType
): Promise<ApiWithDataResponse<ReturnType>> {
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

export interface ApiGetResponse<Type> {
  data: Type;
  success: boolean;
}

export async function fetchApiGet<Type>(
  URL: string,
  emptyData: Type
): Promise<ApiGetResponse<Type>> {
  try {
    const apiResponse = await fetch(URL);
    if (apiResponse.ok) {
      const jsonData: Type = await apiResponse.json();
      return { data: jsonData, success: true };
    }
  } catch (error) {
    console.log("Error " + error + " during GET " + URL);
  }
  return { data: emptyData, success: false };
}
