import React from 'react';


const studentForm = () => (
  <div className="pa1 h-100 w-100 pt2 helvetica mr0">
    <form action="input-grade_submit" method="post" acceptCharset="utf-8" className="pb3 w-100">
      <fieldset id="input_grade" className="ba b--transparent ph0 mh0 w-100">
        <div className="mt3 w-100">
          <label className="db fw4 lh-copy f6">Quiz Title</label>
          <input className="pa2 input-reset ba bg-transparent w-100 br2" type="text" name="quiz-title"  id="quiz-title" />
        </div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6">Date</label>
          <input className="pa2 input-reset ba bg-transparent w-100 border-box br2" type="date" name="date"  id="date" />
        </div>
        <div className="mt3">
          <label className="db fw4 lh-copy f6">Score</label>
          <input className="pa2 input-reset ba bg-transparent w-100 br2" type="number" name="score"  id="score" />
        </div>      
      </fieldset>
      <div className="mt3"><input className="b ph3 pv2 input-reset ba b--black bg-transparent grow hover-blue pointer f6 br2" type="submit" value="Submit" /></div>
    </form>
    <div className="w-100 measure">
    </div>

  </div>
);

export default studentForm;