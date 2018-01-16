import React from 'react';

import TabItem from './TabItem/TabItem';

const tabs = (props) => (
  <ul className="center overflow-x-scroll overflow-x-hidden-ns border-box mv2 pl0 pv2 pb2 bb b--black-30">
    <TabItem link={`${props.url}/math`} >Math</TabItem>
    <TabItem link={`${props.url}/indonesia`} >Indonesia</TabItem>
    <TabItem link={`${props.url}/science`} >Science</TabItem>
    <TabItem link={`${props.url}/english`} >English</TabItem>
  </ul>
);

export default tabs;