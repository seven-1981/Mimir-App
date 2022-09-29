export async function fetchApiPost<T>(
  URL: string,
  dataToAdd: T
): Promise<boolean> {
  try {
    console.log(dataToAdd);
    console.log(JSON.stringify(dataToAdd));
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
