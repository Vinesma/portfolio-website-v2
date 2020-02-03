import React, { Component } from 'react';
import './styles/App.scss';
import Header from './components/Header';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import PageError from './pages/PageError';
import Resume from './pages/Resume';
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
        this.setState({ headerTitle: 'ERROR 404' });
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
          <Switch>
            <Route exact path="/">
              <Header
              headerItems={ this.state.headerItems }
              headerTitle={ this.state.headerTitle }
              updateHeaderItems={ this.updateHeaderItems }
              />
              <Home />
            </Route>
            <Route path="/projects">
              <Header 
              headerItems={ this.state.headerItems }
              headerTitle={ this.state.headerTitle }
              updateHeaderItems={ this.updateHeaderItems }
              />
              <Projects />
            </Route>
            <Route path="/skills">
              <Header 
              headerItems={ this.state.headerItems }
              headerTitle={ this.state.headerTitle }
              updateHeaderItems={ this.updateHeaderItems }
              />
              <Skills />
            </Route>
            <Route path="/gallery">
              <Header 
              headerItems={ this.state.headerItems }
              headerTitle={ this.state.headerTitle }
              updateHeaderItems={ this.updateHeaderItems }
              />
              <Gallery />
            </Route>
            <Route path="/resume">
              <Resume language={'EN'} />
            </Route>
            <Route path="/resume_pt">
              <Resume language={'PT'} />
            </Route>
            <Route>
              <Header 
              headerItems={ this.state.headerItems }
              headerTitle={ this.state.headerTitle }
              updateHeaderItems={ this.updateHeaderItems }
              />
              <PageError />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
