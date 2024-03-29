'use client'
export default function Scores() {
    const ticTacToe = localStorage.getItem("tictactoe");
    const hangman = localStorage.getItem("hangman");
    return (
        <div className="stats stats-vertical lg:stats-horizontal shadow">

            <div className="stat">
                <div className="stat-title">Tic Tac Toe</div>
                <div className="stat-value">{ticTacToe}</div>
            </div>

            <div className="stat">
                <div className="stat-title">Hangman</div>
                <div className="stat-value">{hangman}</div>
            </div>

        </div>
    )
}


