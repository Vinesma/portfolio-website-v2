import React, { Component } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Gallery from './components/Gallery';
import { 
  BrowserRouter as Router, 
  Route,
  Switch, 
} from 'react-router-dom';

class App extends Component {
  state = {
    headerItems: [
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
    ],
  }

  updateHeaderItems = (name, index) => {
    if (name === '/') {
      this.setState({ headerItems: [...this.state.headerItems.slice(1)] });
    } else {
      this.setState({ headerItems: [ {name: '/', icon: 'fas fa-home'}, ...this.state.headerItems ] });
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header headerItems={ this.state.headerItems } updateHeaderItems={this.updateHeaderItems}/>
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
}

export default App;
