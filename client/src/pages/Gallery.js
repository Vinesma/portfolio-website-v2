import React, { Component } from 'react';
import CategoryNav from '../components/CategoryNav';
import GallerySection from '../components/GallerySection';
import Loader from '../components/Loader';
import axios from 'axios';

export default class Gallery extends Component {
    state = {
        loading: false,
        categories: [],
        categoryOpen: [],
    }

    componentDidMount = () => {
        this.setState({ loading: true });

        axios.get('/api/images')
            .then(res => {
                this.setState({ loading: false });
                this.setState({ categories: res.data });

                const numberOfCategories = this.state.categories.length;
                let categoryArray = [];

                for (let i = 0; i < numberOfCategories; i++) {
                    categoryArray.push(true);
                }

                this.setState({ categoryOpen: categoryArray });
            })
            .catch(err => console.error(err));
    }

    toggleAllCategories = e => {
        if (e.target.id === 'CollapseAll') {            
            this.setState({ categoryOpen: this.fillArray(false) });
        } else {            
            this.setState({ categoryOpen: this.fillArray(true) });
        }
    }

    toggleOneCategory = index => {
        const categoryArray = this.state.categoryOpen;
        
        categoryArray[index] = !categoryArray[index];

        this.setState({ categoryOpen: categoryArray });
    }

    fillArray(item){
        let categoryArray = [];

        for (let i = 0; i < this.state.categoryOpen.length; i++) {
            categoryArray.push(item);
        }
        return categoryArray;
    }

    render(){
        return (
            <section className="gallery-section">
                { this.state.loading ? <Loader /> : null }
                <div id="top" className="gallery-section-nav">
                    {
                        this.state.categories.length !== 0
                        ?
                            <>
                            <button
                            className="bold-text-button"
                            id="CollapseAll"
                            onClick={this.toggleAllCategories}
                            >
                                <i className="fas fa-chevron-circle-up" />
                                Collapse All
                            </button>
                            <button 
                            className="bold-text-button"
                            id="ExpandAll"
                            onClick={this.toggleAllCategories}
                            >
                                <i className="fas fa-chevron-circle-down" />
                                Expand All
                            </button>
                            </>
                        :
                            null
                    }
                    { this.state.categories.map(category => (
                        <CategoryNav key={category._id} category={category}/>
                        ))
                    }
                </div>
                { this.state.categories.map((category, index) => (
                    <GallerySection
                    key={category._id}
                    index={index}
                    category={category}
                    categoryOpen={this.state.categoryOpen[index]}
                    toggleOneCategory={this.toggleOneCategory}
                    />
                ))
                }
            </section>
        )
    }
}
