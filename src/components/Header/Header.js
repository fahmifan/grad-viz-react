import React from 'react';

import NavItem from './NavItem/NavItem';

const header = () => (
  <nav className="fixed dib w-100 h3 flex items-center center pa2 pa4-ns shadow-4 z-999 bg-white">
      <NavItem header="b f4-ns" link="/">Gradviz</NavItem>
      <NavItem link="/students">Students</NavItem>
      <NavItem link="/tutorial">Tutorial</NavItem>
      <NavItem link="/logout">Log Out</NavItem>
  </nav>
);

export default header;