import React from 'react'

export default function ExperienceSection(props) {
    const experience = props.experience;

    return (
        <div className="experience-box">
            <div className="experience-title">
                <h3>{ experience.title }</h3>
                { (experience.from !== null && experience.to !== null)
                ?
                    ''
                :
                    null
                }
            </div>
            <div className="comment">
                { experience.comment }
            </div>
        </div>
    )
}
