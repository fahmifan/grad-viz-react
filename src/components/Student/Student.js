import React from 'react';

import picture from '../../assets/profile_fahmi.jpg';

const student = (props) => (
  <section className="tc pa2 dib">
    <article className="hide-child relative ba b--black-10 mw4 center pointer grow helvetica br4 shadow-4">
    <div className="h-100">  
      <img 
        src={picture} 
        alt="Photo of John Doe" 
        className="db h4" />
    </div>
      <div className="pa2 bt b--black-20">
        <p className="f4 db link mv1 dark-blue hover-blue pointer">John Doe</p> 
        <p className="f5 gray mv1">140810160028</p>
      </div>
    </article>
  </section>
);

export default student;