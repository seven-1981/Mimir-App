import {GameCard} from "./GameCard";
import {GameAction} from "./GameAction";

export interface Game {
    front: String;
    cardCount: number;
    solved: GameCard[];
}

export interface runningGame extends Game{
    dispatch: (action: GameAction) => void
}