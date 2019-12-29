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
          name: '/',
          icon: 'fas fa-home',
          active: false,
        },
        {
          name: 'Projects',
          icon: 'fas fa-file',
          active: false,
        },
        {
          name: 'Skills',
          icon: 'fas fa-tools',
          active: false,
        },
        {
          name: 'Gallery',
          icon: 'fas fa-image',
          active: false,
        },
    ],
  }

  componentDidMount = () => {
    const newHeader = this.state.headerItems;
    switch(window.location.pathname){
      case '/':
        newHeader.forEach(item => item.active = false);
        newHeader[0].active = true;
        break;
      case '/projects':
        newHeader.forEach(item => item.active = false);
        newHeader[1].active = true;
        break;
      case '/skills':
        newHeader.forEach(item => item.active = false);
        newHeader[2].active = true;
        break;
      case '/gallery':
        newHeader.forEach(item => item.active = false);
        newHeader[3].active = true;
        break;
      default:
        break;
    }
    this.setState({ headerItems: newHeader });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header headerItems={ this.state.headerItems }/>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/websites"></Route>
            <Route path="/skills"></Route>
            <Route path="/gallery">
              <Gallery />
            </Route>
            <Route /* component={404} */ ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
