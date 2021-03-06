import React, { Component } from 'react';
import SkillSection from '../components/SkillSection';
import Loader from '../components/Loader';
import ExperienceSection from '../components/ExperienceSection';
import axios from 'axios';

export default class Skills extends Component {
    state = {
        loadingSkills: false,
        loadingExperiences: false,
        skillCategory: [],
        experience: [],
    }

    componentDidMount = () => {
        this.setState({ loadingSkills: true });
        this.setState({ loadingExperiences: true });

        axios.get('/api/skills')
            .then(res => {
                this.setState({ loadingSkills: false });
                this.setState({ skillCategory: res.data });
            })
            .catch(err => console.error(err));

        axios.get('/api/experiences')
            .then(res => {
                this.setState({ loadingExperiences: false });
                this.setState({ experience: res.data });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <>
                <section className="skills-section pad space-top-section-med">
                    { this.state.loadingSkills ? <Loader /> : null }
                    { this.state.skillCategory.map(skillCategory => (
                        <SkillSection
                        key={skillCategory._id}
                        skillCategory={skillCategory}
                        language={ 'EN' }
                        />
                    ))
                    }
                </section>
                <section className="pad pushdown">
                    { this.state.loadingExperiences
                    ? null
                    :
                    <div className="section-title flex left-aligned left-solid-border space-top-big">
                        <i className="fas fa-briefcase"></i>
                        <h4>Work Experience</h4>
                    </div>
                    }
                    { this.state.experience.map(experience => (
                        <ExperienceSection
                        key={experience._id}
                        experience={experience}
                        language={ 'EN' }
                        />
                    )) 
                    }
                </section>
            </>
        )
    }
}
