import React, { Component } from 'react';

class Table extends Component {
  render() {
    return (
      <table className="collapse center w-100 tc helvetica">
        <tbody>
          <tr className="blue bb b--black-20">
            <th className="pa2">Date</th>
            <th className="pa2">Quiz Title</th>
            <th className="pa2">Score</th>
          </tr>
          {this.props.data}
          <tr className="bb b--black-20">
            <td className="pa2 tc">2018-1-15</td>
            <td className="pa2">Linier Algebra</td>
            <td className="pa2">85</td>
          </tr>
          <tr className="bb b--black-20">
            <td className="pa2">2018-1-15</td>
            <td className="pa2">Linier Algebra</td>
            <td className="pa2">85</td>
          </tr>
          <tr className="bb b--black-20">
            <td className="pa2">2018-1-15</td>
            <td className="pa2">Linier Algebra</td>
            <td className="pa2">85</td>
          </tr>
        </tbody>
      </table>
    );    
  }
}

export default Table;