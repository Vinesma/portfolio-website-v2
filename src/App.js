import React, { Fragment, useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import { 
  BrowserRouter as Router, 
  Route 
} from 'react-router-dom';

function App() {
  const [headerItems, setHeaderItems] = useState([
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
  ]);

  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => (
          <Fragment>
            <Header headerItems={ headerItems }/>
            <Home />
          </Fragment>
        )} />
        <Route path="/websites" /* render={} */ />
        <Route path="/skills" /* render={} */ />
        <Route path="/gallery" component={Gallery}/>
      </div>
    </Router>
  );
}

export default App;
