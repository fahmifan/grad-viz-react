import React, { Component }from 'react';

import Student from '../../components/Student/Student';

class Students extends Component {
  render() {
    return (
      <div className="w-80 center">
        <Student />
        <Student />
        <Student />
        <Student />
      </div>
    );
  }
}

export default Students;