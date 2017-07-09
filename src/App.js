import React, { Component } from 'react';
// Components
import Header from './components/Header.js';
import Home from './components/Home';
import Code from './components/Code';
import Politic from './components/Politic';
import AboutMe from './components/AboutMe';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Switch>
        	<Route exact path="/" component={Home}/>
        	<Route path="/code" component={Code}/>
          <Route path="/world" component={Politic}/>
          <Route path="/about" component={AboutMe}/>
        </Switch>
      </div>
    );
  }
}

export default App;