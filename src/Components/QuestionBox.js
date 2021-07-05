import React, { useState } from 'react'

const QuestionBox=({question, option, Selected})=>{
  const[answer, setAnswer]= useState(option);
  return (
    <div className="QuestionBox">
      <div className="questions">
        {question}
      </div>
      {answer.map((text, index)=> (
        <button key={index} className="answerBtn"
        onClick={ ()=>{
          setAnswer([text])
          Selected(text)
        }
        }>
          {text}
        </button>
      ))}
    </div>
  )
}

export default QuestionBox;