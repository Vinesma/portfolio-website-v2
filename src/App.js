import React, { Fragment } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

function App() {

  const headerItems = [
    {
      name: 'Projects',
      icon: 'fas fa-file',
    },
    {
      name: 'Skills',
      icon: 'fas fa-tools',
    },
    {
      name: 'Gallery',
      icon: 'fas fa-image',
    },
  ];

  return (
    <Router>
      <div className="App">
        <Header headerItems={ headerItems }/>
        <Route exact path="/" render={props => (
          <Fragment>
            <Home />
          </Fragment>
        )} />
        <Route path="/websites" /* render={} */ />
        <Route path="/skills" /* render={} */ />
        <Route path="/gallery" /* render={} */ />
      </div>
    </Router>
  );
}

export default App;
