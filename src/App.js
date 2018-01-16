import React, { Component } from 'react';
import  { 
  BrowserRouter as Router,
  Route,
  Switch 
} from 'react-router-dom';

import Students from './containers/Students/Students';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Dashboard from './containers/Dashboard/Dashboard';
import Stats from './containers/Stats/Stats';
import NoMatch from './components/NoMatch/NoMatch';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="vw-100 w-100 dib">
          <Header />
          <Switch>
            <Route path="/students" component={Students} />
            <Route path="/dashboard/:id" component={Dashboard} />
            <Route path="/stats/:id" component={Stats} />
            <Route exact path="/" component={Home} />
            <Route component={NoMatch}/>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
