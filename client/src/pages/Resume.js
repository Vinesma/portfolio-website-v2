import React, { Component } from 'react';
import SkillSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';
import UserData from '../components/UserData';

class Resume extends Component {
    state = {
        personalData: {
            name: 'Otavio Cornelio da Silva',
            nationality: 'Brazilian',
            nationality_pt: 'Brasileiro',
            maritalStatus: 'Single',
            maritalStatus_pt: 'Solteiro',
            age: 22,
            address: 'Rua Edmundo Fernando Souza, Térreo, Nº 228, Cohab IV – CEP 56310-605',
            city: 'Petrolina',
            state: 'Pernambuco',
            homePhone: '(87) 3861-5612',
            cellPhone: '(87) 98806-6718',
            email: 'vinesma.work@gmail.com',
            website: 'https://github.com/Vinesma'            
        },
        education: [
            {
                school: 'Faculdade de Ciências Aplicadas de Petrolina - FACAPE',
                degree: 'Bachelor\'s degree',
                degree_pt: 'Bacharelado',
                field: 'Computer Science',
                field_pt: 'Ciência da Computação',
                startDate: '2017-08-01T00:00:00.000+00:00',
                endDate: '2018-02-01T00:00:00.000+00:00',
                description: 'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum',
                description_pt: 'testando testando testando testando testando',
            },
        ],
        others: [
            {
                description: '',
            },
        ],
        skillCategory: [
            {
                id: 1,
                name: 'Programming',
                icon: 'fas fa-code',
                skillList: [
                    {
                        name: 'Python',
                        proficiency: 3,
                        icon: '',
                    },
                    {
                        name: 'Python',
                        proficiency: 3,
                        icon: '',
                    },
                    {
                        name: 'Python',
                        proficiency: 2,
                        icon: '',
                    }
                ],
            },
            {
                id: 1,
                name: 'Programming',
                icon: 'fas fa-code',
                skillList: [
                    {
                        name: 'Python',
                        proficiency: 3,
                        icon: '',
                    },
                    {
                        name: 'Python',
                        proficiency: 2,
                        icon: '',
                    },
                    {
                        name: 'Python',
                        proficiency: 1,
                        icon: '',
                    }
                ],
            },
        ],
        experience: [
            {
                title: 'Database Assistant',
                type: 'Intern',
                company: 'Atac Distribuidora',
                comment: 'Worked on a database using winThor. Provided hardware and software maintenance.',
                comment_pt: 'Worked on a database using winThor. Provided hardware and software maintenance.',
                from: '2017-08-01T00:00:00.000+00:00',
                to: '2018-02-01T00:00:00.000+00:00',
                currentlyEmployed: false,
            }
        ],
    }

    render() {
        const language = this.props.language;
        
        return (
        <>
        <div className="resume-header">
            <div className="main-header-title">
                <h4>{ language === 'EN' ? 'Resume' : 'Currículo'}</h4>
            </div>
        </div>
        <section className="space-top-section-big pad">
            <section className="pad">
                <UserData
                personalData={ this.state.personalData }
                education={ this.state.education }
                language={ language }
                />
            </section>
            <section className="space-top-section-med pad">
                <div className="generic-section-title left-aligned left-solid-border space-top-big">
                    <i className="fas fa-tools p-icon"></i>
                    <h4>{ language === 'EN' ? 'Skills' : 'Conhecimentos' }</h4>
                </div>
                { this.state.skillCategory.map(skillCategory => (
                    <SkillSection
                    key={skillCategory._id}
                    skillCategory={skillCategory}
                    />
                ))
                }
            </section>
            <section className="space-top-section-med pad">                    
                { this.state.loadingExperiences
                ? null
                :
                <div className="generic-section-title left-aligned left-solid-border">
                    <i className="fas fa-briefcase"></i>
                    <h4>
                        { language === 'EN' ? 'Work Experience' : 'Experiência'}
                    </h4>
                </div> 
                }
                { this.state.experience.map(experience => (
                    <ExperienceSection
                    key={ experience._id }
                    experience={ experience }
                    language={ language }
                    />
                )) 
                }
            </section>
            <section className="space-top-section-med pad">
                <div className="generic-section-title left-aligned left-solid-border space-top-big">
                    <i className="fas fa-question-circle p-icon"></i>
                    <h4>{ language === 'EN' ? 'Others' : 'Outros' }</h4>
                </div>
            </section>
        </section>
        </>
        );
    }
}
 
export default Resume;