import { Game } from "../../models/Game";
import { fetchApiGetGame } from "../../utils/fetchApiGetCards";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/context";
import { ResultsTable } from "./ResultsTable";

export const GameResult = () => {
  const { cardCount, dispatch } = useContext(AppContext);

  const [thisGame, setGame] = useState<Game>({
    front: "",
    cardCount: 0,
    solved: [],
  });

  const [fetched, setFetched] = useState(false);

  useEffect(() => {
    fetchGame().then((game) => {
      console.log(game);
      setGame(game);
      setFetched(true);
      console.log("LOADED");
    });
  }, [fetched]);

  const fetchGame = async (): Promise<Game> => {
    const { game, success } = await fetchApiGetGame("/api/game");
    if (!success) {
      return { front: "", cardCount: 0, solved: [] };
    }
    return game;
  };

  if (fetched) {
    return <ResultsTable game={thisGame} />;
  } else {
    return <div>Results loading...</div>;
  }
};
