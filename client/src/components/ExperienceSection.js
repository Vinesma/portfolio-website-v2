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
            <div className={ props.index > 0 ? 'container space-top-med' : 'container' }>
                <div>
                    <p className="u-bottom-solid-border-l">
                        { language === 'EN' ? experience.title : experience.title_pt }
                        { experience.type !== ''
                        ? language === 'EN' ? ' - ' + experience.type : ' - ' + experience.type_pt 
                        : null
                        }
                    </p>
                    { experience.from !== null && experience.to !== null
                    ?
                        <span className="space-top-small flex vertical-align-center">
                            <i className="fas fa-clock u-icon"></i>
                            <p>
                                { language === 'EN'
                                ? 'From ' + dateConvert(experience.from) + ' to ' + dateConvert(experience.to)
                                : 'De ' + dateConvert(experience.from) + ' à ' + dateConvert(experience.to)
                                }
                            </p>
                        </span>
                    : null
                    }
                    { experience.company !== ''
                    ? 
                        <span className="space-top-small flex vertical-align-center">
                            <i className="fas fa-building u-icon"></i>
                            <p>{ experience.company }</p>
                        </span>
                    : null
                    }                
                </div>
                    <div className="space-top-med u-border width-full add-pad">
                        { language === 'EN' ? experience.comment : experience.comment_pt }
                    </div>
                    { experience.currentlyEmployed
                    ? 
                        <p className="space-top-small">
                            <i className="fas fa-user-check u-icon"></i>
                            { language === 'EN'
                            ? '(I am currently employed here)'
                            : '(Atualmente estou empregado neste local)'
                            }
                        </p>
                    :
                        null 
                    }
            </div>
        </div>
    )
}
