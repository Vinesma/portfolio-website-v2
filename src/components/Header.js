import React from 'react';

function Header() {
    return (
        <header className="main-header">
            <div className="main-header-title">
                <h4>Portfolio - Vinesma</h4>
            </div>
            <div className="main-header-options">
                <button className="standard-button nav-button">
                    Contact
                </button>
                <button className="standard-button nav-button">
                    Websites
                </button>
                <button className="standard-button nav-button">
                    Skills
                </button>
                <button className="standard-button nav-button">
                    <i class="fas fa-image"></i>
                    Gallery
                </button>
            </div>
        </header>
    )
}

export default Header;
