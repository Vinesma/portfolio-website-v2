import React, { Component } from 'react';
import axios from 'axios';

export default class Projects extends Component {
    state = {
        repositories: [],
    }

    componentDidMount = () => {
        axios.get('https://api.github.com/users/Vinesma/repos')
        .then(res => this.setState({ repositories: res.data }))
        .catch(err => console.log(err));
    }

    dateConvert = date => {
        const newDate = new Date(date);
        return newDate.toLocaleString();
    }

    render() {
        return (
            <section className="projects-section">
                <div className="projects-section-group">
                    { this.state.repositories.map(repository => (
                        <div key={ repository.id } className="project-box">
                            <div className="project-box-descriptionbox">
                                <a href={ repository.html_url }>
                                    <h3>{ repository.name }</h3>
                                </a> { ' Last updated: ' + this.dateConvert(repository.updated_at) }
                                <p>{ repository.description }</p>
                            </div>
                            <div className="project-box-infogroup">
                                <div className="infobox">
                                    <i className="fas fa-star" title="No. of stars on this repo"></i>
                                    { repository.stargazers_count }
                                </div>
                                <div className="infobox">
                                    <i className="fas fa-eye" title="No. of watches on this repo"></i>
                                    { repository.watchers_count }
                                </div>
                                <div className="infobox" title="No. of forks of this repo">
                                    <i className="fas fa-code-branch"></i>
                                    { repository.forks_count }
                                </div>
                                <div className="infobox" title="No. of open issues on this repo">
                                    <i className="fas fa-exclamation-circle"></i>
                                    { repository.open_issues_count }
                                </div>
                            </div>
                        </div>
                    )) 
                    }
                </div>
            </section>
        )
    }
}
