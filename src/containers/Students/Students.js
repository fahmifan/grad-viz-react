import React, { Component }from 'react';
import { Route } from 'react-router-dom';

import Student from '../../components/Student/Student';

class Students extends Component {

  onClickHandler = (id) => {
    this.props.history.push(`/dashboard/${id}`)
  }

  render() {
    return (
      <div className="w-90 center pa2 flex flex-wrap ">
        <Student clicked={() => this.onClickHandler(1)} />
      </div>
    );
  }
}

export default Students;