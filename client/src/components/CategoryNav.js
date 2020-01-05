import React, { Fragment } from 'react'

export default function CategoryNav(props) {
    const category = props.category;

    return (
        <Fragment>
            <a href={ '#id-' + category.shorthand }>
                <button className="nav-button">
                    { category.icon === '' ? null : <i className={category.icon} />}                            
                    { category.name }
                </button>
            </a>
        </Fragment>
    )
}
