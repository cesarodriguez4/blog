import React, { Component } from 'react';
// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Code from './components/Code';
import Politic from './components/Politic';
import AboutMe from './components/AboutMe';
import Contact from './components/Contact';
import Doc from './components/Doc';
import CV from './components/CV';
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
            <Route path="/contact" component={Contact}/>
            <Route path="/about" component={AboutMe}/>
            <Route path="/docs" component={Doc}/>
            <Route path="/CV" component={CV}/>
        </Switch>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;