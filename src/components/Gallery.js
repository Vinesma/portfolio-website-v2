import React from 'react'

function Gallery() {
    return (
        <section className="gallery-section">
            <div className="gallery-section-nav">
                <button className="nav-button">
                    <i class="fas fa-chevron-circle-up" />
                    Collapse All
                </button>
                <button className="nav-button">
                    <i class="fas fa-chevron-circle-down" />
                    Expand All
                </button>
            </div>
        </section>
    )
}

export default Gallery
