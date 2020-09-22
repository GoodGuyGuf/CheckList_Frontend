import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Banner from './components/Banner';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './containers/Home';
import './App.css';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Banner}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/" component={Home}/>
      </Switch>
    </main>
  );
}

export default App;
