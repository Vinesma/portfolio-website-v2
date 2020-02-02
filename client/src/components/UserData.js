import React from 'react';

export default function UserData(props){
    const language = props.language;

    const userData = props.personalData;
    const education = props.education;
    
    const nationality = language === 'EN' ? userData.nationality : userData.nationality_pt;
    const maritalStatus = language === 'EN' ? userData.maritalStatus : userData.maritalStatus_pt;
    const age = language === 'EN' ? userData.age + ' years old' : userData.age + ' anos';

    function dateConvert(date){
        const newDate = new Date(date);
        return  newDate.getMonth().toString() + '/' + newDate.getFullYear().toString();
    }

    return(
        <>
            <div className="section-title flex left-align left-solid-border">
                <i className="fas fa-user p-icon"></i>
                <h4>{ language === 'EN' ? 'Personal Data' : 'Dados Pessoais' }</h4>
            </div>
            <div className="inline">
                <div className="container">
                    <h3>{ userData.name }</h3>
                    <p className="space-top-small">{ nationality }, { maritalStatus }, { age }</p>
                    <div className="space-top-big flex vertical-align-center">
                        <i className="fas fa-map-marker-alt s-icon"></i>
                        <span className="left-solid-border-l">
                            <p>{ userData.address }</p>
                            <p className="space-top-small">{ userData.city } - { userData.state }</p>
                        </span>
                    </div>
                    <div className="space-top-big">
                        <span className="flex vertical-align-center">
                            <i className="fas fa-phone s-icon"></i>
                            <p className="left-solid-border-l">{ userData.homePhone + ' / ' + userData.cellPhone }</p>
                        </span>
                    </div>
                    <div className="space-top-mid">
                        <span className="flex vertical-align-center space-top-small">
                            <i className="fas fa-envelope s-icon"></i><p className="left-solid-border-l">{ userData.email }</p>
                        </span>
                        <span className="flex vertical-align-center space-top-small">
                            <i className="fas fa-external-link-alt s-icon"></i><p className="left-solid-border-l"> { userData.website }</p>
                        </span>
                    </div>
                </div>
            </div>
            <div className="section-title flex left-align left-solid-border space-top-big">
                <i className="fas fa-graduation-cap p-icon"></i>
                <h4>{ language === 'EN' ? 'Education' : 'Formação' }</h4>
            </div>
            <div className="inline">
                { education.map((educationItem, index) => (
                    <div className={ index > 0 ? 'container space-top-med' : 'container'}>
                        <div className="flex vertical-align-center">
                        <i className="fas fa-square-full s-icon"></i>
                        <span className="left-solid-border-l width-full">
                            { educationItem.school !== null
                            ? 
                                <span className="flex vertical-align-center u-bottom-solid-border-l">
                                    <i className="fas fa-school u-icon"></i>
                                    <p>{ educationItem.school }</p>
                                </span>
                            : null
                            }
                            { educationItem.degree !== null && educationItem.degree_pt !== null
                            ?
                                <p className="space-top-small">
                                    { language === 'EN'
                                    ? 
                                        educationItem.degree + ' in ' + educationItem.field
                                    : 
                                        educationItem.degree_pt + ' em ' + educationItem.field_pt
                                    }
                                </p>
                            :
                                <p className="space-top-small">
                                    { language === 'EN'
                                    ? educationItem.field
                                    : educationItem.field_pt
                                    }
                                </p>
                            }
                            { educationItem.startDate !== null && educationItem.endDate !== null
                            ?
                                <p className="space-top-small">
                                    { language === 'EN' ? 'From ' : 'De '}
                                    { dateConvert(educationItem.startDate) }
                                    { language === 'EN' ? ' to ' : ' à '}
                                    { dateConvert(educationItem.endDate) }
                                </p>
                            : null
                            }
                            { educationItem.description !== null
                            ?
                                <p className="space-top-med u-border width-full">{ language === 'EN' ? educationItem.description : educationItem.description_pt}</p>
                            : null
                            }
                        </span>
                        </div>
                    </div>
                ))
                }
            </div>
        </>
    )
}