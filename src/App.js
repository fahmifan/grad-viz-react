import React, { Component } from 'react';
import  { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';

import Students from './containers/Students/Students';
import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div className="w-100">
        <Header />
        <Students />
      </div>
    );
  }
}

export default App;
