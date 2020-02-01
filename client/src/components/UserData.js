import React from 'react';

export default function UserData(props){
    const language = props.language;

    const userData = props.personalData;
    const nationality = language === 'EN' ? userData.nationality : userData.nationality_pt;
    const maritalStatus = language === 'EN' ? userData.maritalStatus : userData.maritalStatus_pt;
    const age = language === 'EN' ? userData.age + ' years old' : userData.age + ' anos';

    return(
        <>
            <div className="generic-section-title left-aligned left-solid-border">
                <i className="fas fa-user s-icon"></i>
                <h4>{ language === 'EN' ? 'Personal Data' : 'Dados Pessoais' }</h4>
            </div>
            <div className="generic-container make-inline">
                <h3>{ userData.name }</h3>
                <p className="space-top-small">{ nationality }, { maritalStatus }, { age }</p>
                <div className="space-top-big vertical-aligned-flex">
                    <i className="fas fa-map-marker-alt s-icon"></i>
                    <span className="left-solid-border-l">
                        <p>{ userData.address }</p>
                        <p className="space-top-small">{ userData.city } - { userData.state }</p>
                    </span>
                </div>
                <div className="space-top-big">
                    <span className="vertical-aligned-flex">
                        <i className="fas fa-phone s-icon"></i>
                        <p className="left-solid-border-l">{ userData.homePhone + ' / ' + userData.cellPhone }</p>
                    </span>
                </div>
                <div className="space-top-mid">
                    <span className="vertical-aligned-flex">
                        <i className="fas fa-envelope s-icon"></i><p className="left-solid-border-l space-top-small">{ userData.email }</p>
                    </span>
                    <span className="vertical-aligned-flex">
                        <i className="fas fa-external-link-alt s-icon"></i><p className="left-solid-border-l space-top-small"> { userData.website }</p>
                    </span>
                </div>
            </div>
        </>
    )
}