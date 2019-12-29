import React from 'react';
import { 
    BrowserRouter as Router, 
    Link 
} from 'react-router-dom';

function Header(props) {
    return (
        <header className="main-header">
            <div className="main-header-title">
                <h4>PORTFOLIO - VINESMA</h4>
            </div>
            <div className="main-header-options">
                <Router>
                    { props.headerItems.map(item => (
                        <Link key={item.name} to={item.name.toLowerCase()}>
                            <button className={ item.active ? 'nav-button-active' : 'nav-button'}>
                                <i className={item.icon} />
                                {item.name === '/' ? 'Home' : item.name}
                            </button>
                        </Link>
                    ))
                    }
                    <a href="mailto:vinesma.work@gmail.com">
                        <button className="nav-button">
                            <i className="fas fa-envelope" />
                            Contact
                        </button>
                    </a>
                </Router>
            </div>
        </header>
    )
}

export default Header;
