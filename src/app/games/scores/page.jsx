'use client'
import {useState} from "react";

export default function Scores() {
    const ticTacToe = useState(myStorage.getItem("tictactoe"));
    const hangman = useState(myStorage.getItem("hangman"));
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow">

            <div className="stat">
                <div className="stat-title">Tic Tac Toe</div>
                <div className="stat-value">{ticTacToe}</div>
                <div className="stat-desc">{Date()}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Hangman</div>
                <div className="stat-value">{hangman}</div>
                <div className="stat-desc">{Date()}</div>
            </div>

        </div>
    )
}

export const myStorage = localStorage;
