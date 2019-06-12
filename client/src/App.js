import React, {Component} from 'react';
import './App.css';
import Search from './pages/Search';
import Saved from './pages/Saved'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch> 
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          </Switch>
        </div>
      </Router>
    )
  }
  
}

export default App;

