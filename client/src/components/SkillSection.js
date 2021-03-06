import React from 'react'

export default function SkillSection(props) {
    const skillCategory = props.skillCategory;
    const language = props.language;
    let alternateColor = true;

    return (
        <div className="skill-category">
            <div className="category-title">
                <div>
                    { skillCategory.icon !== '' ? <i className={ skillCategory.icon }></i> : null }
                    { language === 'EN' ? skillCategory.name : skillCategory.name_pt }
                </div>
            </div>
            <div className="title-group">
                { skillCategory.skillList.map(skill => (
                    <div key={skill._id} className={ alternateColor ? 'skill-title' : 'skill-title-alt'}>
                        <div>
                            { skill.icon !== '' ? <i className={ skill.icon }></i> : null }
                            { skill.name }
                        </div>
                        <div>
                            { language === 'EN'
                            ?
                                  skill.proficiency === 3 ? 'Advanced'
                                : skill.proficiency === 2 ? 'Intermediary'
                                : skill.proficiency === 1 ? 'Basic' 
                                : null
                            :
                                  skill.proficiency === 3 ? 'Avançado'
                                : skill.proficiency === 2 ? 'Intermediário'
                                : skill.proficiency === 1 ? 'Básico'
                                : null
                            }
                        </div>
                        { alternateColor = !alternateColor }
                    </div>
                ))
                }
            </div>
        </div>
    )
}
