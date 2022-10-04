export async function fetchApiPost<T>(
  URL: string,
  dataToAdd: T
): Promise<boolean> {
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
}
