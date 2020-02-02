import React from 'react'

export default function ExperienceSection(props) {
    const experience = props.experience;
    const language = props.language;

    function dateConvert(date){
        const newDate = new Date(date);
        return  newDate.getMonth().toString() + '/' + newDate.getFullYear().toString();
    }

    return (
        <div className="inline">
            <div className="container">
                <div>
                    <p className="u-bottom-solid-border-l">
                        { experience.title }
                        { experience.type !== '' ? ' - ' + experience.type : null }
                    </p>
                    { experience.from !== null && experience.to !== null
                    ?
                        <span className="space-top-small flex vertical-align-center">
                            <i className="fas fa-clock u-icon"></i>
                            <p>
                                { 'From ' + dateConvert(experience.from) + 
                                ' to ' + dateConvert(experience.to) }
                            </p>
                        </span>
                    : null
                    }
                    { experience.company !== null
                    ? 
                        <span className="space-top-small flex vertical-align-center">
                            <i className="fas fa-building u-icon"></i>
                            <p>{ experience.company }</p>
                        </span>
                    : null
                    }                
                </div>
                    <div className="space-top-med u-border width-full">
                        { experience.comment }
                    </div>
                    { experience.currentlyEmployed
                    ? 
                        <p className="space-top-small"><i className="fas fa-user-check u-icon"></i>(I am currently employed here)</p>
                    :
                        null 
                    }
            </div>
        </div>
    )
}
