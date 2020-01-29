import React from 'react';

export default function GallerySection(props) {
    const category = props.category;

    return (
        <div
        key={ category._id }
        className={ 'gallery-section-category ' + category.shorthand }
        >
            <div
            id={ 'id-' + category.shorthand }
            className="category-title"
            onClick={() => props.toggleOneCategory(props.index)}
            >
                <div>
                    { category.icon !== ''
                    ?
                        <div><i className={ category.icon }></i>{ category.name }</div>
                    :
                        <div>{ category.name }</div>
                    }
                </div>
                <a href="#top"><i className="fas fa-chevron-up"></i></a>
            </div>
            {
                props.categoryOpen === true
                ?
                <div className="category-image-display">
                    { category.imageList.map(image => (
                        <div key={image._id} className="image-display-box">
                            <a href={image.link} title={image.hoverComment} target="_blank" rel="noopener noreferrer">
                                <img src={image.thumbnail} alt=""></img>
                            </a>
                        </div>
                    ))
                    }
                </div>
                :
                    null
            }
        </div>
    )
}
