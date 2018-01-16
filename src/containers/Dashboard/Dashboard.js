import React, { Component } from 'react';

import Tabs from '../../components/Tabs/Tabs';
import StudentForm from '../../components/StudentForm/StudentForm';
import Student from '../../components/Student/Student';

class Dashoard extends Component {

  statsClickHandler = (id) => {
    this.props.history.push(`/stats/${id}`)
  }

  render() {
    return (
        <Tabs url={this.props.match.url} />
        <div className="flex w-95 h-100 mt0 ph2 pv3 flex flex-wrap">
          <StudentForm />
          <span className="center db">
            <Student />
            <button
              onClick={() => this.statsClickHandler(1)} 
              className="db center pointer shadow-4 w4 f6 link dim br3 ph3 pv2 mb2 white bg-blue bw0 overflow-hidden"
              >Stats</button>
            <button 
              className="db center pointer shadow-4 w4 f6 link dim br3 ph3 pv2 mb2 white bg-blue bw0 overflow-hidden"
              >Compare</button>
          </span>
        </div>
      </div>
    );
  }
}

export default Dashoard;