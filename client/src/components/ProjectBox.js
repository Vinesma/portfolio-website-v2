import React, { Fragment } from 'react';
import moment from 'moment';

export default function ProjectBox(props) {
    const repository = props.repository;

    function dateConvert(date){
        const repositoryDate = new Date(date);
        return moment(repositoryDate).fromNow();
    }

    return (
        <Fragment>
            <div className="project-box">
                <div className="project-box-top">
                    <div className="title-box">
                        <a href={ repository.html_url } target="_blank" rel="noopener noreferrer">
                            <h3>{ repository.name }</h3>
                        </a> 
                        <i className="fas fa-clock"></i>
                        { ' Last updated ' + dateConvert(repository.updated_at) }
                    </div>
                </div>
                <div className="details-box">
                    <div className="desc-link-group">
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
                            { (repository.homepage !== '' && repository.homepage !== null) 
                            ?   
                                <div className="deployed-at">
                                    <i className="fas fa-external-link-alt" title="Deployed at"></i>
                                    <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={ repository.homepage }>{ repository.homepage }</a>
                                </div>
                            : 
                                null 
                            }
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
                    <div className="project-box-bottom">
                        <div className="info-box">
                            <a href={ repository.html_url + '/stargazers' } target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-star" title="No. of stars on this repo"></i>
                                { repository.stargazers_count }
                            </a>
                        </div>
                        <div className="info-box">
                            <a href={ repository.html_url + '/watchers' } target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-eye" title="No. of watches on this repo"></i>
                                { repository.watchers_count }
                            </a>
                        </div>
                        <div className="info-box" title="No. of forks of this repo">
                            <a href={ repository.html_url + '/network/members' } target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-code-branch"></i>
                                { repository.forks_count }
                            </a>
                        </div>
                        <div className="info-box" title="No. of open issues on this repo">
                            <a href={ repository.html_url + '/issues' } target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-exclamation-circle"></i>
                                { repository.open_issues_count }
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
