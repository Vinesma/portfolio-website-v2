import React, { Component } from 'react';

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
                        <a key={ category.shorthand } href={ '#id-' + category.shorthand }>
                            <button className="nav-button">
                                { category.icon === '' ? null : <i className={category.icon} />}                            
                                { category.name }
                            </button>
                        </a>
                        )) 
                    }
                </div>
                { this.state.categories.map(category => (
                    <div key={ category.shorthand } className={ 'gallery-section-category ' + category.shorthand }>
                        <div id={ 'id-' + category.shorthand } className="category-title">
                            <div>
                                <i className={category.icon}></i>{category.name}
                            </div>
                            <a href="#top"><i className="fas fa-chevron-up"></i></a>
                        </div>
                        <div className="category-image-display">
                            <div className="image-display-box">
                                <a href="https://i.imgur.com/kE6Wq1t.png">
                                    <img src="https://i.imgur.com/kE6Wq1tm.png" alt=""></img>
                                </a>
                            </div>
                            <div className="image-display-box">
                                <a href="https://i.imgur.com/kE6Wq1t.png">
                                    <img src="https://i.imgur.com/kE6Wq1tm.png" alt=""></img>
                                </a>
                            </div>
                            <div className="image-display-box">
                                <a href="https://i.imgur.com/kE6Wq1t.png">
                                    <img src="https://i.imgur.com/kE6Wq1tm.png" alt=""></img>
                                </a>
                            </div>
                        </div>
                    </div>
                )) 
                }
            </section>
        )
    }
}
