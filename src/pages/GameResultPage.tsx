import {useContext, useState} from "react";
import {GameContext} from "../store/gameContext";


export const GameResultPage = () => {
    const {solved} = useContext(GameContext);

    return (
        <div>
            <div>
                <label> Front </label> <label> Back </label>
                <label> Your Answer </label> <label> Accepted </label>
            </div>
            <div>
                <label> {solved[1].front} </label> <label> {solved[1].back} </label>
                <label> {solved[1].answer} </label> <label> {solved[1].accepted} </label>
            </div>
            <div>
                <label> {solved[2].front} </label> <label> {solved[2].back} </label>
                <label> {solved[2].answer} </label> <label> {solved[2].accepted} </label>
            </div>
            <div>
                <label> {solved[3].front} </label> <label> {solved[3].back} </label>
                <label> {solved[3].answer} </label> <label> {solved[3].accepted} </label>
            </div>
        </div>
    )
}

