import React, { Component } from 'react';

import Input from '../../components/Input/Input';

class StudentForm extends Component {
  state = {
    quizTitle: '',
    date: '',
    score: '',
  } 

  onQuizTitleChange = (evt) => {
    const quizTitle = evt.target.value;
    this.setState({
      quizTitle: quizTitle
    })
  }

  onDateChange = (evt) => {
    const date = evt.target.value;
    this.setState({
      date: date
    })
  }

  onScoreChange = (evt) => {
    const score = parseFloat(evt.target.value);
    this.setState({
      score: score
    })
  }

  render() {
    return (
      <div className="pa1 h-100 w-100 pt2 helvetica mr0">
        <fieldset id="input_grade" className="ba b--transparent ph0 mh0 w-100">
          <Input
            label={"Quiz Title"}
            type={"text"}
            changed={(evt) => this.onQuizTitleChange(evt)}
            value={this.state.quizTitle}
            placeholder={"Your title"}
          />
          <Input
            label={"Date"}
            type={"date"}
            changed={(evt) => this.onDateChange(evt)}
            value={this.state.date}
          />
          <Input
            label={"Score"}
            type={"number"}
            changed={(evt) => this.onScoreChange(evt)}
            value={this.state.score}
          />
        </fieldset>
        <div className="mt3">
          <button 
            //{className="b ph3 pv2 input-reset ba b--black bg-transparent grow hover-blue pointer f6 br2"} 
            className="db pointer f6 link br2 ph3 pv2 white bg-blue bw0 dim"
            >
            Submit
          </button>
        </div>
      </div>        
    );
  }
}

export default StudentForm;