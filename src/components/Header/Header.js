import React from 'react';

import NavItem from './NavItem/NavItem';

const header = () => (
  <span>
    <nav class="pa pa4-ns">
        <NavItem header="b f4-ns">Gradviz</NavItem>
        <NavItem>Students</NavItem>
        <NavItem>Tutorial</NavItem>
        <NavItem>Log Out</NavItem>
    </nav>
  </span>
);

export default header;