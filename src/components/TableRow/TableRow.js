import React from 'react';

const tableRow = (props) => (
  <tr className="bb b--black-10">
    <td className="tc pv2">{props.dateCreated}</td>
    <td className="tc pv2">{props.quizTitle}</td>
    <td className="tc pv2">{props.nilai}</td>
  </tr>
);

export default tableRow;