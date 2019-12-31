import React, { Fragment } from 'react'

export default function GallerySection(props) {
    return (
        <Fragment>
            <div 
            key={ props.category.shorthand }
            className={ 'gallery-section-category ' + props.category.shorthand }>
                <div id={ 'id-' + props.category.shorthand } className="category-title">
                    <div>
                        <i className={ props.category.icon }></i>{ props.category.name }
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
        </Fragment>
    )
}
