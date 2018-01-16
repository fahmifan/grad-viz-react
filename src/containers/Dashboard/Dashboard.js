import React, { Component } from 'react';

import Tabs from '../../components/Tabs/Tabs';
import StudentForm from '../../components/StudentForm/StudentForm';
import Student from '../../components/Student/Student';
import Table from '../../components/Table/Table';

class Dashoard extends Component {

  statsClickHandler = (id) => {
    this.props.history.push(`/stats/${id}`)
  }

  render() {
    return (
      <div className="w-100 w-80-ns h-100 mt5 pt2 center relative">
        <Tabs url={this.props.match.url} />
        <div className="w-100 h-100 mt0 ph2 pv3 flex flex-wrap">
          <span className="w-100 w-60-ns w-80-l">
            <StudentForm />
          </span>
          <span className="mr-auto ml-auto mr0-ns mr0 mv3 pt3 db">
            <Student />
            <button
              onClick={() => this.statsClickHandler(1)} 
              className="db center pointer shadow-4 w4 f6 link dim br3 ph3 pv2 mb2 white bg-blue bw0 overflow-hidden"
              >Stats</button>
            <button 
              className="db center pointer shadow-4 w4 f6 link dim br3 ph3 pv2 mb2 white bg-blue bw0 overflow-hidden"
              >Compare</button>
          </span>
          <span className="mt3 mb5 w-100">
            <Table />
          </span>
        </div>
      </div>
    );
  }
}

export default Dashoard;