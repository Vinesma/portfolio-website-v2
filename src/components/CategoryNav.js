import React, { Fragment } from 'react'

export default function CategoryNav(props) {
    return (
        <Fragment>
            <a href={ '#id-' + props.category.shorthand }>
                <button className="nav-button">
                    { props.category.icon === '' ? null : <i className={props.category.icon} />}                            
                    { props.category.name }
                </button>
            </a>
        </Fragment>
    )
}
