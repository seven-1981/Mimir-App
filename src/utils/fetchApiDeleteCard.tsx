export async function fetchApiDeleteCard(
  URL: string,
  id: string
): Promise<boolean> {
  const urlWithId = URL + "/" + id;
  try {
    const apiResponse = await fetch(urlWithId, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    return apiResponse.ok;
  } catch (error) {
    console.log("Error " + error + " during DELETE " + URL);
    return false;
  }
}
