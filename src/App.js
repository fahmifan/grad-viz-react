import React, { Component } from 'react';
import  { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';

import Students from './containers/Students/Students';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="w-100">
        <Header />
          <Switch>
            <Route path="/students" component={Students} />
            <Route path="/" component={Home} />
          </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
