import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionType from '../../store/action';
import Input from '../../components/Input/Input';

class StudentForm extends Component {
  state = {
    quiz: {
      title: '',
      date: '',
      score: '',
    }
  } 

  onQuizChange = (evt, type) => {
    const newQuiz = {...this.state.quiz};
    newQuiz[type] = evt.target.value;
    this.setState({
      quiz: newQuiz
    })
  }

  // onDateChange = (evt) => {
  //   const date = evt.target.value;
  //   const newQuiz = {...this.state.quiz};
  //   newQuiz.date = date;
  //   this.setState({
  //     quiz: newQuiz
  //   })
  // }

  // onScoreChange = (evt) => {
  //   const score = parseFloat(evt.target.value);
  //   const newQuiz = {...this.state.quiz}
  //   newQuiz
  //   this.setState({
  //     score: score
  //   })
  // }

  render() {
    return (
      <div className="pa1 h-100 w-100 pt2 helvetica mr0">
        <fieldset id="input_grade" className="ba b--transparent ph0 mh0 w-100">
          <Input
            label={"Quiz Title"}
            type={"text"}
            changed={(evt) => this.props.onQuizChange(evt.target.value, 'title')}
            value={this.props.quiz.title}
            placeholder={"Your title"}
          />
          <Input
            label={"Date"}
            type={"date"}
            changed={(evt) => this.props.onQuizChange(evt.target.value, 'date')}
            value={this.props.quiz.date}
          />
          <Input
            label={"Score"}
            type={"number"}
            changed={(evt) => this.props.onQuizChange(evt.target.value, 'score')}
            value={this.props.quiz.score}
          />
        </fieldset>
        <div className="mt3">
          <button 
            className="db pointer f6 link br2 ph3 pv2 white bg-blue bw0 dim"
            onClick={this.props.onSubmitQuiz}
          >Submit
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    quiz: state.newQuiz
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmitQuiz: () => dispatch({type: actionType.SUBMIT_QUIZ}),
    onQuizChange: (value, type) => dispatch({type: actionType.CHANGE_FORM, value: value, type: type})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);