import React, { Fragment } from 'react'

export default function ProjectBox(props) {
    function dateConvert(date){
        const newDate = new Date(date);
        return newDate.toLocaleString();
    }

    return (
        <Fragment>
            <div key={ props.repository.id } className="project-box">
                <div className="project-box-descriptionbox">
                    <a href={ props.repository.html_url } target="_blank" rel="noopener noreferrer">
                        <h3>{ props.repository.name }</h3>
                    </a> { ' Last updated: ' + dateConvert(props.repository.updated_at) }
                    <p>{ props.repository.description }</p>
                    <div className="link-group">
                        <div>
                            <i className="fas fa-link" title="URL for cloning via HTTP"></i>
                            <input type="text" readOnly="" value={ props.repository.clone_url }></input>
                        </div>
                        <div>
                            <i className="fas fa-key" title="URL for cloning via SSH"></i>
                            <input type="text" readOnly="" value={ props.repository.ssh_url }></input>
                        </div>
                    </div>
                    { props.repository.language !== null 
                    ? 
                        <div className="programming-language">
                            <h4>{ props.repository.language }</h4>
                        </div> 
                    : 
                        null 
                    }
                </div>
                <div className="project-box-infogroup">
                    <div className="infobox">
                        <i className="fas fa-star" title="No. of stars on this repo"></i>
                        { props.repository.stargazers_count }
                    </div>
                    <div className="infobox">
                        <i className="fas fa-eye" title="No. of watches on this repo"></i>
                        { props.repository.watchers_count }
                    </div>
                    <div className="infobox" title="No. of forks of this repo">
                        <i className="fas fa-code-branch"></i>
                        { props.repository.forks_count }
                    </div>
                    <div className="infobox" title="No. of open issues on this repo">
                        <i className="fas fa-exclamation-circle"></i>
                        { props.repository.open_issues_count }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
