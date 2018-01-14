import React from 'react';

import NavItem from './NavItem/NavItem';

const header = () => (
  <span>
    <nav class="pa pa4-ns">
        <NavItem header="b f4-ns" link="/">Gradviz</NavItem>
        <NavItem link="/students">Students</NavItem>
        <NavItem link="/tutorial">Tutorial</NavItem>
        <NavItem link="/logout">Log Out</NavItem>
    </nav>
  </span>
);

export default header;