import React from 'react'

function Home() {
    return (
        <section className="home-section">
            <div className="home-section-image">

            </div>
            <div className="home-section-links">
                <button className="home-button">
                    <i className="fab fa-github fa-2x" />
                    GitHub
                </button>
                <button className="home-button">
                    <i className="fab fa-linkedin fa-2x" />
                    LinkedIn
                </button>
                <button className="home-button">
                    <i className="fab fa-twitter fa-2x" />
                    Twitter
                </button>
                <button className="home-button">
                    <i className="fab fa-deviantart fa-2x" />
                    DeviantArt
                </button>
            </div>
        </section>
    )
}

export default Home
