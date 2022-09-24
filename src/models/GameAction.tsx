import {GameCard} from "./GameCard";

type SetFront = {
    type: "set-front";
    front: string;
};

type SetCardCount = {
    type: "set-cardCount";
    value: number;
};

type SetSolved = {
    type: "set-solved";
    solved: GameCard[];
};


export type GameAction = SetFront | SetCardCount | SetSolved