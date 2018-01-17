import React from 'react';

const input = (props) => {
  return (
    <div className="mt3 w-100">
      <label className="db fw4 lh-copy f6">{props.label}</label>
      <input
        onChange={props.changed} 
        className="pa2 input-reset ba bg-transparent w-100 br2 border-box" 
        type={props.type}
        value={props.value}
        placeholder={props.placeholder} />
    </div>

  );
}

export default input;