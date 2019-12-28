import React, { useState } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import { 
  BrowserRouter as Router, 
  Route,
  Switch, 
} from 'react-router-dom';

function App() {
  const [headerItems, setHeaderItems] = useState(
    [
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
    ]
  );

  function handleHeaderItems(itemName) {
    if (itemName === '/') {
      setHeaderItems(prevHeaderItems => prevHeaderItems.shift());
    } else {
      setHeaderItems(prevHeaderItems => {
        const updatedValues = [ ...prevHeaderItems ];
        updatedValues.unshift({ name: '/', icon: 'fas fa-home' });
        return { ...prevHeaderItems, ...updatedValues };
      });
    }
    
  }

  return (
    <Router>
      <div className="App">
        <Header headerItems={ headerItems } handleHeaderItems={handleHeaderItems}/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/websites"></Route>
          <Route path="/skills"></Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
