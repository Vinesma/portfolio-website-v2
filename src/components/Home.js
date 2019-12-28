import React from 'react';

function Home() {
    return (
        <section className="home-section">
            <div className="home-section-image">
                <img src="./img/meimg.png" alt="Profile"></img>
            </div>
                <div className="home-section-links">
                    <a href="https://github.com/Vinesma">
                        <button className="home-button">
                            <i className="fab fa-github fa-2x" />
                            GitHub
                        </button>
                    </a>
                    <a href="https://www.linkedin.com/in/otavio-cornelio-198676136/">
                        <button className="home-button">
                            <i className="fab fa-linkedin fa-2x" />
                            LinkedIn
                        </button>
                    </a>
                    <a href="https://twitter.com/Vine_sama">
                        <button className="home-button">
                            <i className="fab fa-twitter fa-2x" />
                            Twitter
                        </button>
                    </a>
                    <a href="https://www.deviantart.com/vinesma">
                        <button className="home-button">
                            <i className="fab fa-deviantart fa-2x" />
                            DeviantArt
                        </button>
                    </a>
                </div>
        </section>
    )
}

export default Home
