import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import NutritionsPage from './pages/nutritions-page/nutritions-page-component';

class App extends React.Component {
  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/termekek' component={NutritionsPage} />
        </Switch>
      </div>
    );
  }
}


export default App;
