import {GameCardProps} from "./GameCardProps";

export interface GameProps {
    front: String;
    cardCount: number;
    solved: GameCardProps[];
}