import {GameCard} from "./GameCard";

export interface Game {
    front: String;
    cardCount: number;
    solved: GameCard[];
}