import React from 'react';
import PersonalDetailPreview from './PersonalDetailPreview';
import AcademicDetailPreview from './AcademicDetailPreview';
import ProfessionalDetailPreview from './ProfessionalDetailPreview';

function Preview (props){
    console.log(props);
    return(
        <div className='preview'>
            <h1> Curriculum Vitae </h1>
            <PersonalDetailPreview data={props.details.personalDetail} onEdit={props.edit} />
            <AcademicDetailPreview data={props.details.academicDetail} onEdit={props.edit} />
            <ProfessionalDetailPreview data={props.details.professionalDetail} onEdit={props.edit} />
        </div>
    );
}
export default Preview;
