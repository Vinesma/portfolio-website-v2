import React from 'react';

function Home() {
    return (
        <section
        className="flex between-align pad space-top-section-huge responsive-column"
        >
            <div className="flex-1">
                <img className="profile" src="./img/meimg.png" alt="Profile"></img>
            </div>
            <div className="space-left-med flex flex-2 column between-align wrap">
                <a href="https://github.com/Vinesma"
                target="_blank"
                rel="noopener noreferrer">
                    <button
                    className="button-hover-left"
                    >
                        <i className="fab fa-github fa-2x s-icon" />
                        GitHub
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/otavio-cornelio-198676136/"
                target="_blank"
                rel="noopener noreferrer">
                    <button className="button-hover-left">
                        <i className="fab fa-linkedin fa-2x s-icon" />
                        LinkedIn
                    </button>
                </a>
                <a href="https://twitter.com/Vine_sama"
                target="_blank"
                rel="noopener noreferrer">
                    <button className="button-hover-left">
                        <i className="fab fa-twitter fa-2x s-icon" />
                        Twitter
                    </button>
                </a>
                <a href="https://www.deviantart.com/vinesma"
                target="_blank"
                rel="noopener noreferrer">
                    <button className="button-hover-left">
                        <i className="fab fa-deviantart fa-2x s-icon" />
                        DeviantArt
                    </button>
                </a>
            </div>
        </section>
    )
}

export default Home
