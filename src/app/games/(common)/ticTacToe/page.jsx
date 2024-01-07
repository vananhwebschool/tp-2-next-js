'use client'

import {useState} from "react";

export default function TicTacToe() {
   
    const [scores, setScores] = useState(localStorage.getItem("tictactoe"));

    return (

        <>
            <h2 className="card-title">Tic Tac Toe</h2>
            <p>Click the button to add scores for this game.</p>
            <div className="card-actions justify-between">
                <button className="btn btn-primary" onClick={() => {
                    setScores((parseInt(scores) + 10).toString());
                    localStorage.setItem("tictactoe", (parseInt(scores) + 10).toString());
                    console.log(localStorage.getItem("tictactoe"));
                }}>Add scores
                </button>
                <button className="btn glass">{scores}</button>
                <button className="btn btn-warning" onClick={() => {
                    setScores("0");
                    localStorage.setItem("tictactoe", "0")
                }}>Reset scores
                </button>
            </div>

        </>


    )
}