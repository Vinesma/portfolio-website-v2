import React, { Component } from 'react';
import CategoryNav from '../components/CategoryNav';
import GallerySection from '../components/GallerySection';

export default class Gallery extends Component {
    state = {
        categories: [
            {
                name: 'Wallpapers',
                icon: 'fas fa-paint-roller',
                shorthand: 'wa',
            },
            {
                name: 'Vectors',
                icon: 'fas fa-vector-square',
                shorthand: 've',
            },
            {
                name: 'Pixel Art',
                icon: 'fas fa-th',
                shorthand: 'pi',
            },
            {
                name: 'Traditional',
                icon: 'fas fa-pencil-alt',
                shorthand: 'tr',
            },
            {
                name: 'Icons & Logos',
                icon: 'fas fa-icons',
                shorthand: 'ic',
            },
            {
                name: 'Banners',
                icon: 'fas fa-scroll',
                shorthand: 'ba',
            },
        ],
    }

    render(){
        return (
            <section className="gallery-section">
                <div id="top" className="gallery-section-nav">
                    <button className="bold-text-button">
                        <i className="fas fa-chevron-circle-up" />
                        Collapse All
                    </button>
                    <button className="bold-text-button">
                        <i className="fas fa-chevron-circle-down" />
                        Expand All
                    </button>
                    { this.state.categories.map(category => (
                        <CategoryNav key={category.shorthand} category={category}/>
                        )) 
                    }
                </div>
                { this.state.categories.map(category => (
                    <GallerySection key={category.shorthand} category={category}/>
                )) 
                }
            </section>
        )
    }
}
