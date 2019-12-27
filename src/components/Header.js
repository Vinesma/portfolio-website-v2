import React from 'react';
import { 
    BrowserRouter as Router, 
    Link 
} from 'react-router-dom';

function Header() {
    return (
        <header className="main-header">
            <div className="main-header-title">
                <h4>PORTFOLIO - VINESMA</h4>
            </div>
            <div className="main-header-options">
                <Router>
                    <a href="mailto:vinesma.work@gmail.com">
                        <button className="nav-button">
                            <i class="fas fa-envelope" />
                            Contact
                        </button>
                    </a>
                    <Link to="/websites">
                        <button className="nav-button">
                            <i class="fas fa-file" />
                            Websites
                        </button>
                    </Link>
                    <Link to="/skills">
                        <button className="nav-button">
                            <i class="fas fa-tools" />
                            Skills
                        </button>
                    </Link>
                    <Link to="/gallery">
                        <button className="nav-button">
                            <i class="fas fa-image" />
                            Gallery
                        </button>
                    </Link>
                </Router>
            </div>
        </header>
    )
}

export default Header;
