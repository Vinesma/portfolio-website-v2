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
                <section className="skills-section">
                    { this.state.loadingSkills === true ? <Loader /> : null }
                    { this.state.skillCategory.map(skillCategory => (
                        <SkillSection key={skillCategory._id} skillCategory={skillCategory}/>
                    ))
                    }
                </section>
                <section className="experience-section">                    
                    { this.state.loadingExperiences === true 
                    ? null
                    :
                    <div className="experience-section-title">
                        <div>
                            <i className="fas fa-briefcase"></i>
                            Work Experience
                        </div>
                    </div> 
                    }
                    { this.state.experience.map(experience => (
                        <ExperienceSection key={experience._id} experience={experience} />
                    )) 
                    }
                </section>
            </>
        )
    }
}
