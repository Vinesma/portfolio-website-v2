import React, { Component } from 'react';
import SkillSection from '../components/SkillSection';
import ExperienceSection from '../components/ExperienceSection';
import UserData from '../components/UserData';
import axios from 'axios';

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
        education: [],
        others: [
            {
                description: 'Driver\'s licence',
                description_pt: 'Carteira de Habilitação, tipo B'
            },
            {
                description: 'Driver\'s licence',
                description_pt: 'Carteira de Habilitação, tipo B'
            },
        ],
        skillCategory: [],
        experience: [],
    }

    componentDidMount = () => {
        axios.get('/api/education')
            .then(res => {
                this.setState({ education: res.data })
            })
            .catch(err => console.error(err));

        axios.get('/api/skills')
            .then(res => {
                this.setState({ skillCategory: res.data });
            })
            .catch(err => console.error(err));

        axios.get('/api/experiences')
            .then(res => {
                this.setState({ experience: res.data });
            })
            .catch(err => console.error(err));
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
                <div className="section-title flex left-aligned left-solid-border space-top-big">
                    <i className="fas fa-tools p-icon"></i>
                    <h4>{ language === 'EN' ? 'Skills' : 'Conhecimentos' }</h4>
                </div>
                <div className="inline">
                    <div className="container-no-bg">
                        { this.state.skillCategory.map(skillCategory => (
                            <SkillSection
                            key={skillCategory._id}
                            skillCategory={skillCategory}
                            />
                        ))
                        }
                    </div>
                </div>
            </section>
            <section className="space-top-section-med pad">                    
                { this.state.loadingExperiences
                ? null
                :
                <div className="section-title flex left-aligned left-solid-border">
                    <i className="fas fa-briefcase"></i>
                    <h4>
                        { language === 'EN' ? 'Work Experience' : 'Experiência'}
                    </h4>
                </div> 
                }
                { this.state.experience.map((experience, index) => (
                    <ExperienceSection
                    key={ experience._id }
                    index={index}
                    experience={ experience }
                    language={ language }
                    />
                )) 
                }
            </section>
            <section className="space-top-section-med pad pushdown">
                <div className="section-title flex left-aligned left-solid-border space-top-big">
                    <i className="fas fa-question-circle p-icon"></i>
                    <h4>{ language === 'EN' ? 'Others' : 'Outros' }</h4>
                </div>
                <div className="inline">
                    { this.state.others.map((item, index) => (
                        <div className={ index > 0 ? 'container space-top-med' : 'container'}>
                            <p>
                            { language === 'EN'
                            ? item.description
                            : item.description_pt
                            }
                            </p>
                        </div>
                    )) 
                    }   
                </div>
            </section>
        </section>
        </>
        );
    }
}
 
export default Resume;