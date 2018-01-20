import React, { Component }from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Student from '../../components/Student/Student';
import * as actions from '../../store/actions/index';

class Students extends Component {

  componentDidMount() {
    this.props.onFetchStudetns();
  }

  onClickHandler = (id) => {
    this.props.history.push(`/dashboard/${id}`)
  }

  render() {
    return (
      <div className="w-80 pa3 pa2-ns flex flex-wrap mt5 center">
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
        <Student clicked={() => this.onClickHandler(1)} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    students: state.students.students,
    error: state.students.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onFetchStudetns: () => dispatch(actions.fetchStudents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Students);