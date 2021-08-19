import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path='/'>
          <PageOne />
        </Route>

        <Route exact path='/pulpeciki'>
          <PageTwo />
        </Route>

        <Route exact path='/pulpeciki1'>
          <PageThree />
        </Route>

      </Switch>
    

    {/* twarz meme */ }
    {/* just do it po 10 sek */ }
    {/* <img src="https://media.giphy.com/media/GcSqyYa2aF8dy/source.gif" alt="gif" /> */ }
  </Router>
  )
}

export default App;
