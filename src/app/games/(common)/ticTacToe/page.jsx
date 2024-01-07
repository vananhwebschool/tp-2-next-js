'use client'

import {useState} from "react";
import {myStorage} from "@/app/games/scores/page";

export default function TicTacToe() {
    const [scores, setScores] = useState(myStorage.getItem("tictactoe"));

    return (

        <>
            <h2 className="card-title">Tic Tac Toe</h2>
            <p>Click the button to add scores for this game.</p>
            <div className="card-actions justify-between">
                <button className="btn btn-primary" onClick={() => {
                    setScores((parseInt(scores) + 10).toString());
                    myStorage.setItem("tictactoe", (parseInt(scores) + 10).toString());
                    console.log(myStorage.getItem("tictactoe"));
                }}>Add scores
                </button>
                <button className="btn glass">{scores}</button>
                <button className="btn btn-warning" onClick={() => {
                    setScores("0");
                    myStorage.setItem("tictactoe", "0")
                }}>Reset scores
                </button>
            </div>

        </>


    )
}