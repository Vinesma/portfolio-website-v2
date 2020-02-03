import React, { Component } from 'react';
import Loader from '../components/Loader';
import ProjectBox from '../components/ProjectBox';
import axios from 'axios';

export default class Projects extends Component {
    state = {
        repositories: [],
        loading: false,
    }

    componentDidMount = () => {
        this.setState({ loading: true });

        axios.get('https://api.github.com/users/Vinesma/repos')
        .then(res => {
            let sortedRepos = this.sortReposByDate(res.data);
            this.setState({ loading: false });
            this.setState({ repositories: sortedRepos });
        })
        .catch(err => {
            this.setState({ loading: false });
            console.log(err);
        });
    }

    sortReposByDate = repo => {
        repo.sort((x, y)=> {
            const date1 = new Date(x.updated_at);
            const date2 = new Date(y.updated_at);
            return date2 - date1 ;
        });
        return repo;
    }

    render() {
        return (
            <section className="projects-section pad space-top-section-med">
                { this.state.loading ? <Loader /> : null }
                <div className="projects-section-group">
                    { this.state.repositories.map(repository => (
                        <ProjectBox key={ repository.id } repository={repository}/>
                    )) 
                    }
                </div>
            </section>
        )
    }
}
