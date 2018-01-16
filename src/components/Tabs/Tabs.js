import React from 'react';

import TabItem from './TabItem/TabItem';

const tabs = (props) => (
  <ul className="center mb0 pl0 pv2 pb1 bb b--black-30">
    <TabItem link={`${props.url}/math`} >Math</TabItem>
    <TabItem link={`${props.url}/indonesia`} >Indonesia</TabItem>
    <TabItem link={`${props.url}/science`} >Science</TabItem>
    <TabItem link={`${props.url}/english`} >English</TabItem>
  </ul>
);

export default tabs;