import { useEffect, useState } from "react";

export function useAPIGet<T>(URL: string = ""): [T[], (dummy: T[]) => void] {
  const [data, setData] = useState<T[]>([]);

  const getAPIData = async () => {
    try {
      const apiResponse = await fetch(URL);
      const json = await apiResponse.json();
      console.log(
        "Fetched " + URL + " with response " + apiResponse.statusText
      );
      setData(json);
      console.log(json);
    } catch (error) {
      console.log("Error " + error + " during fetching " + URL);
    }
  };

  useEffect(() => {
    getAPIData();
  }, []);

  return [data, setData];
}
