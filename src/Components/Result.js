import React from "react";

const Result = ({score, playAgain}) => (
  <div className="score-board">
    <div className="score">You scored {score} / 7 correct answers!</div>
    <button className="playBtn" onClick={playAgain}>
      Let's do this again!
    </button>
  </div>
);

export default Result;
