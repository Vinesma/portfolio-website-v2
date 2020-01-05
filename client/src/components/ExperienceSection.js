import React from 'react'

export default function ExperienceSection(props) {
    const experience = props.experience;

    function dateConvert(date){
        const newDate = new Date(date);
        return  newDate.getMonth().toString() + '/' + newDate.getFullYear().toString();
    }

    return (
        <div className="experience-box">
            <div className="experience-title">
                <h3>{ experience.title }{ experience.type !== '' ? ' - ' + experience.type : null }</h3>
                { (experience.from !== null && experience.to !== null)
                ?
                    <h5><i className="fas fa-clock"></i>{ 'From ' + dateConvert(experience.from) + ' to ' + dateConvert(experience.to) }</h5>
                :
                    null
                }
                { experience.company !== '' ? <p>Company: { experience.company }</p> : null }                
            </div>
            <div className="comment">
                <p>{ experience.comment }</p>
                { experience.currentlyEmployed
                ? 
                    <p><i className="fas fa-user-check"></i>(I am currently employed here)</p>
                :
                    null 
                }
            </div>
        </div>
    )
}
