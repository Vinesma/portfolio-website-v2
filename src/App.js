import React, { Fragment } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" render={props => (
          <Fragment>
            <Home />
          </Fragment>
        )}>
        </Route>
        <Route path="/websites">

        </Route>
        <Route path="/skills">

        </Route>
        <Route path="/gallery">

        </Route>
      </div>
    </Router>
  );
}

export default App;
