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
    headerTitle: '',
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
    newHeader.forEach(item => item.active = false);
    switch(window.location.pathname){
      case '/':
        newHeader[0].active = true;
        this.setState({ headerTitle: 'PORTFOLIO - VINESMA' });
        break;
      case '/projects':
        newHeader[1].active = true;
        this.setState({ headerTitle: 'PROJECTS' });
        break;
      case '/skills':
        newHeader[2].active = true;
        this.setState({ headerTitle: 'SKILLS' });
        break;
      case '/gallery':
        newHeader[3].active = true;
        this.setState({ headerTitle: 'GALLERY' });
        break;
      default:
        break;
    }
    this.setState({ headerItems: newHeader });
  }
  
  updateHeaderItems = (name, index) => {
    const newHeader = this.state.headerItems;
    newHeader.forEach(item => item.active = false);
    newHeader[index].active = true;
    
    this.setState({ headerTitle: name === '/' ? 'PORTFOLIO - VINESMA' : name.toUpperCase() })
    this.setState({ headerItems: newHeader });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header 
          headerItems={ this.state.headerItems }
          headerTitle={ this.state.headerTitle }
          updateHeaderItems={this.updateHeaderItems}
          />
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
