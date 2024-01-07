'use client'

import {useState} from "react";

export default function Hangman() {
    const [scores, setScores] = useState(localStorage.getItem("hangman"));

    return (
        <>
            <h2 className="card-title">Hangman</h2>
            <p>Click the button to add scores for this game.</p>
            <div className="card-actions justify-between">
                <button className="btn btn-primary" onClick={() => {
                    setScores((parseInt(scores) + 10).toString());
                    localStorage.setItem("hangman", (parseInt(scores) + 10).toString());
                    console.log(localStorage.getItem("hangman"));
                }}>Add scores
                </button>
                <button className="btn glass">{scores}</button>
                <button className="btn btn-warning" onClick={() => {
                    setScores("0");
                    localStorage.setItem("hangman", "0");
                }}>Reset scores
                </button>
            </div>

        </>

    )
}