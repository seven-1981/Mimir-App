import {Game, runningGame} from "../models/Game";
import {GameAction} from "../models/GameAction";


export function gameReducer(game: runningGame, action: GameAction): runningGame {
    switch (action.type) {
        case "set-front":
            return {
                ...game,
                front: action.front
            };
        case "set-cardCount":
            return {
                ...game,
                cardCount: action.value
            };
        case "set-solved":
            return {
                ...game,
                solved: action.solved
            };
        case "clear-game":
            return {
                ...game,
                front: "",
                cardCount: 0,
                solved: []
            };
        default:
            return game;
    }
}