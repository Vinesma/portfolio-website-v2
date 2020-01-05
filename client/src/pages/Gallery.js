import React, { Component } from 'react';
import CategoryNav from '../components/CategoryNav';
import GallerySection from '../components/GallerySection';
import Loader from '../components/Loader';
import axios from 'axios';

export default class Gallery extends Component {
    state = {
        loading: false,
        categories: [],
    }

    componentDidMount = () => {
        this.setState({ loading: true });

        axios.get('/api/images')
            .then(res => {
                this.setState({ loading: false });
                this.setState({ categories: res.data });
            })
            .catch(err => console.error(err));
    }

    render(){
        return (
            <section className="gallery-section">
                { this.state.loading ? <Loader /> : null }
                <div id="top" className="gallery-section-nav">
                    {/* <button className="bold-text-button">
                        <i className="fas fa-chevron-circle-up" />
                        Collapse All
                    </button>
                    <button className="bold-text-button">
                        <i className="fas fa-chevron-circle-down" />
                        Expand All
                    </button> */}
                    { this.state.categories.map(category => (
                        <CategoryNav key={category._id} category={category}/>
                        )) 
                    }
                </div>
                { this.state.categories.map(category => (
                    <GallerySection key={category._id} category={category}/>
                ))
                }
            </section>
        )
    }
}
