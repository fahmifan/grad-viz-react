import React from 'react';
import { Link } from 'react-router-dom';

const tabItem = (props) => (
  <Link to={props.link} className="w3 pointer sans-serif b f5 mb0 pv2 ph3 br1 gray link no-underline hover-blue hover-bg-white">{props.children}</Link>
);

export default tabItem;