export async function fetchApiPost<T>(
  URL: string,
  actualData: T[],
  dataToAdd: T
): Promise<T[]> {
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
  return [...actualData, dataToAdd];
}
