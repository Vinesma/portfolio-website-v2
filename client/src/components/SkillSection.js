import React from 'react'

export default function SkillSection(props) {
    const skillCategory = props.skillCategory;
    let alternateColor = true;

    return (
        <div className="skill-category">
            <div className="category-title">
                <div>
                    { skillCategory.icon !== '' ? <i className={ skillCategory.icon }></i> : null }
                    { skillCategory.name }
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
                            { skill.proficiency === 3 ? 'Advanced'
                            : skill.proficiency === 2 ? 'Intermediary'
                            : skill.proficiency === 1 ? 'Basic' 
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
