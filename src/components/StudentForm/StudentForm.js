import React from 'react';

const studentForm = () => (
  <div className="pa1 w-80 pt2 center helvetica">
    <label 
      htmlFor="title"
      className="pa2 mt2">
      Quiz Title</label>
    <input className="mt1 mb2 w-100 border-box" type="text"/> 
    
    <br/>
    <label 
    htmlFor="title"
    className="pa2 mt2">
    Date</label>
    <input className="mt1 mb2 w-100 border-box" type="date"/>

    <br/>
    <label 
      htmlFor="title"
      className="pa2 mt2"
    >Score</label>
    <input className="mt1 mb2 w-100 mw-80-ns border-box" type="number"/>

    <table className="collapse center w-100 tc">
      <tbody>
        <tr className="striped--moon-gray">
          <th className="pa2">Date</th>
          <th className="pa2">Quiz Title</th>
          <th className="pa2">Score</th>
        </tr>
        <tr className="striped--light-gray tc">
          <td className="pa2 tc">2018-1-15</td>
          <td className="pa2">Linier Algebra</td>
          <td className="pa2">85</td>
        </tr>
        <tr className="striped--moon-gray">
          <td className="pa2">2018-1-15</td>
          <td className="pa2">Linier Algebra</td>
          <td className="pa2">85</td>
        </tr>
        <tr className="striped--light-gray">
          <td className="pa2">2018-1-15</td>
          <td className="pa2">Linier Algebra</td>
          <td className="pa2">85</td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default studentForm;