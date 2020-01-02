import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="main-header">
            <div className="main-header-title">
            <h4>{props.headerTitle}</h4>
            </div>
            <div className="main-header-options">
                { props.headerItems.map((item, index) => (
                    <Link key={item.name} to={item.name.toLowerCase()}>
                        <button 
                        className={ item.active ? 'nav-button-active' : 'nav-button'}
                        onClick={() => props.updateHeaderItems(item.name, index)}
                        >
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
            </div>
        </header>
    )
}

export default Header;
