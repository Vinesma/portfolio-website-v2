import React, { Component } from 'react';
import SkillSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';

export default class Skills extends Component {
    state = {
        skillCategory: [
            {
                name: 'Web Development',
                icon: 'fas fa-file-code',
                skillList: [
                    {
                        name: 'HTML',
                        proficiency: 3,
                        icon: '',
                    },
                    {
                        name: 'CSS',
                        proficiency: 3,
                        icon: '',
                    },
                    {
                        name: 'React.js',
                        proficiency: 2,
                        icon: '',
                    },
                    {
                        name: 'Test',
                        proficiency: 1,
                        icon: '',
                    },
                ],
            },
            {
                name: 'Tools',
                icon: 'fas fa-wrench',
                skillList: [
                    {
                        name: 'Photoshop',
                        proficiency: 3,
                        icon: '',
                    },
                    {
                        name: 'CorelDraw',
                        proficiency: 3,
                        icon: '',
                    },
                    {
                        name: 'Krita',
                        proficiency: 2,
                        icon: '',
                    },
                ],
            },
            {
                name: 'Languages',
                icon: 'fas fa-globe',
                skillList: [
                    {
                        name: 'English',
                        proficiency: 3,
                        icon: '',
                    },
                ],
            },
        ],
        experience: [
            {
                title: 'Database Assistant',
                type: 'Intern',
                company: 'Atac Distribuidora',
                currentlyEmployed: false,
                from: 2017,
                to: 2018,
                comment: 'Primary obligations were database maintenance and configuring the various systems in the company.',
            },
        ],
    }

    render() {
        return (
            <>
                <section className="skills-section">
                    { this.state.skillCategory.map(skillCategory => (
                        <SkillSection key={skillCategory.name} skillCategory={skillCategory}/>
                    ))
                    }
                </section>
                <section className="experience-section">
                    <div className="experience-section-title">
                        <div>
                            <i className="fas fa-briefcase"></i>
                            Work Experience
                        </div>
                    </div>
                    { this.state.experience.map(experience => (
                        <ExperienceSection key={experience.title} experience={experience} />
                    )) 
                    }
                </section>
            </>
        )
    }
}
