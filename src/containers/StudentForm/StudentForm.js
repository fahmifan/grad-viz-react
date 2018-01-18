import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actionType from '../../store/action';
import Input from '../../components/Input/Input';

class StudentForm extends Component {

  onQuizChange = (evt, type) => {
    const newQuiz = {...this.state.quiz};
    newQuiz[type] = evt.target.value;
    this.setState({
      quiz: newQuiz
    })
  }

  render() {
    return (
      <div className="pa1 h-100 w-100 pt2 helvetica mr0">
        <fieldset id="input_grade" className="ba b--transparent ph0 mh0 w-100">
          <Input
            label={"Quiz Title"}
            type={"text"}
            changed={(evt) => this.props.onQuizChange(evt.target.value, 'quiz_title')}
            value={this.props.quiz.quiz_title}
            placeholder={"Your title"}
          />
          <Input
            label={"Date"}
            type={"date"}
            changed={(evt) => this.props.onQuizChange(evt.target.value, 'created_at')}
            value={this.props.quiz.created_at}
          />
          <Input
            label={"Score"}
            type={"number"}
            changed={(evt) => this.props.onQuizChange(evt.target.value, 'value')}
            value={this.props.quiz.value}
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
  console.log(state.newQuiz);
  return {
    quiz: state.newQuiz
  }
}

const mapDispatchToProps = dispatch => {
  console.log(dispatch)
  return {
    onSubmitQuiz: () => dispatch({type: actionType.SUBMIT_QUIZ}),
    onQuizChange: (value, type) => dispatch({type: actionType.CHANGE_FORM, value: value, field: type})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);