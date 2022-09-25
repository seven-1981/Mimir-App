export async function fetchApiEditCard(
  URL: string,
  id: string
): Promise<boolean> {
  const urlWithId = URL + "/" + id;
  try {
    const apiResponse = await fetch(urlWithId, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
    return apiResponse.ok;
  } catch (error) {
    console.log("Error " + error + " during EDIT " + URL);
    return false;
  }
}
