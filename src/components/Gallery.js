import React, { Component } from 'react';

class Gallery extends Component {
    state = {
        categories: [
            {
                name: 'Wallpapers',
                icon: '',
            },
            {
                name: 'Vectors',
                icon: '',
            },
            {
                name: 'Pixel Art',
                icon: '',
            },
            {
                name: 'Traditional',
                icon: '',
            },
            {
                name: 'Icons & Logos',
                icon: '',
            },
            {
                name: 'Banners',
                icon: '',
            },
        ],
    }

    render(){
        return (
            <section className="gallery-section">
                <div className="gallery-section-nav">
                    <button className="bold-text-button">
                        <i class="fas fa-chevron-circle-up" />
                        Collapse All
                    </button>
                    <button className="bold-text-button">
                        <i class="fas fa-chevron-circle-down" />
                        Expand All
                    </button>
                    { this.state.categories.map(category => (
                        <button className="nav-button">
                            { category.icon === '' ? null : <i class={category.icon} />}                            
                            { category.name }
                        </button>
                        )) 
                    }
                </div>
            </section>
        )
    }
}

export default Gallery
