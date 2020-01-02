import React, { Fragment } from 'react'

export default function ProjectBox(props) {
    function dateConvert(date){
        const newDate = new Date(date);
        return newDate.toLocaleString();
    }

    return (
        <Fragment>
            <div className="project-box">
                <div className="project-box-top">
                    <div className="title-box">
                        <a href={ props.repository.html_url } target="_blank" rel="noopener noreferrer">
                            <h3>{ props.repository.name }</h3>
                        </a> 
                        { ' Last updated: ' + dateConvert(props.repository.updated_at) }
                        { (props.repository.homepage !== '' && props.repository.homepage !== null) 
                        ? 
                            <p>Deployed: <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={ props.repository.homepage }>{ props.repository.homepage }</a></p>
                        : 
                            null 
                        }
                    </div>
                    <div className="details-box">
                        <p>{ props.repository.description }</p>
                        <div className="link-group">
                            <div>
                                <i className="fas fa-link" title="URL for cloning via HTTP"></i>
                                <input type="text" readOnly value={ props.repository.clone_url }></input>
                            </div>
                            <div>
                                <i className="fas fa-key" title="URL for cloning via SSH"></i>
                                <input type="text" readOnly value={ props.repository.ssh_url }></input>
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
                    <div className="project-box-bottom">
                        <div className="info-box">
                            <i className="fas fa-star" title="No. of stars on this repo"></i>
                            { props.repository.stargazers_count }
                        </div>
                        <div className="info-box">
                            <i className="fas fa-eye" title="No. of watches on this repo"></i>
                            { props.repository.watchers_count }
                        </div>
                        <div className="info-box" title="No. of forks of this repo">
                            <i className="fas fa-code-branch"></i>
                            { props.repository.forks_count }
                        </div>
                        <div className="info-box" title="No. of open issues on this repo">
                            <i className="fas fa-exclamation-circle"></i>
                            { props.repository.open_issues_count }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
