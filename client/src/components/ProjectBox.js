import React, { Fragment } from 'react'

export default function ProjectBox(props) {
    const repository = props.repository;

    function dateConvert(date){
        const newDate = new Date(date);
        return newDate.toLocaleString();
    }

    return (
        <Fragment>
            <div className="project-box">
                <div className="project-box-top">
                    <div className="title-box">
                        <a href={ repository.html_url } target="_blank" rel="noopener noreferrer">
                            <h3>{ repository.name }</h3>
                        </a> 
                        { ' Last updated: ' + dateConvert(repository.updated_at) }
                        { (repository.homepage !== '' && repository.homepage !== null) 
                        ? 
                            <p>Deployed: <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={ repository.homepage }>{ repository.homepage }</a></p>
                        : 
                            null 
                        }
                    </div>
                    <div className="details-box">
                        <p>{ repository.description }</p>
                        <div className="link-group">
                            <div>
                                <i className="fas fa-link" title="URL for cloning via HTTP"></i>
                                <input type="text" readOnly value={ repository.clone_url }></input>
                            </div>
                            <div>
                                <i className="fas fa-key" title="URL for cloning via SSH"></i>
                                <input type="text" readOnly value={ repository.ssh_url }></input>
                            </div>
                        </div>
                        { repository.language !== null 
                        ? 
                            <div className="programming-language">
                                <h4>{ repository.language }</h4>
                            </div> 
                        : 
                            null 
                        }
                    </div>
                    <div className="project-box-bottom">
                        <div className="info-box">
                            <i className="fas fa-star" title="No. of stars on this repo"></i>
                            { repository.stargazers_count }
                        </div>
                        <div className="info-box">
                            <i className="fas fa-eye" title="No. of watches on this repo"></i>
                            { repository.watchers_count }
                        </div>
                        <div className="info-box" title="No. of forks of this repo">
                            <i className="fas fa-code-branch"></i>
                            { repository.forks_count }
                        </div>
                        <div className="info-box" title="No. of open issues on this repo">
                            <i className="fas fa-exclamation-circle"></i>
                            { repository.open_issues_count }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
