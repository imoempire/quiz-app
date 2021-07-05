import React, { Component } from 'react';
import './App.css'
import quizService from './Components/index';
import QuestionBox from './Components/QuestionBox'
import Result from './Components/Result';

class App extends Component {
    state={
      questionBank: [],
      score: 0,
      responses: 0
    };
  getQuestions =()=>{
    quizService().then(question=>{
      this.setState({
        questionBank: question
      })
    })
  };
  computeAnswer=(answer, correctAnswer)=>{
    if(answer === correctAnswer ){
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 7 ? this.state.responses + 1 : 7
    })
  }
  playAgain=()=>{
      this.getQuestions();
      this.setState({
      responses: 0,
      score: 0,
    })
  }
  componentDidMount(){
    this.getQuestions();
  }
  render() {
    return (
      <div className="Quiz">
        <div className="Container">
          <h1>Quiz App</h1><button><small>By IMO/EMP design</small></button>
          {this.state.questionBank.length > 0 &&
           this.state.responses < 7 && 
           this.state.questionBank.map(
            ({question, answers, correct, questionId}) => (
              <QuestionBox 
              question={question} 
              option={answers} 
              key={questionId} 
              Selected={answer => this.computeAnswer(answer, correct)
              }
              />
            )
          )}
        </div>
        {this.state.responses === 7 ? (<Result score={this.state.score} playAgain={this.playAgain} />) : null}
      </div>
    );
  }
}

export default App;
